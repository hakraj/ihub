'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Product = () => {
  return (
    <Link href="/product">
      <div className="rounded-xl shadow-lg hover:shadow-[#E4A0F7] p-2 flex justify-between flex-col">
        <div className="w-full mb-2 lg:mb-4">
          <Image className="rounded-lg" src="/product/quote.jpg" alt="qoute-tet-img" priority height={1000} width={1000} />
        </div>

        <div>
          <p className="text-sm md:text-base font-light">Product name</p>
          <p className="text-sm md:text-base font-medium mt-1">Price (range)</p>

          <button className="block w-full mt-2 lg:mt-4 py-1 md:py-2 text-center text-base text-[#8F00FF] border border-[#8F00FF] hover:bg-[#8F00FF] hover:text-white rounded-lg">Add to cart</button>
        </div>
      </div>
    </Link>
  )
};

const Products = () => {
  const [cols, setCols] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screen = window.innerWidth
      switch (true) {
        case screen >= 1140:
          setCols(5)
          break;
        case screen >= 960:
          setCols(4)
          break;
        case screen >= 720:
          setCols(3)
          break;
        default:
          setCols(4);
          setIsMobile(true);
          break;
      }
    };

    // Listen for changes in the media query
    window.addEventListener('change', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('change', handleResize);
    };
  }, []);


  return (
    <div>
      <div className="px-6 md:px-8 py-4 my-16">
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">Sales</p>
            <p className="text-[#AF69EE] italic mb-4">60% off on all orders</p>
          </div>
          <div>
            <Link href="/shop"><button className="block w-full py-[2px] md:py-1 px-2 md:px-4 text-center text-sm lg:text-base border border-black hover:shadow rounded-2xl">see more</button></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {new Array(cols).fill('product').map((_, i) => <Product key={i} />)}
        </div>
      </div>
      <div className="px-6 md:px-8 py-4 my-16">
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">Promo</p>
            <p className="text-[#AF69EE] italic mb-4">Buy two get one free</p>
          </div>
          <div>
            <Link href="/shop"><button className="block w-full py-[2px] md:py-1 px-2 md:px-4 text-center text-sm lg:text-base border border-black hover:shadow rounded-2xl">see more</button></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {new Array(cols).fill('product').map((_, i) => <Product key={i} />)}
        </div>
      </div>
      <div className="px-6 md:px-8 py-4 my-16">
        <div className="w-full flex items-center justify-between mb-4">
          <div>
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">Featured</p>
            {/* <p className="text-[#AF69EE] italic mb-4"></p> */}
          </div>
          <div>
            <Link href="/shop"><button className="block w-full py-[2px] md:py-1 px-2 md:px-4 text-center text-sm lg:text-base border border-black hover:shadow rounded-2xl">see more</button></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {new Array(isMobile ? 10 : cols * 5).fill('product').map((_, i) => <Product key={i} />)}
        </div>
        <div className="mt-8 text-center">
        <Link href="/shop"><button className="py-2 px-4 text-center text-base text-white bg-[#8F00FF] hover:bg-[#AF69EE] rounded-3xl">view all products</button></Link>
        </div>
      </div>

    </div>
  )
};


export default Products;