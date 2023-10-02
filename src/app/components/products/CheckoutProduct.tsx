/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const CheckoutProduct = ({ id, title, price }: { id: number, title: string, price: string }) => {
  return (
    <div className="rounded-xl shadow-lg hover:shadow-[#E4A0F7] p-2 my-4">
      <div className="flex items-center gap-4">
        <div className="relative min-w-[64px] h-[64px]">
          <img className="h-full w-full object-cover rounded-lg" src={`/tinified/${id}.jpg`} alt="qoute-tet-img" />
        </div>
        <div>
          <p className="text-lg mt-1">{title && title.length > 48 ? title.substring(0, 43) + " ..." : title}</p>
          <p>₦{price}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 mb-2 px-4">
        <div className="flex items-center justify-between gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button className="w-6 h-6 rounded-lg border border-[#D7BFDC] text-[#D7BFDC]">-</button>
          <p className=" font-medium">5</p>
          <button className="w-6 h-6 rounded-lg border border-[#8F00FF] text-[#8F00FF]">+</button>
        </div>
      </div>
    </div>
  )
};

export default CheckoutProduct;