import { signIn } from "next-auth/react";
import { useState, ChangeEventHandler, MouseEventHandler } from "react";


const EmailSignin = () => {
  const [emailInput, setEmailInput] = useState("");

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
    <form>
      <label className="font-medium text-sm text-slate-700" htmlFor="#emailInput">Email</label>
      <input onChange={handleEmailInput} className="block w-full my-2 px-4 py-4 rounded-lg  font-light text-sm bg-slate-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" value={emailInput} type="email" name="email" id="emailInput" placeholder="Your email" />
      <button onClick={handleEmailSubmit} className="block w-full my-4 p-4 text-center font-medium text-base text-white bg-[#8F00FF] hover:bg-[#AF69EE] rounded-lg">Signin with email</button>
    </form>

  )
}

export default EmailSignin;