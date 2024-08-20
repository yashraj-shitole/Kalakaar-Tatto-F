import AboutUs from "./AboutUs";
import Artists from "./Artists";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import InstagramVideos from "./InstagramVideos";
import Navbar from "./Navbar";
import Services from "./Services";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <>

<div className="fixed w-full z-50 ">
        <Navbar />
      </div>
      <Hero />

      <Gallery />

<div className="overflow-x-hidden">
        <InstagramVideos/>

</div>

      <Services />


      <AboutUs />

      <Artists />

      <Testimonials />

      <ContactUs />
      <Footer/>
    </>
  );
};

export default Home;
