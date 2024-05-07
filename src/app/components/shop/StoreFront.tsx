'use client'

import { SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import products, { shuffleArray } from "@lib/products";
import Product from "../products/Product";
import Category from "./Category";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

const StoreFront = () => {
  const [query, setQuery] = useState("All");
  const searchParams = useSearchParams()
  const search = searchParams.get('category')
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20

  useEffect(() => {

    const setCategory = (category: SetStateAction<string>) => {
      setQuery(category)
    }
    // Initial check on component mount
    if (search !== null || undefined || "") {
      setCategory(search as string);
    }

  }, [search]);

  const filterProducts = () => {
    if (query === "All") {
      return products
    } else {
      return products.filter((product) => product.category === query.toLowerCase())
    }
  }

  const prod = filterProducts()

  const totalPages = Math.ceil(prod.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const shuffleProducts = shuffleArray([...prod])

  return (
    <>
      <Category active={query} setActive={setQuery} />
      <div className="px-6 md:px-8 py-4 mb-8">
        <div className="w-full flex items-center justify-between mb-4">
          <div>
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">{query}</p>
          </div>
          <div className="pr-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
            </svg>
            <p className="text-sm lg:text-base">Latest</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {shuffleProducts.slice(startIndex, endIndex).map(({ id, title, price }) => <Product id={id} key={id} title={title} price={price} />)}
        </div>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  )
};

export default StoreFront;