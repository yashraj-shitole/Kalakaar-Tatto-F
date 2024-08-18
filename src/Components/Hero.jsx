import herobg from '/assets/hero/bg.jpg';
import { Button } from "@material-tailwind/react";


const Hero = () => {
  return (
    <div id='home' className=' h-[100vh] bg-center bg-fixed flex p-5 items-center justify-center' style={{ backgroundImage: `url(${herobg})`  }}>
        
        <p className=' flex flex-col gap-5 text-center items-center justify-center  text-white'>
      <h1 className='text-6xl font-bold text-primary'>WELCOME TO THE VIBE</h1>
      <h4 className='h4'>A Place that Has Been Winning Hearts Since 2009. We Give You a Piece of Art that  Reaches to Your Soul.<br></br>
      Check Our Instagram Page Below to Get a Glimpse of Our Artworks and Their Proud Owners.</h4>
     <Button href='#contactus' className='bg-primary w-fit'>Know more</Button>
     <Button href='#contactus' className='bg-primary w-fit'> <a href='#contactus'>Free Call Consultation</a></Button>

     
                    </p>

    </div>
  )
}

export default Hero