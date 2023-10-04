import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navigation/NavigationBar";
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