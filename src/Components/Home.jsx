import AboutUs from "./AboutUs"
import Footer from "./Footer"
import Gallery from "./Gallery"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Services from "./Services"
const Home = () => {
  return (
<>
    <div className='fixed w-full'>
        <Navbar/>
    </div>

    <Hero/>

    <Gallery/>

    <Services/>

    <AboutUs/>

    <Footer/>
</>
)
}

export default Home