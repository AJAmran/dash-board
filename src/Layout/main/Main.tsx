import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Navbar></Navbar>
      <div className="container">
        <div className="menuContainer">
          <Menu></Menu>
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
