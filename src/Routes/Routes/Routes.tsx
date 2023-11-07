import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Product from "../../pages/product/Product";
import Users from "../../pages/users/Users";
import Main from "../../Layout/main/Main";
import Login from "../../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/products",
        element: <Product></Product>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
