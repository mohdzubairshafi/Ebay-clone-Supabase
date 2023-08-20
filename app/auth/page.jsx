"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.error("Error signing up:", error);
    } else {
      console.log("Sign-up successful!", user);
    }
  };

  const handleEmailSignIn = async () => {
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      console.error("Error signing in:", error);
    } else {
      console.log("Sign-in successful!", user);
    }
  };

  return (
    <>
      <div id='AuthPage' className='w-full min-h-screen bg-white'>
        <div className='w-full flex items-center justify-center p-5 border-b-gray-300'>
          <Link href='/' className='min-w-[170px]'>
            <img width='170' src='/images/logo.svg' />
          </Link>
        </div>

        <div className='w-full flex items-center justify-center p-5 border-b-gray-300'>Login / Register</div>

        <div className='max-w-[400px] mx-auto px-2'>
          <Auth
            // onlyThirdPartyProviders // this will remove email sign up componnet
            redirectTo={`${window.location.origin}/auth/callback`}
            supabaseClient={supabase}
            providers={["google", "discord", "github"]}
            appearance={{ theme: ThemeSupa }}
          />
        </div>
      </div>
    </>
  );
}
