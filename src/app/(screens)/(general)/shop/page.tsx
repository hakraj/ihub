import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navigation/NavigationBar";
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