'use client'

import Link from "next/link";
import Onboarding from "../../components/auth/Onboarding";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GoogleButton from "@/app/components/auth/GoogleButton";


const Signup = () => {
  const router = useRouter();
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.name) {
        router.push('/');
      }
    }
  }, [router, session, status,]);

  return (
    <Onboarding text="Create a new account">
      <form>
        <label className="font-medium text-sm text-slate-700" htmlFor="#emailInput">Email</label>
        <input className="block w-full my-2 px-4 py-4 rounded-lg  font-light text-sm bg-slate-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="email" name="email" id="emailInput" placeholder="Your email" />
        <button onClick={(e) => { e.preventDefault(); router.push("/auth/verify") }} className="block w-full my-4 p-4 text-center font-medium text-base text-white bg-[#8F00FF] rounded-lg">Signup</button>
      </form>

      <div className=" flex flex-row justify-around items-center">
        <div className=" h-[1px] w-2/5 bg-slate-300"></div>
        <p className=" text-slate-300 font-light text-sm">or</p>
        <div className=" h-[1px] w-2/5 bg-slate-300"></div>
      </div>

      <GoogleButton />

      <Link href={"/auth/login"}>
        <p className="text-sm text-center underline cursor-pointer text-[#8F00FF]">Already have an account?</p>
      </Link>
    </Onboarding>
  )
};

export default Signup;