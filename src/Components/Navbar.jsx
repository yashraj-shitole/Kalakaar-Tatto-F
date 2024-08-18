import SidebarWithBurgerMenu from './SidebarWithBurgerMenu'
import logo from '/assets/logo/logo.jpg'

const Navbar = () => {
  return (
    <div  className=' flex items-center justify-between px-8 py-5 bg-black bg-opacity-60'>
        <div className='flex items-center justify-center gap-2'>
            <img src={logo} alt="" className='h-10'/>
            <a href="#home" className='text-white font-extrabold text-2xl'>KALAKAAR TATTOO</a>
        </div>
        <div className=''>

            <div className='hidden lg:flex text-white gap-10'>
                <a href='#home' className='font-extrabold text-white hover:text-primary opacity-100'>HOME</a>
                <a href='#gallery' className='font-extrabold text-white hover:text-primary opacity-100'>GALLERY</a>
                <a href='#services1'  className='font-extrabold text-white hover:text-primary opacity-100'>SERVICES</a>
                <a href='#about us' className='font-extrabold text-white hover:text-primary opacity-100' >ABOUT US</a>
            </div>
            <div className='lg:hidden flex '>
                <SidebarWithBurgerMenu/>
            </div>
        </div>
    </div>
  )
}

export default Navbar