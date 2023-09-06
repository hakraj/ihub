'use client'

import Onboarding from "../../components/auth/Onboarding";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GoogleButton from "@/app/components/auth/GoogleButton";
import EmailSignin from "@/app/components/auth/EmailSignin";


const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.email) {
        router.push('/');
      }
    }
  }, [router, session, status,]);

  return (
    <Onboarding text="Welcome, Sign in to continue">

      <EmailSignin />

      <div className=" flex flex-row justify-around items-center">
        <div className=" h-[1px] w-2/5 bg-slate-300"></div>
        <p className=" text-slate-300 font-light text-sm">or</p>
        <div className=" h-[1px] w-2/5 bg-slate-300"></div>
      </div>

      <GoogleButton />

    </Onboarding>
  )
};

export default Login;