import Footer from "../../components/Footer";
import NavBar from "../../components/navigation/NavigationBar";
import StoreFront from "@/app/components/shop/StoreFront";


const Shop = () => {

  return (
    <main>
      <NavBar page="shop" />
      <StoreFront />
      <Footer />
    </main>
  );
};

export default Shop;