import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Nav from "./(components)/Nav";
import { AuthProvider } from "@/components/auth-provider";

export const metadata: Metadata = {
  title: "Google OAuth Demo",
  description: "Simple Google authentication with NextAuth v5",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Nav />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
