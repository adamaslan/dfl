import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

// Validate required environment variables
const requiredEnvVars = {
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  AUTH_SECRET: process.env.AUTH_SECRET,
}

for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
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