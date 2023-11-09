import { Link } from "react-router-dom";
import "./menu.scss";
import { FaHome } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to="/">
          <FaHome />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
