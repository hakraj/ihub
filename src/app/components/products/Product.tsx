/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useCartStore from '../../store/cart';


const Product = ({ id, title, price }: { id: number, title: string, price: string }) => {
  const addProduct = useCartStore((state) => state.addProduct);

  const addToCart = () => {
    addProduct({
      productId: id,
      quantity: 1,
      checked: true
    })
  }

  return (
    <Link href={`/product/${id}`}>
      <div className="rounded-xl shadow-lg hover:shadow-[#E4A0F7] p-2 flex justify-between flex-col">
        <div className="relative w-full h-[192px] sm:h-[256px] mb-2 lg:mb-4">
          <img loading="lazy" className="h-full w-full object-cover rounded-lg" src={`/tinified-min/${id}-min.jpg`} alt="qoute-tet-img" />
        </div>
        <div>
          <p className="text-sm md:text-base font-light">{title && title.length > 32 ? title.substring(0, 27) + " ..." : title}</p>
          <p className="text-sm md:text-base font-medium mt-1">₦{price}</p>
          <button onClick={addToCart} className="block w-full mt-2 lg:mt-4 py-1 md:py-2 text-center text-base text-[#8F00FF] border border-[#8F00FF] hover:bg-[#8F00FF] hover:text-white rounded-lg">Add to cart</button>
        </div>
      </div>
    </Link>
  )
};

export default Product;