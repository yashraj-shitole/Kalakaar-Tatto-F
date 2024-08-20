import { Outlet } from "react-router-dom";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";


const Layout = () => {
  return (
    <>
      

      <Outlet />

      <ScrollToTopOnRouteChange/>


    </>
  );
};

export default Layout;
