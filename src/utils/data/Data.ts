import {
  FaHome,
  FaUserCircle,
  FaShoppingBag,
  FaLuggageCart,
  FaFilePowerpoint,
  FaCog,
  FaChartLine,
} from "react-icons/fa";
import { MdBackup } from "react-icons/md";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: FaHome,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: FaUserCircle,
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: FaUserCircle,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: FaShoppingBag,
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: FaLuggageCart,
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icons: FaFilePowerpoint,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: FaCog,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: MdBackup,
      },
    ],
  },
  {
    id: 5,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: FaChartLine,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "logo.svg",
      },
    ],
  },
];
