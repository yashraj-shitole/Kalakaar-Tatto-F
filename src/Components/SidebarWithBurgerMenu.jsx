import { useState } from "react";
import { IconButton, Drawer } from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import logo from "/assets/logo/logo.jpg";
import { Link } from "react-router-dom";

const SidebarWithBurgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton className="m-2" variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <IoMenu color="white" size={30} />
        ) : (
          <IoMenu color="white" size={30} />
        )}
      </IconButton>
      <Drawer
        className="bg-black opacity-80 "
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <div className="flex flex-col  gap-8 p-10 text-white bg-black">
          <img src={logo} alt="" className="h-20 w-20" />
          <Link
            to="/"
            className="text-3xl font-extrabold text-white hover:text-primary opacity-100"
          >
            HOME
          </Link>
          <Link
            to="/gallery"
            className="text-3xl font-extrabold text-white hover:text-primary opacity-100"
          >
            GALLERY
          </Link>
          <a
            href="#services1"
            className="text-3xl font-extrabold text-white hover:text-primary opacity-100"
          >
            SERVICES
          </a>
          <a
            href="#about us"
            className="text-3xl font-extrabold text-white hover:text-primary opacity-100"
          >
            ABOUT US
          </a>
          <a
            href="#contactus"
            className="text-3xl font-extrabold text-white hover:text-primary opacity-100"
          >
            CONTACT US
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default SidebarWithBurgerMenu;
