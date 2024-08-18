import gallery from '../Data/gal.json'
import { PiInstagramLogoFill } from "react-icons/pi";
import { Button } from '@material-tailwind/react';
import { useState } from 'react';


const Gallery = () => {

    const[more, SetMore]=useState(false)

    const handleScroll = () => {
      gallery.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    };

  return (
    <div id='gallery' ref={gallery} className='h-fit lg:h-[100vh] flex flex-col items-center justify-center w-full p-10 bg-black text-white'>
        <h1 className='font-bold text-center text-3xl text-primary'>OUR WORK</h1>
       
     <div className='flex flex-col lg:flex-row gap-5  items-center justify-between p-5'>
        <div className='flex gap-2 items-center justify-center'>
            <PiInstagramLogoFill size={50} />
            <h1 className='text-xl'>@instagram.com</h1>
        </div>
           
           <Button className='bg-primary text-xl'>View Profile</Button>

     </div>
       <div className={`no-scrollbar flex items-center justify-center flex-wrap gap-10 w-full ${!more?"h-[60vh]":"h-fit"} overflow-y-scroll` }>
        
       {gallery.map((data) => (
            <>
              <div
                className="flex  flex-row flex-wrap rounded-xl overflow-hidden "
                key={data.id    }
               
              >
                <img src={`/assets/${data.imgSrc}`} alt="" className='h-80'/>
            
            </div> 
            </>
          ))}

        </div>
          <div className='flex items-center justify-center p-10'>
            {
                
            more?<Button  onClick={()=>{SetMore(false); handleScroll()}}>Load Less</Button>
            :<Button   onClick={()=>SetMore(true)}>Load More</Button>
        }


          </div>
        


    </div>
  )
}

export default Gallery