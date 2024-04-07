'use client'

import Image from "next/image";
import Onboarding from "../../components/auth/Onboarding";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";


const Verify = () => {
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
    <Onboarding verify text="Please verify your email">
      <div className="text-center">
        <Image className="mx-auto" src={"/auth/verify.jpg"} alt={"verify-vector-image"} width={192} height={192} priority />
        <p className="font-medium text-sm text-blue-gray-500">You&apos;re almost there! We sent a sign in link to your email address</p>
        <p className="font-medium text-sm text-blue-gray-500 my-4">You may need to check your spam folder</p>
        <p className="font-bold text-xs text-blue-gray-700">&copy; hak_raj</p>
      </div>
    </Onboarding>
  )
};

export default Verify;