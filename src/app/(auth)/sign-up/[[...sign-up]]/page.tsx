"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { FcGoogle } from "react-icons/fc";
import { ArrowRight, Github } from "lucide-react";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";

export default function Page() {
  const baseButton =
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full cursor-pointer";

  const outline =
    "border border-white/20 bg-white/10 text-white hover:bg-white/20 shadow-sm";

  const defaultBtn = "bg-blue-500 hover:bg-blue-600 text-white font-semibold";

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error during form submission", error);
      setLoading(false);
    }
  };

  return (
    <SignUp.Root>
      <div className="flex items-center justify-center min-h-screen bg-background px-4 py-10">
        <div className="w-full max-w-md rounded-2xl bg-white/5 shadow-xl ring-1 ring-white/10 backdrop-blur-md border border-white/10 p-10 space-y-8">
          <SignUp.Step name="start" className="gap-2">
            <h1 className="text-2xl font-bold text-white text-center pb-8">
              Create an account
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 pb-8">
              <Clerk.Connection
                name="google"
                className={`${baseButton} ${outline} px-6 py-4`}
              >
                <FcGoogle className="text-xl" />
                Google
              </Clerk.Connection>

              <Clerk.Connection
                name="github"
                className={`${baseButton} ${outline} px-6 py-4`}
              >
                <Github className="w-5 h-5" />
                GitHub
              </Clerk.Connection>
            </div>

            <Clerk.Field name="username" className="pb-4">
              <Clerk.Label className="text-sm text-white">Username</Clerk.Label>
              <Clerk.Input className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-blue-400 ring-2 ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <Clerk.FieldError className="text-sm text-red-400" />
            </Clerk.Field>

            <Clerk.Field name="emailAddress" className="pb-4">
              <Clerk.Label className="text-sm text-white">Email</Clerk.Label>
              <Clerk.Input className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-blue-400 ring-2 ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <Clerk.FieldError className="text-sm text-red-400" />
            </Clerk.Field>

            <Clerk.Field name="password" className="pb-12">
              <Clerk.Label className="text-sm text-white">Password</Clerk.Label>
              <Clerk.Input className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-blue-400 ring-2 ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <Clerk.FieldError className="text-sm text-red-400" />
            </Clerk.Field>

            <Clerk.Field name="captcha">
              <div id="clerk-captcha" className="my-4" />
              <Clerk.FieldError className="text-sm text-red-400" />
            </Clerk.Field>

            <SignUp.Action
              submit
              onClick={handleSubmit}
              className={`${baseButton} ${defaultBtn} mt-4 px-8 py-4`}
            >
              {loading ? (
                <Spinner size={20} />
              ) : (
                <>
                  Sign up
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </SignUp.Action>
          </SignUp.Step>

          <SignUp.Step name="continue">
            <h1 className="text-lg font-semibold text-white">
              Fill in missing fields
            </h1>

            <Clerk.Field name="username" className="pb-12 pt-6">
              <Clerk.Label className="text-sm text-white">Username</Clerk.Label>
              <Clerk.Input className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-blue-400 ring-2 ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <Clerk.FieldError className="text-sm text-red-400" />
            </Clerk.Field>

            <SignUp.Action
              submit
              onClick={handleSubmit}
              className={`${baseButton} ${defaultBtn} mt-4 px-8 py-4`}
            >
              {loading ? (
                <Spinner size={20} />
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </SignUp.Action>
          </SignUp.Step>

          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <h1 className="text-lg font-semibold text-white pb-8">
                Check your email
              </h1>

              <Clerk.Field name="code" className="pb-8">
                <Clerk.Label className="text-sm text-white">
                  Email Code
                </Clerk.Label>
                <Clerk.Input className="w-full px-3 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-blue-400 ring-2 ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <Clerk.FieldError className="text-sm text-red-400 mt-1" />
              </Clerk.Field>

              <SignUp.Action
                submit
                onClick={handleSubmit}
                className={`${baseButton} ${defaultBtn} mt-4 px-8 py-4`}
              >
                {loading ? (
                  <Spinner size={20} />
                ) : (
                  <>
                    Verify
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        </div>
      </div>
    </SignUp.Root>
  );
}
