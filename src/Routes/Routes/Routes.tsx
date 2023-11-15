import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Product from "../../pages/product/Product";
import Users from "../../pages/users/Users";
import Main from "../../Layout/main/Main";
import Login from "../../pages/login/Login";
import SingleUser from "../../pages/singleUser/SingleUser";
import SingleProduct from "../../pages/singleProduct/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/user/:id",
        element: <SingleUser />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
