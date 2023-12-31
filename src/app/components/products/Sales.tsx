import Link from "next/link";
import products, { shuffleArray } from "@lib/products";
import Product from "./Product";

const Sales = (
  { name, deal, cols }
    :
    { name: string, deal: string, cols: number }
) => {
  const shuffleProducts = shuffleArray([...products])
  return (
    <div className="px-6 md:px-8 py-4 my-16">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="font-medium text-xl md:text-2xl lg:text-3xl">{name}</p>
          <p className="text-[#AF69EE] italic mb-4">{deal}</p>
        </div>
        <div>
          <Link href="/shop"><button className="block w-full py-[2px] md:py-1 px-2 md:px-4 text-center text-sm lg:text-base border border-black active:shadow rounded-2xl">see more</button></Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
        {shuffleProducts.slice(-cols).map(({ id, title, price }) => <Product id={id} key={id} title={title} price={price} />)}
      </div>
    </div>
  )
};

export default Sales;