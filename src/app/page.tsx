// import IsAuth from "./isAuth";
import HomeCarousel from "./components/home/Carousel";
import NavBar from "./components/NavigationBar";
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
    </main>
    // </IsAuth>
  )
};


export default Home;