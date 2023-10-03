'use client'

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import products, { shuffleArray } from "@lib/products";
import Product from "../products/Product";

const Search = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const filterProducts = () => {
    if (search === null || undefined || "") {
      return []
    }

    return products.filter((product) => {
      const { title, description, category } = product;
      const lowerQuery = search.toLowerCase()

      const matchesTitle = title.toLowerCase().includes(lowerQuery)
      const matchesDescription = description.toLowerCase().includes(lowerQuery)
      const matchesCategory = category.toLowerCase().includes(lowerQuery)

      return matchesTitle || matchesDescription || matchesCategory;
    });

  }

  const prod = filterProducts()

  const shuffleProducts = shuffleArray([...prod])
  return (
    <>
      <div className="px-6 md:px-8 py-4 my-16">
        <div className="w-full flex items-center justify-between mb-4">
          <div>
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">Result for &quot;{search}&quot;</p>
          </div>
          <div className="pr-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
            </svg>
            <p className="text-sm lg:text-base">Latest</p>
          </div>
        </div>
        {prod.length > 0 ?
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
            {shuffleProducts.slice(-prod.length).map(({ id, title, price }) => <Product id={id} key={id} title={title} price={price} />)}
          </div>
          :
          <div className="m-auto">
            <Image className="mx-auto" src={"/auth/not-found.jpg"} alt={"not-found-vector-image"} width={192} height={192} priority />
            <h1 className=" text-center">Your &quot;{search}&quot; did not match any products.</h1>
          </div>
        }
      </div>
    </>
  )
};

export default Search;