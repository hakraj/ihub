import Footer from "../../../components/Footer";
import NavBar from "../../../components/navigation/NavigationBar";
import Search from "@/app/components/shop/Search";


const SearchProducts = () => {

  return (
    <main>
      <NavBar page="shop" />
      <Search />
      <Footer />
    </main>
  );
};

export default SearchProducts;