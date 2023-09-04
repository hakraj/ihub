import Onboarding from "../../components/auth/Onboarding";


const MoreInfo = () => {
  return (
    <Onboarding text="Personal Details">
      <form>
        <label className="font-medium text-sm text-slate-700" htmlFor="#emailInput">First Name</label>
        <input className="block w-full my-2 mb-4 px-4 py-4 rounded-lg  font-light text-sm bg-slate-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="fname" id="emailInput" placeholder="e.g John" />
        <label className="font-medium text-sm text-slate-700" htmlFor="#emailInput">Last Name</label>
        <input className="block w-full my-2 mb-4 px-4 py-4 rounded-lg  font-light text-sm bg-slate-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="lname" id="emailInput" placeholder="e.g Doe" />
        <label className="font-medium text-sm text-slate-700" htmlFor="#emailInput">Phone Number</label>
        <input className="block w-full my-2 mb-4 px-4 py-4 rounded-lg  font-light text-sm bg-slate-100 border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="phone" id="emailInput" placeholder="e.g 0123-456-7890" inputMode="numeric" />
        <button className="block w-full my-4 mt-8 p-4 text-center font-medium text-base text-white bg-[#8F00FF] rounded-lg">Continue</button>
      </form>
    </Onboarding>
  )
};

export default MoreInfo;