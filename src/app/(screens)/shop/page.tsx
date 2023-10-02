import Footer from "../../components/Footer";
import NavBar from "../../components/navigation/NavigationBar";
import Products from "@/app/components/products/Products";


const Shop = () => {
  return (
    <main>
      <NavBar />
      <Products name={"All"} cols={10} />
      <Footer />
    </main>
  );
};

export default Shop;