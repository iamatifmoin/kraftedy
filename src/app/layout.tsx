import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import AnimatedBackground from "@/components/gradients/AnimatedBackground";
import { Poppins } from "next/font/google";
import { dark } from "@clerk/themes";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "KraftedY",
  description: "An authentication system built using Clerk and Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <div className="absolute inset-0 z-0">
            <AnimatedBackground />
          </div>

          <div className="relative z-20">
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>

            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
