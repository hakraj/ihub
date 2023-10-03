import { Dispatch, SetStateAction } from "react";


const Category = (
  { active, setActive }
    :
    { active: string, setActive: Dispatch<SetStateAction<string>> }
) => {
  const categories = ["All", "Clothing", "Tech", "Home", "Beauty"]
  return (
    <div className="text-center my-8 space-x-4">
      {categories.map((category, i) => {
        if (active === category) {
          return <span onClick={() => setActive(category)} key={i} className="cursor-pointer text-sm lg:text-base py-1 px-2 bg-[#8F00FF]/50 font-light rounded">{category}</span>
        } else {
          return <span onClick={() => setActive(category)} key={i} className="cursor-pointer text-sm lg:text-base py-1 px-2 bg-[#D7BFDC]/50 font-light rounded">{category}</span>
        }
      })}
    </div>

  );
};

export default Category;