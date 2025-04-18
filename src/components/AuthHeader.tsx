// components/AuthHeader.tsx
"use client";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function AuthHeader() {
  const pathname = usePathname();
  const isSignInPage = pathname?.includes("/sign-in");
  const isSignUpPage = pathname?.includes("/sign-up");

  const glassButtonStyle = `
    px-4 py-2 rounded-xl backdrop-blur-md bg-white/10
    text-white border border-white/20 shadow-lg
    hover:bg-white/20 transition cursor-pointer
  `;

  return (
    <header className="flex justify-between items-center p-4 h-20">
      <h1 className="text-4xl font-bold text-white tracking-wide">KraftedY</h1>
      <div className="flex items-center gap-4">
        <SignedOut>
          {!isSignUpPage && (
            <SignUpButton mode="modal">
              <div className={glassButtonStyle}>Sign Up</div>
            </SignUpButton>
          )}
          {!isSignInPage && (
            <SignInButton mode="modal">
              <div className={glassButtonStyle}>Sign In</div>
            </SignInButton>
          )}
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <div className={glassButtonStyle}>Log Out</div>
          </SignOutButton>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
