import logo from '../../public/assets/logo/logo.jpg'

const Footer = () => {
  return (
<footer className="w-full bg-black p-8">
    <div className="h-[0.5px] my-5 bg-primary"></div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-evenly">
        <img src={logo} alt="logo-ct" className="w-20" />
        <div className='flex flex-col items-start text-white gap-2'>
                <a href='#home' className='font-extrabold text-white hover:text-primary opacity-100'>HOME</a>
                <a href='#gallery' className='font-extrabold text-white hover:text-primary opacity-100'>GALLERY</a>
                <a href='#services1'  className='font-extrabold text-white hover:text-primary opacity-100'>SERVICES</a>
                <a href='#about us' className='font-extrabold text-white hover:text-primary opacity-100' >ABOUT US</a>
            </div>
      </div>
      
    </footer>  )
}

export default Footer