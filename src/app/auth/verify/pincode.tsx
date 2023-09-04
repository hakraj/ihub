'use client'
import { ChangeEventHandler, useState } from "react";
import Onboarding from "../../components/auth/Onboarding";
import { useRouter } from "next/navigation";



const Verify = () => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState<string>('');

  const splitCode = pinCode.split("")
  const handlePinChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (value.length > 4) {
      return;
    }
    console.log(value);
    setPinCode(value);
  }

  return (
    <Onboarding text="Enter the 4-digit code sent to your email address">
      <form>
        <div className="relative">
          <input onChange={handlePinChange} value={pinCode} className=" absolute top-0 left-0 block w-full z-10 my-2 px-4 py-4 rounded-lg font-light text-sm text-transparent bg-transparent border-none outline-none" maxLength={5} autoCapitalize="none" autoFocus type="text" name="pinCode" id="pinCode" />

          <div className=" flex flex-row justify-evenly items-center">
            {[0, 1, 2, 3].map(i => (
              <input key={i} readOnly value={splitCode[i] || ""} className="block w-[48px] h-[48px] my-2 px-4 py-4 rounded-lg  font-light text-center text-sm placeholder:m-auto  bg-slate-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="pin" id="pinCodeInput" placeholder="0" />
            ))}
          </div>
        </div>
        <button onClick={(e) => { e.preventDefault(); router.push("/auth/onboarding") }} className="block w-full my-4 mt-8 p-4 text-center font-medium text-base text-white bg-[#8F00FF] rounded-lg">Continue</button>
      </form>
    </Onboarding>
  )
};

export default Verify;