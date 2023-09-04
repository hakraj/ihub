'use client'

import Onboarding from "../../components/auth/Onboarding";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GoogleButton from "@/app/components/auth/GoogleButton";


const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.name) {
        router.push('/');
      }
    }
  }, [router, session, status,]);

  const handleEmailInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    console.log(value);
    setEmailInput(value)
  }

  const handleEmailSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    signIn("email", { email: emailInput })
  }

  return (
    <Onboarding text="Welcome, Login to continue">
      <form>
        <label className="font-medium text-sm text-slate-700" htmlFor="#emailInput">Email</label>
        <input onChange={handleEmailInput} className="block w-full my-2 px-4 py-4 rounded-lg  font-light text-sm bg-slate-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" value={emailInput} type="email" name="email" id="emailInput" placeholder="Your email" />
        <button onClick={handleEmailSubmit} className="block w-full my-4 p-4 text-center font-medium text-base text-white bg-[#8F00FF] hover:bg-[#AF69EE] rounded-lg">Login</button>
      </form>

      <div className=" flex flex-row justify-around items-center">
        <div className=" h-[1px] w-2/5 bg-slate-300"></div>
        <p className=" text-slate-300 font-light text-sm">or</p>
        <div className=" h-[1px] w-2/5 bg-slate-300"></div>
      </div>

      <GoogleButton />

      <Link href={"/auth/signup"}>
        <p className="text-sm text-center underline cursor-pointer text-[#8F00FF] hover:text-[#AF69EE] ">Create an account here</p>
      </Link>
    </Onboarding>
  )
};

export default Login;