'use client'

import styles from "../../styles.module.css"
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navigation/NavigationBar";
import CheckoutProduct from "@/app/components/products/CheckoutProduct";
import { useRouter } from "next/navigation";
import useCartStore from '../../../store/cart';


const Cart = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);

  return (
    <div>
      <div className="lg:relative lg:px-[10%] lg:pt-16">
        <div className="pt-4 w-full ">
          <div className="px-6 md:px-8 flex items-center justify-between">
            <div onClick={() => router.back()} className="w-8 h-8 rounded-[100%] flex items-center justify-center bg-black/75 active:bg-black/50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold">Cart</p>
            </div>
            <div className="w-8 h-8">
            </div>
          </div>
          <hr className="text-[#D7BFDC] h-[2px] w-full my-2" />
        </div>
        {cart.length === 0 ?
          <div className="m-auto my-16">
            {/* <Image className="mx-auto" src={"/auth/not-found.jpg"} alt={"not-found-vector-image"} width={192} height={192} priority /> */}
            <h1 className=" text-center">No items have been added to cart.</h1>
            <button onClick={() => router.push("/shop")} className="block w-1/2 mx-auto my-4 py-3 text-center text-xl font-medium text-white bg-[#8F00FF] active:bg-[#AF69EE] rounded-lg">Explore Products</button>
          </div>
          :
          <>
            <div className="px-6 md:px-8 w-full pb-24 lg:pt-8 lg:pb-32 lg:grid grid-cols-2 lg:gap-8">
              {cart.map(({ id, quantity, checked }) => <CheckoutProduct id={id} key={id} quantity={quantity} checked={checked} />)}
            </div>
            <div className="pb-4 w-full bg-white fixed lg:absolute bottom-0 left-0">
              <hr className="text-[#D7BFDC] h-[2px] w-full mb-4" />
              <div className="px-6 md:px-8 lg:px-[10%]">
                <button onClick={() => router.push("/checkout")} className="block w-full py-3 text-center text-xl font-medium text-white bg-[#8F00FF] active:bg-[#AF69EE] rounded-lg">Checkout</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Cart;