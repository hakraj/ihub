import Link from "next/link";
import Footer from "../../components/Footer";
import NavBar from "../../components/navigation/NavigationBar";
import Pitch from "../../components/Pitch";


const AboutPage = () => {
  return (
    <main>
      <NavBar />
      <div className="px-[10%] py-4 my-8 md:my-16">
        <div className="my-8 lg:w-3/5">
          <p className="font-medium text-2xl md:text-3xl lg:text-4xl mb-4">Welcome to ihub - Your one stop for all needs</p>
          <p className="font-light">At ihub, we&apos;re more than just an e-commerce platform; we&apos;re your partner in finding the perfect products that suit your lifestyle. Our journey began with a simple vision to create a shopping experience that&apos;s not only convenient but also enjoyable.</p>
        </div>
        <div className="my-8 lg:w-3/5">
          <p className="font-medium text-xl md:text-2xl lg:text-3xl mb-2">Our Story</p>
          <p className="font-light">Established in 2023, ihub has since become a trusted name in online shopping. we&apos;ve grown from a small startup into a thriving e-commerce hub, connecting customer with an extensive range of quality products. Our team&apos;s dedication to excellence, customer-centric approach, and commitment to innovation have been the driving force behind our success.</p>
        </div>
        <div className="my-8 lg:w-3/5">
          <p className="font-medium text-xl md:text-2xl lg:text-3xl mb-2">Our Mission</p>
          <p className="font-light">Our mission is clear: to provide you with access to a vast selection of products that cater to your every need. From the latest tech gadgets to fashion trends, from home essentials to fitness gear, we&apos;ve got you covered. we carefully curate our offerings, ensuring that every item meet our stringent quality standards</p>
        </div>
      </div>
      <Pitch />
      <div className="px-[10%] md:px-[20%] lg:px-[10%] py-4 my-8 md:my-16">
        <div className="my-8 lg:w-3/5">
          <p className="font-medium text-xl md:text-2xl lg:text-3xl mb-2">Join the ihub Community</p>
          <p className="font-light">we&apos;re more than an online store; we&apos;re a community of shoppers how appreciate quality, convenience, and great deals. Join us in discovering new products, sharing reviews, and enjoyinng exclusive promotions.</p>
        </div>
        <div className="my-8 lg:w-3/5">
          <p className="font-medium text-xl md:text-2xl lg:text-3xl mb-2">Contact us</p>
          <p className="font-light">Have a question or feedback? we&apos;d love to hear from you! Feel free to reach out to our friendly support team through our <Link className="text-[#8F00FF]" href={"/contact"}>Contact Page</Link>.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;