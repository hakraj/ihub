import { signIn } from "next-auth/react";
import { useState, ChangeEventHandler, FormEventHandler } from "react";


const EmailSignin = () => {
  const [emailInput, setEmailInput] = useState("");

  const handleEmailInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    console.log(value);
    setEmailInput(value)
  }

  const handleEmailSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn("email", { email: emailInput })
  }

  return (
    <form onSubmit={handleEmailSubmit}>
      <label className="font-medium text-sm text-blue-gray-700" htmlFor="#emailInput">Email</label>
      <input onChange={handleEmailInput} className="block w-full my-2 px-4 py-4 rounded-lg  font-light text-sm border border-[#D7BFDC] focus:outline-[#E4A0F7]" value={emailInput} type="email" name="email" id="emailInput" placeholder="Your email" />
      <button className="block w-full my-4 p-4 text-center font-medium text-base text-white bg-[#8F00FF] active:bg-[#AF69EE] rounded-lg">Sign in with email</button>
    </form>

  )
}

export default EmailSignin;