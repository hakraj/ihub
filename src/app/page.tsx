// import IsAuth from "./isAuth";
import HomeCarousel from "./components/home/Carousel";
import NavBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Pitch from "./components/Pitch";
import Products from "./components/ProductsGrid";
// import { signOut, useSession } from "next-auth/react";


const Home = () => {
  // const { data: session, status } = useSession();

  return (
    // <IsAuth>
    <main>
      <NavBar />
      <HomeCarousel />
      <Products />
      <Pitch />
      <Footer />
    </main>
    // </IsAuth>
  )
};


export default Home;