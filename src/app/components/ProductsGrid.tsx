import Image from "next/image";
import styles from "../styles.module.css"

const Product = () => {
  return (
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
  )
};

const Products = () => {
  return (
    <div>
      <div className="px-8 py-4 my-16">
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">Sales</p>
            <p className="text-[#AF69EE] italic mb-4">60% off on all orders</p>
          </div>
          <div>
            <button className="block w-full py-[2px] md:py-1 px-2 md:px-4 text-center text-xs md:text-sm lg:text-base text-[#E4A0F7] border border-[#E4A0F7] hover:shadow hover:shadow-[#E4A0F7] rounded-2xl">see more</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {new Array(6).fill('product').map((_, i) => <Product key={i} />)}
        </div>
      </div>
    </div>
  )
};


export default Products;