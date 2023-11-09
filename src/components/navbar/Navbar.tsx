import "./navbar.scss";
import {
  AiFillAppstore,
  AiFillSetting,
  AiOutlineExpand,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="logo.svg"
          alt="logo"
          className="logo"
          height={50}
          width={50}
        />
        <span>AdminHub</span>
      </div>
      <div className="icons">
        <AiOutlineFileSearch className="icon" />
        <AiFillAppstore className="icon" />
        <AiOutlineExpand className="icon" />
        <div className="notification">
          <IoMdNotifications className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://rb.gy/gh7e1g" alt="user" />
          <span>Amran</span>
        </div>
        <AiFillSetting className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
