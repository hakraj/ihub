'use client'

import Onboarding from "./components/auth/Onboarding";
import { signOut } from "next-auth/react";
import IsAuth from "./isAuth";


const Verify = () => {
  return (
    <IsAuth>
      <Onboarding text="Your one top for all need">
        <button onClick={() => signOut()}
          className="block w-full my-4 mt-8 p-4 text-center font-medium text-base text-white bg-[#8F00FF] rounded-lg">
          Logout
        </button>
      </Onboarding>
    </IsAuth>
  )
};

export default Verify;