# Google OAuth with NextAuth v5 - Complete Implementation Guide

## Overview

This guide walks you through implementing Google OAuth authentication in a Next.js 14+ application using NextAuth v5 (Auth.js) and deploying to Vercel. This is the simplest, most reliable authentication setup for modern web applications.

## What You'll Build

A complete authentication system where users can sign in with their Google account. The system will:
- Authenticate users through Google's OAuth service
- Store user data and sessions in a PostgreSQL database
- Persist sessions across page refreshes and browser restarts
- Protect routes that require authentication
- Handle sign-in and sign-out flows

## Prerequisites

Before starting, you need:
- Node.js 18 or later installed
- A Vercel account (free tier works fine)
- A Google account for creating OAuth credentials
- Basic familiarity with Next.js and React

## Step 1: Project Setup

### Create a New Next.js Project

Open your terminal and run:

```bash
npx create-next-app@latest my-google-auth-app
```

When prompted, select these options:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- src directory: Yes
- App Router: Yes
- Import alias: Yes (use default @/*)

Navigate into your project:

```bash
cd my-google-auth-app
```

### Install Required Dependencies

Install NextAuth v5 and related packages:

```bash
npm install next-auth@beta @auth/prisma-adapter @prisma/client
npm install -D prisma
```

## Step 2: Database Setup with Neon

### Create a Neon Database

Neon provides free PostgreSQL databases that work perfectly with Vercel.

1. Go to [neon.tech](https://neon.tech) and sign up or log in
2. Click "Create Project"
3. Choose a project name (like "my-auth-app")
4. Select a region close to your users
5. Click "Create Project"

### Get Your Database Connection String

Once created, Neon shows you a connection string that looks like:

```
postgresql://username:password@ep-cool-name-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

Copy this entire string - you'll need it soon.

### Initialize Prisma

In your project directory, initialize Prisma:

```bash
npx prisma init
```

This creates a `prisma` directory with a `schema.prisma` file.

### Configure Your Database Schema

Open `prisma/schema.prisma` and replace its contents with:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Account {
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@id([provider, providerAccountId])
}

model Session {
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model VerificationToken {
  identifier String
  token      String
  expires    DateTime

  @@id([identifier, token])
}
```

### Create Your Database Tables

Create a `.env.local` file in your project root and add your database connection string:

```env
DATABASE_URL="your-neon-connection-string-here"
```

Now push the schema to your database:

```bash
npx prisma db push
```

You should see a success message confirming the tables were created.

## Step 3: Google OAuth Configuration

### Access Google Cloud Console

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Sign in with your Google account
3. Click "Select a project" at the top
4. Click "New Project"

### Create a New Google Cloud Project

1. Enter a project name (like "My Auth App")
2. Click "Create"
3. Wait for the project to be created (takes a few seconds)
4. Select your new project from the project dropdown

### Enable Required APIs

Google OAuth requires the Google+ API to be enabled:

1. In the left sidebar, go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

### Configure OAuth Consent Screen

Before creating credentials, you need to configure the consent screen:

1. Go to "APIs & Services" → "OAuth consent screen"
2. Choose "External" (unless you have a Google Workspace account)
3. Click "Create"

Fill in the required information:
- App name: Your application name
- User support email: Your email address
- Developer contact email: Your email address

Scroll down and click "Save and Continue"

For Scopes, click "Add or Remove Scopes":
- Add `userinfo.email`
- Add `userinfo.profile`
- Click "Update" then "Save and Continue"

For Test Users (during development):
- Click "Add Users"
- Add your email address and any other test accounts
- Click "Save and Continue"

Click "Back to Dashboard"

### Create OAuth Credentials

Now create your OAuth client:

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Select "Web application" as the application type
4. Name it "My Auth App Web Client"

Add Authorized Redirect URIs:
- For local development: `http://localhost:3000/api/auth/callback/google`
- For production: `https://your-domain.vercel.app/api/auth/callback/google`

(You'll update the production URL after deploying to Vercel)

Click "Create"

### Save Your Credentials

Google will show you:
- Client ID (looks like: `123456789-abcdefg.apps.googleusercontent.com`)
- Client Secret (looks like: `GOCSPX-abcd1234efgh5678`)

Copy both of these - you'll need them for your environment variables.

## Step 4: Configure NextAuth

### Generate an Auth Secret

You need a random secret for NextAuth. In your terminal, run:

```bash
openssl rand -base64 32
```

Copy the output - this is your AUTH_SECRET.

### Set Up Environment Variables

Add these to your `.env.local` file:

```env
# Database (already added)
DATABASE_URL="your-neon-connection-string"

# NextAuth
AUTH_SECRET="the-secret-you-just-generated"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
AUTH_GOOGLE_ID="your-google-client-id.apps.googleusercontent.com"
AUTH_GOOGLE_SECRET="your-google-client-secret"
```

### Create Prisma Client Singleton

Create `src/lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

This prevents multiple Prisma clients from being created during development.

### Create Auth Configuration

Create `src/auth.ts`:

```typescript
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },

  debug: process.env.NODE_ENV === "development",
})
```

This configuration:
- Connects NextAuth to your Prisma database
- Sets up the Google provider
- Configures database-based sessions
- Adds the user ID to the session object

### Create the API Route Handler

Create `src/app/api/auth/[...nextauth]/route.ts`:

```typescript
import { handlers } from "@/auth"

export const { GET, POST } = handlers
```

This creates all the necessary authentication endpoints that NextAuth needs.

### Add TypeScript Types

Create `src/types/next-auth.d.ts`:

```typescript
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}
```

This adds the user ID to TypeScript's understanding of the session object.

## Step 5: Create the User Interface

### Create a Session Provider Component

Create `src/components/auth-provider.tsx`:

```typescript
"use client"

import { SessionProvider } from "next-auth/react"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
```

### Update Your Root Layout

Modify `src/app/layout.tsx`:

```typescript
import { AuthProvider } from "@/components/auth-provider"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google OAuth Demo",
  description: "Simple Google authentication with NextAuth v5",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
```

### Create a Login Page

Create `src/app/login/page.tsx`:

```typescript
"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <button
          onClick={() => signIn("google", { callbackUrl })}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  )
}
```

### Create a Protected Dashboard

Create `src/app/dashboard/page.tsx`:

```typescript
import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <form
              action={async () => {
                "use server"
                await signOut({ redirectTo: "/login" })
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Welcome, {session.user.name}!
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="w-20 h-20 rounded-full ring-4 ring-gray-100"
                  />
                )}
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="mt-1 text-base text-gray-900">
                      {session.user.name || "Not set"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1 text-base text-gray-900">
                      {session.user.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">User ID</p>
                    <p className="mt-1 text-sm font-mono text-gray-700 bg-gray-50 px-3 py-2 rounded">
                      {session.user.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
```

### Update the Home Page

Replace `src/app/page.tsx`:

```typescript
import Link from "next/link"
import { auth } from "@/auth"

export default async function Home() {
  const session = await auth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Google OAuth Demo
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A simple demonstration of Google authentication using NextAuth v5
        </p>
        
        {session ? (
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              You're signed in as <strong>{session.user.email}</strong>
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Sign In with Google
          </Link>
        )}
      </div>
    </div>
  )
}
```

## Step 6: Test Locally

### Generate Prisma Client

Before running, generate the Prisma client:

```bash
npx prisma generate
```

### Start Your Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:3000`

### Test the Authentication Flow

1. Click "Sign In with Google"
2. You'll be redirected to Google's sign-in page
3. Choose your Google account
4. Grant permissions to your app
5. You'll be redirected back to your dashboard
6. Verify your profile information displays correctly

### Verify Database Records

Open Prisma Studio to see your data:

```bash
npx prisma studio
```

This opens a web interface where you can see:
- Your user record in the User table
- The Google account connection in the Account table
- Active sessions in the Session table

## Step 7: Deploy to Vercel

### Prepare for Deployment

Create a `.gitignore` file if it doesn't exist and ensure it includes:

```
node_modules
.env.local
.next
```

Update your `package.json` to include a build script:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Push to GitHub

Initialize git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit - Google OAuth setup"
git branch -M main
git remote add origin your-github-repo-url
git push -u origin main
```

### Create Vercel Project

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Don't deploy yet - configure environment variables first

### Configure Environment Variables

In Vercel project settings, go to "Environment Variables" and add:

**DATABASE_URL**
- Value: Your Neon connection string
- Environments: Production, Preview, Development

**AUTH_SECRET**
- Value: Your generated secret (same one from local)
- Environments: Production, Preview, Development

**NEXTAUTH_URL**
- Value: `https://your-project-name.vercel.app` (get this from Vercel)
- Environments: Production only
- For Preview: `https://$VERCEL_URL`

**AUTH_GOOGLE_ID**
- Value: Your Google client ID
- Environments: Production, Preview, Development

**AUTH_GOOGLE_SECRET**
- Value: Your Google client secret
- Environments: Production, Preview, Development

### Deploy Your Application

Click "Deploy" in Vercel. The deployment will:
- Install dependencies
- Generate Prisma client
- Build your Next.js app
- Deploy to a global CDN

### Update Google OAuth Settings

After deployment:

1. Note your Vercel URL (like `https://my-app.vercel.app`)
2. Go back to Google Cloud Console
3. Navigate to your OAuth client credentials
4. Add the production callback URL:
   - `https://your-app.vercel.app/api/auth/callback/google`
5. Click "Save"

### Test Production Deployment

1. Visit your Vercel URL
2. Click "Sign In with Google"
3. Authenticate with Google
4. Verify you're redirected to the dashboard
5. Check that your session persists after page refresh

## Step 8: Optional Enhancements

### Add Route Protection Middleware

Create `src/middleware.ts`:

```typescript
import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAuthPage = req.nextUrl.pathname.startsWith("/login")
  const isProtectedPage = req.nextUrl.pathname.startsWith("/dashboard")

  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  if (!isLoggedIn && isProtectedPage) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname)
    return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
```

This automatically:
- Redirects logged-in users away from the login page
- Redirects non-logged-in users to login when accessing protected pages
- Preserves the intended destination in the callback URL

### Add Loading States

Update your login page to show loading state:

```typescript
"use client"

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const handleSignIn = async () => {
    setIsLoading(true)
    await signIn("google", { callbackUrl })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <button
          onClick={handleSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </>
          )}
        </button>
      </div>
    </div>
  )
}
```

## Troubleshooting

### Error: "Configuration Error"

**Problem**: NextAuth can't find configuration.

**Solution**: Verify `NEXTAUTH_URL` is set correctly:
- Local: `http://localhost:3000`
- Production: `https://your-domain.vercel.app`
- No trailing slashes

### Error: "redirect_uri_mismatch"

**Problem**: Google callback URL doesn't match registered URL.

**Solution**: 
1. Check Google Cloud Console OAuth client
2. Verify the callback URL exactly matches: `https://your-domain.vercel.app/api/auth/callback/google`
3. No trailing slashes, check http vs https
4. Wait a few minutes after updating for changes to propagate

### Error: "Access Blocked: This app's request is invalid"

**Problem**: OAuth consent screen not configured properly.

**Solution**:
1. Complete the OAuth consent screen setup in Google Cloud Console
2. Add your email as a test user
3. Add required scopes (email, profile)
4. Save all changes

### Sessions Not Persisting

**Problem**: User gets logged out on refresh.

**Solution**:
1. Verify session strategy is set to "database" in auth.ts
2. Check that Session table exists in database
3. Confirm DATABASE_URL is correct in Vercel
4. Clear browser cookies and try again

### Database Connection Errors

**Problem**: Can't connect to Neon database.

**Solution**:
1. Verify DATABASE_URL includes `?sslmode=require`
2. Check Neon project is active (not suspended)
3. Test connection with `npx prisma studio`
4. Ensure Prisma client is generated with `npx prisma generate`

### "User not found" After Sign In

**Problem**: Authentication works but user not in database.

**Solution**:
1. Check Prisma adapter is configured in auth.ts
2. Verify all database tables exist (run `npx prisma db push`)
3. Check database logs for errors
4. Ensure User, Account, Session tables have correct schema

## Best Practices

### Security

- Never commit `.env.local` to version control
- Rotate your AUTH_SECRET periodically in production
- Keep Google OAuth credentials secure
- Use environment-specific secrets in Vercel
- Enable Google's additional security features when ready for production

### Performance

- Database sessions are faster than JWT for serverless
- Prisma connection pooling is automatically optimized
- NextAuth caches sessions to reduce database queries
- Vercel Edge Network ensures fast authentication globally

### User Experience

- Always provide feedback during sign-in process (loading states)
- Handle errors gracefully with user-friendly messages
- Redirect users to their intended destination after login
- Consider adding a sign-out confirmation
- Show user profile information to confirm they're signed in

### Development Workflow

- Test authentication locally before deploying
- Use separate Google OAuth clients for development and production
- Keep test users list updated in Google Console during development
- Monitor Vercel logs for authentication errors
- Use Prisma Studio to inspect database during development

## Next Steps

Now that you have Google OAuth working, you can:

1. **Add more providers**: GitHub, Discord, Twitter follow the same pattern
2. **Customize user profiles**: Add more fields to the User model
3. **Implement authorization**: Add roles and permissions
4. **Add email notifications**: Send welcome emails to new users
5. **Build user settings**: Let users update their profile
6. **Add profile pictures**: Store and display custom avatars
7. **Implement account deletion**: Let users delete their accounts
8. **Add session management**: Show active sessions, remote logout

## Additional Resources

- [NextAuth.js Documentation](https://authjs.dev)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## Summary

You now have a fully functional Google OAuth authentication system that:
- Securely authenticates users with Google
- Stores user data and sessions in PostgreSQL
- Protects routes requiring authentication
- Persists sessions across browser restarts
- Scales automatically on Vercel
- Follows security best practices

This setup provides a solid foundation for any application requiring user authentication. The code is production-ready and can handle thousands of users with minimal configuration.