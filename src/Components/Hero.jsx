import herobg from '/assets/hero/bg.jpg';
import { Button } from "@material-tailwind/react";


const Hero = () => {
  return (
    <div id='home' className=' h-[100vh] bg-center bg-fixed flex pt-28 p-5 lg:pt-5 items-center justify-center' style={{ backgroundImage: `url(${herobg})`  }}>
        
        <p className=' flex flex-col gap-5 text-center items-center justify-center  text-white'>
        <h2 className="max-w-xl text-primary text-5xl font-bold tracking-tight  sm:text-6xl">
        Welcome to Kalakaar Tattoo</h2>
      <h4 className='h4 p-10'>Where art meets skin! Located in the heart of Bombay, Kalakaar Tattoo is your destination for high-quality, custom tattoo designs. Our studio is a space where creativity flourishes, and our skilled artists are dedicated to bringing your unique ideas to life.
      </h4>
     <Button href='#aboutus' className='bg-primary w-fit'><a href='#about us'>Know more</a></Button>
     <Button href='#contactus' className='bg-primary w-fit'> <a href='#contactus'>Free Call Consultation</a></Button>

     
                    </p>

    </div>
  )
}

export default Hero