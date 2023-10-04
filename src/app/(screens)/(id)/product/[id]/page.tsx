/* eslint-disable @next/next/no-img-element */
'use client'

import Link from "next/link";
import styles from "../../../styles.module.css"
import products from "@lib/products";
import { useRouter } from "next/navigation";
import useCartStore from '../../../../store/cart';
import Similar from "@/app/components/products/Similar";
import { year } from "@/app/layout";
import { useState } from "react";


const ProductPage = ({ params }: { params: { id: string } }) => {
  const cart = useCartStore((state) => state.cart);
  const addProduct = useCartStore((state) => state.addProduct);
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1)

  const addToCart = () => {
    addProduct({
      productId: Number(params.id),
      quantity: quantity,
      checked: true
    })
  }

  const prod = products.filter((product) => `${product.id}` === params.id)

  return (
    <>
      <div className="lg:grid lg:px-[10%] lg:pt-16 grid-cols-2 lg:gap-8">
        <div>
          <div className="relative w-full h-[256px] lg:h-[384px] mb-8 lg:mb-16">
            <img className="h-full w-full object-cover lg:rounded-lg" src={`/tinified-min/${prod[0].id}-min.jpg`} alt="qoute-tet-img" fetchPriority="high" />
            <div className="px-6 md:px-8 py-4 flex-1 absolute w-full top-0 right-0">
              <div className="flex items-center justify-between">
                <div onClick={() => router.back()} className="w-8 h-8 rounded-[100%] flex items-center justify-center bg-black/75 hover:bg-black/50">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </div>
                <div className="flex items-center gap-4 justify-between">
                  <Link href="/">
                    <div className="w-8 h-8 rounded-[100%] flex items-center justify-center bg-black/75 hover:bg-black/50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="/cart">

                    <div className="relative w-8 h-8 rounded-[100%] flex items-center justify-center bg-black/75 hover:bg-black/50">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span className="absolute flex items-center justify-center -top-1 -right-1 rounded-full text-white text-xs bg-[#8F00FF] w-4 h-4">{cart.length}</span>
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="px-6 md:px-8 lg:mb-24">
            <div>
              <p className=" text-2xl font-light">{prod[0].title}</p>
              <p className=" text-xl font-medium my-1">₦{prod[0].price}</p>
              <div>
                <svg width="80" height="17" viewBox="0 0 80 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.09977 2.64252C7.46386 1.88974 8.53614 1.88974 8.90023 2.64252L10.0896 5.10155C10.2353 5.40292 10.5222 5.61136 10.8539 5.65686L13.5601 6.02811C14.3885 6.14176 14.7199 7.16155 14.1165 7.74045L12.1453 9.63146C11.9037 9.86322 11.7942 10.2005 11.8534 10.53L12.3366 13.2184C12.4845 14.0415 11.617 14.6717 10.8799 14.2767L8.47238 12.9864C8.17731 12.8283 7.82269 12.8283 7.52762 12.9864L5.12005 14.2767C4.38302 14.6717 3.51553 14.0415 3.66344 13.2184L4.14662 10.53C4.20584 10.2005 4.09626 9.86322 3.85468 9.63146L1.88354 7.74045C1.28011 7.16155 1.61146 6.14176 2.43991 6.02811L5.14611 5.65686C5.47777 5.61136 5.76466 5.40292 5.91043 5.10155L7.09977 2.64252Z" fill="#FFCF2B" />
                  <path d="M23.0998 2.64252C23.4639 1.88974 24.5361 1.88974 24.9002 2.64252L26.0896 5.10155C26.2353 5.40292 26.5222 5.61136 26.8539 5.65686L29.5601 6.02811C30.3885 6.14176 30.7199 7.16155 30.1165 7.74045L28.1453 9.63146C27.9037 9.86322 27.7942 10.2005 27.8534 10.53L28.3366 13.2184C28.4845 14.0415 27.617 14.6717 26.8799 14.2767L24.4724 12.9864C24.1773 12.8283 23.8227 12.8283 23.5276 12.9864L21.1201 14.2767C20.383 14.6717 19.5155 14.0415 19.6634 13.2184L20.1466 10.53C20.2058 10.2005 20.0963 9.86322 19.8547 9.63146L17.8835 7.74045C17.2801 7.16155 17.6115 6.14176 18.4399 6.02811L21.1461 5.65686C21.4778 5.61136 21.7647 5.40292 21.9104 5.10155L23.0998 2.64252Z" fill="#FFCF2B" />
                  <path d="M39.0998 2.64252C39.4639 1.88974 40.5361 1.88974 40.9002 2.64252L42.0896 5.10155C42.2353 5.40292 42.5222 5.61136 42.8539 5.65686L45.5601 6.02811C46.3885 6.14176 46.7199 7.16155 46.1165 7.74045L44.1453 9.63146C43.9037 9.86322 43.7942 10.2005 43.8534 10.53L44.3366 13.2184C44.4845 14.0415 43.617 14.6717 42.8799 14.2767L40.4724 12.9864C40.1773 12.8283 39.8227 12.8283 39.5276 12.9864L37.1201 14.2767C36.383 14.6717 35.5155 14.0415 35.6634 13.2184L36.1466 10.53C36.2058 10.2005 36.0963 9.86322 35.8547 9.63146L33.8835 7.74045C33.2801 7.16155 33.6115 6.14176 34.4399 6.02811L37.1461 5.65686C37.4778 5.61136 37.7647 5.40292 37.9104 5.10155L39.0998 2.64252Z" fill="#FFCF2B" />
                  <path d="M55.0998 2.64252C55.4639 1.88974 56.5361 1.88974 56.9002 2.64252L58.0896 5.10155C58.2353 5.40292 58.5222 5.61136 58.8539 5.65686L61.5601 6.02811C62.3885 6.14176 62.7199 7.16155 62.1165 7.74045L60.1453 9.63146C59.9037 9.86322 59.7942 10.2005 59.8534 10.53L60.3366 13.2184C60.4845 14.0415 59.617 14.6717 58.8799 14.2767L56.4724 12.9864C56.1773 12.8283 55.8227 12.8283 55.5276 12.9864L53.1201 14.2767C52.383 14.6717 51.5155 14.0415 51.6634 13.2184L52.1466 10.53C52.2058 10.2005 52.0963 9.86322 51.8547 9.63146L49.8835 7.74045C49.2801 7.16155 49.6115 6.14176 50.4399 6.02811L53.1461 5.65686C53.4778 5.61136 53.7647 5.40292 53.9104 5.10155L55.0998 2.64252Z" fill="#FFCF2B" />
                  <path d="M71.0998 2.64252C71.4639 1.88974 72.5361 1.88974 72.9002 2.64252L74.0896 5.10155C74.2353 5.40292 74.5222 5.61136 74.8539 5.65686L77.5601 6.02811C78.3885 6.14176 78.7199 7.16155 78.1165 7.74045L76.1453 9.63146C75.9037 9.86322 75.7942 10.2005 75.8534 10.53L76.3366 13.2184C76.4845 14.0415 75.617 14.6717 74.8799 14.2767L72.4724 12.9864C72.1773 12.8283 71.8227 12.8283 71.5276 12.9864L69.1201 14.2767C68.383 14.6717 67.5155 14.0415 67.6634 13.2184L68.1466 10.53C68.2058 10.2005 68.0963 9.86322 67.8547 9.63146L65.8835 7.74045C65.2801 7.16155 65.6115 6.14176 66.4399 6.02811L69.1461 5.65686C69.4778 5.61136 69.7647 5.40292 69.9104 5.10155L71.0998 2.64252Z" fill="#FFCF2B" />
                </svg>
                <p className="font-light">Available</p>
              </div>
            </div>
            <hr className="text-[#D7BFDC] h-[2px] w-full my-4" />
          </div>
        </div>
        <div className="lg:relative px-6 md:px-8 mb-24">
          <div>
            <div className="my-4">
              <p className="font-medium my-1">Description: </p>
              <p className="font-light">{prod[0].description}</p>
            </div>
            <div className="my-4">
              <p className="font-medium my-1">Tags: </p>
              <div className="space-x-4">
                <span className="py-1 px-2 bg-[#D7BFDC]/50 font-light rounded">fashion</span>
                <span className="py-1 px-2 bg-[#D7BFDC]/50 font-light rounded">lifestyle</span>
                <span className="py-1 px-2 bg-[#D7BFDC]/50 font-light rounded">asthetic</span>
              </div>
            </div>
            <div className="my-4">
              <p className="font-medium my-1">Review: </p>
              <p className="font-light">no review yet.</p>
            </div>
            <div className="my-4">
              <p className="font-medium my-1">Delivery: </p>
              <p className="font-light">select a delivery option</p>
            </div>
          </div>
          <hr className="text-[#D7BFDC] h-[2px] w-full my-4" />
          <div className="lg:hidden">
            <Similar category={prod[0].category} />
            <p className='text-xs text-center text-black font-mono'>All rights reserved. &copy; hak_raj {year}</p>
          </div>
          <div className="px-6 md:px-8 pb-4 w-full bg-white fixed lg:absolute bottom-0 left-0">
            <hr className="text-[#D7BFDC] h-[2px] w-full mb-4" />
            <div className="flex items-center justify-between gap-4 xl:gap-8">
              <div className="flex flex-1 items-center justify-between">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(prev => prev - 1)
                    } else {
                      setQuantity(1)
                    }
                  }}
                  className="w-8 h-8 rounded-lg border border-[#D7BFDC] text-xl text-[#D7BFDC]">-</button>
                <p className=" font-medium">{quantity}</p>
                <button onClick={() => { setQuantity(prev => prev + 1) }} className="w-8 h-8 rounded-lg border border-[#8F00FF] text-xl text-[#8F00FF]">+</button>
              </div>
              <div className="w-2/3">
                <button onClick={addToCart} className="block w-full py-3 text-center text-xl font-medium text-white bg-[#8F00FF] hover:bg-[#AF69EE] rounded-lg">Add to cart</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={`${styles.hidelg} px-[10%] `}>
        <Similar category={prod[0].category} />
      </div>
    </>
  );
};

export default ProductPage;