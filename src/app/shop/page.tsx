import Footer from "../components/Footer";
import NavBar from "../components/NavigationBar";
import { Product } from "../components/ProductsGrid";



const Shop = () => {
  return (
    <main>
      <NavBar />
      <div className="px-6 md:px-8 py-4 my-16">
        <div>
          <p className="font-medium text-xl md:text-2xl lg:text-3xl mb-4">All</p>
          {/* <p className="text-[#AF69EE] italic mb-4"></p> */}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {new Array(24).fill('product').map((_, i) => <Product key={i} />)}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Shop;