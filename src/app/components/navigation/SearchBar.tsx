import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";


const SearchBar = () => {
  const router = useRouter()
  const [query, setQuery] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setQuery(value)
  }

  const handleSubmit: MouseEventHandler<SVGSVGElement> = (e) => {
    if (query === null || undefined) {
      return;
    }
    router.push(`/shop/products?search=${query}`)

  }

  return (
    <span className="relative">
      <input onChange={handleChange} className="py-1 pl-4 pr-8 rounded-2xl font-light text-sm border border-[#D7BFDC] focus:outline-[#E4A0F7]" type="text" name="search" id="search" value={query} placeholder="type your search" />
      <svg onClick={handleSubmit} className="absolute w-5 h-5 top-0 lg:top-1 text-[#8F00FF] hover:text-[#AF69EE] right-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </span>
  )
};

export default SearchBar