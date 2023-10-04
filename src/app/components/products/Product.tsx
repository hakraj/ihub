/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import useCartStore from '../../store/cart';
import { MouseEventHandler } from "react";


const Product = ({ id, title, price }: { id: number, title: string, price: string }) => {
  const router = useRouter();
  const addProduct = useCartStore((state) => state.addProduct);

  const addToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    addProduct({
      id: id,
      quantity: 1,
      checked: true
    })
  }

  return (
    <div onClick={() => router.push(`/product/${id}`)} className="rounded-xl shadow-lg active:shadow-[#E4A0F7] p-2 flex justify-between flex-col">
      <div className="relative w-full h-[192px] sm:h-[256px] mb-2 lg:mb-4">
        <img loading="lazy" className="h-full w-full object-cover rounded-lg" src={`/tinified-min/${id}-min.jpg`} alt="qoute-tet-img" />
      </div>
      <div>
        <p className="text-sm md:text-base font-light">{title && title.length > 32 ? title.substring(0, 27) + " ..." : title}</p>
        <p className="text-sm md:text-base font-medium mt-1">₦{price}</p>
        <button onClick={addToCart} className="block w-full mt-2 lg:mt-4 py-1 md:py-2 text-center text-base text-[#8F00FF] border border-[#8F00FF] active:bg-[#8F00FF] active:text-white rounded-lg">Add to cart</button>
      </div>
    </div>
  )
};

export default Product;