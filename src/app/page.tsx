'use client'

import Onboarding from "./components/auth/Onboarding";
import { signOut, useSession } from "next-auth/react";
import IsAuth from "./isAuth";


const Verify = () => {
  const { data: session, status } = useSession();

  return (
    <IsAuth>
      <Onboarding text="Your one stop for all need">
        <p>signed in as {session && session?.user?.email}</p>
        <button onClick={() => signOut()}
          className="block w-full my-4 mt-8 p-4 text-center font-medium text-base text-white bg-[#8F00FF] rounded-lg">
          Log out
        </button>
      </Onboarding>
    </IsAuth>
  )
};

export default Verify;