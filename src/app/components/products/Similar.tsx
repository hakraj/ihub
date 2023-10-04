'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import products, { shuffleArray } from "@lib/products";
import Product from "./Product";

const Similar = ({ category }: { category: string }) => {
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

  const prod = products.filter((product) => product.category === category)

  const shuffleProducts = shuffleArray([...prod])

  return (
    <div className="py-4 my-16">
      <div className="w-full flex items-center justify-between mb-4">
        <div>
          <p className="font-medium text-xl md:text-2xl lg:text-3xl">Similar</p>
        </div>
        <div>
          <Link href={`/shop?category=${category}`}><button className="block w-full py-[2px] md:py-1 px-2 md:px-4 text-center text-sm lg:text-base border border-black hover:shadow rounded-2xl">see more</button></Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
        {shuffleProducts.slice(-cols).map(({ id, title, price }) => <Product id={id} key={id} title={title} price={price} />)}
      </div>
    </div>
  )
};


export default Similar;