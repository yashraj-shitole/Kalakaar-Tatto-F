import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="fixed w-full">
        <Navbar />
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
