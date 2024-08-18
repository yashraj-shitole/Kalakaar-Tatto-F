
import './App.css'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Services from './Components/Services'

function App() {

  return (
    <div className='relative'>
    <div className='fixed w-full'>
    <Navbar/>
    </div>

    <Hero/>

    <Gallery/>

    <Services/>

    <AboutUs/>

    <Footer/>
    </div>
  )
}

export default App
