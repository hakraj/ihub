'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import Sales from "../products/Sales";
import Products from "../products/Products";


const HomeGrid = () => {
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
      <Sales name={"Sales"} deal={"60% off on all orders"} cols={cols} />
      <Sales name={"Promo"} deal={"Buy two get one free"} cols={cols} />
      <Products name={"Featured"} cols={isMobile ? 10 : (cols * 4)} />
      <div className="text-center">
        <Link href="/shop"><button className="py-2 px-4 text-center text-base text-white bg-[#8F00FF] active:bg-[#AF69EE] rounded-3xl">view all products</button></Link>
      </div>
    </div>
  )
};


export default HomeGrid;