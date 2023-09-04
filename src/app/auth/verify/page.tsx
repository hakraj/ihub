'use client'

import Image from "next/image";
import Onboarding from "../../components/auth/Onboarding";
import { useRouter } from "next/navigation";


const Verify = () => {
  const router = useRouter();

  return (
    <Onboarding text="Please verify your email">
      <div className="text-center">
        <Image className="mx-auto" src={"/verify.jpg"} alt={"verify-vector-image"} width={200} height={200} />
        <p className="font-medium text-slate-500">You&apos;re almost there! We sent a sign in link to your email address</p>
        <p className="font-medium text-slate-500 my-4">You may need to check your spam folder</p>
        <p className="font-bold text-sm text-slate-700">localhost:3000</p>
      </div>
    </Onboarding>
  )
};

export default Verify;