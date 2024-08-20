import { Link } from "react-router-dom";
import SidebarWithBurgerMenu from "./SidebarWithBurgerMenu";
import logo from "/assets/logo/logo.jpg";
const Navbar = () => {
  return (
    <div className=" flex w-full items-center justify-between px-8 py-2 bg-black bg-opacity-60">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="" className="lg:h-20 h-10" />
        <Link to="/" className="text-white font-extrabold text-2xl">
          KALAKAAR TATTOO
        </Link>
      </div>
      <div className="">
        <div className="hidden lg:flex text-white gap-10">
          <Link
            to="/"
            className="font-extrabold text-white hover:text-primary opacity-100"
          >
            HOME
          </Link>
          <Link
            to="/gallery"
            className="font-extrabold text-white hover:text-primary opacity-100"
          >
            GALLERY
          </Link>
          <a
            href="#services1"
            className="font-extrabold text-white hover:text-primary opacity-100"
          >
            SERVICES
          </a>
          <a
            href="#about us"
            className="font-extrabold text-white hover:text-primary opacity-100"
          >
            ABOUT US
          </a>
          <a
            href="#contactus"
            className="font-extrabold text-white hover:text-primary opacity-100"
          >
            Contact Us
          </a>
        </div>
        <div className="lg:hidden flex ">
          <SidebarWithBurgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
