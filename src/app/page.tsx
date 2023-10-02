// import IsAuth from "./isAuth";
import HomeCarousel from "./components/home/Carousel";
import NavBar from "./components/navigation/NavigationBar";
import Footer from "./components/Footer";
import Pitch from "./components/Pitch";
import HomeGrid from "./components/home/HomeGrid";
// import { signOut, useSession } from "next-auth/react";


const Home = () => {
  // const { data: session, status } = useSession();

  return (
    // <IsAuth>
    <main>
      <NavBar page="home" />
      <HomeCarousel />
      <HomeGrid />
      <Pitch />
      <Footer />
    </main>
    // </IsAuth>
  )
};


export default Home;