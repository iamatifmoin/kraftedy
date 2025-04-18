// app/layout.tsx
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import AnimatedBackground from "@/components/gradients/AnimatedBackground";
import { Poppins } from "next/font/google";
import { dark } from "@clerk/themes";
import "./globals.css";
import AuthHeader from "@/components/AuthHeader";

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
}: Readonly<{ children: React.ReactNode }>) {
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
            <AuthHeader />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
