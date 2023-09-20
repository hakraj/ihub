'use client'

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Onboarding from "@/app/components/auth/Onboarding";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import IsAuth from "@/app/isAuth";
import { putUser } from "../../../../utils/user";


const MoreInfo = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [{ fname, lname, phone }, setUserDetail] = useState({ fname: "", lname: "", phone: "" });

  const userEmail = session?.user?.email as string
  const userName = `${fname} ${lname}`;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setUserDetail(prev => {
      return {
        ...prev,
        [name]: value,
      }
    });
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const user = { email: userEmail, name: userName, phone: phone }

    try {
      const res = await putUser(user);
      if (!res.success) {
        throw new Error("Failed to update user details");
      }

      router.push("/")
    } catch (error) {
      throw new Error("Failed to update user details");
    }
  }

  return (
    <IsAuth>
      <Onboarding text="Personal Details">
        <form onSubmit={handleSubmit}>
          <label className="font-medium text-sm text-blue-gray-700" htmlFor="#fNameInput">First Name</label>
          <input onChange={handleChange} className="block w-full my-2 mb-4 px-4 py-4 rounded-lg  font-light text-sm bg-blue-gray-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="fname" id="fNameInput" placeholder="e.g John" />
          <label className="font-medium text-sm text-blue-gray-700" htmlFor="#lNameInput">Last Name</label>
          <input onChange={handleChange} className="block w-full my-2 mb-4 px-4 py-4 rounded-lg  font-light text-sm bg-blue-gray-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="lname" id="lNameInput" placeholder="e.g Doe" />
          <label className="font-medium text-sm text-blue-gray-700" htmlFor="#phoneInput">Phone Number</label>
          <input onChange={handleChange} className="block w-full my-2 mb-4 px-4 py-4 rounded-lg  font-light text-sm bg-blue-gray-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="phone" id="phoneInput" placeholder="e.g 0123-456-7890" inputMode="numeric" />
          <button className="block w-full my-4 mt-8 p-4 text-center font-medium text-base text-white bg-[#8F00FF] hover:bg-[#AF69EE] rounded-lg">Continue</button>
        </form>
      </Onboarding>
    </IsAuth>
  )
};

export default MoreInfo;