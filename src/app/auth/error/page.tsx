'use client'

import Image from "next/image";
import Onboarding from "../../components/auth/Onboarding";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Verify = () => {
  const router = useRouter();

  return (
    <Onboarding text="Something went wrong">
      <div className="text-center">
        <Image className="mx-auto" src={"/auth/leak-err.webp"} alt={"verify-vector-image"} width={200} height={200} priority />
        <p className="font-medium text-sm text-slate-500 mt-4">Sorry, something went wrong there. Try again.</p>
        <Link href={"/auth/login"}>
          <p className="font-medium text-sm text-[#8F00FF] my-4 underline hover:text-[#AF69EE]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline mr-2 relative bottom-[1px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Sign in page
          </p>
        </Link>
        <p className="font-bold text-xs text-slate-700">&copy; hak_raj</p>
      </div>
    </Onboarding>
  )
};

export default Verify;