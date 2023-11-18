import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Product from "../../pages/product/Product";
import Users from "../../pages/users/Users";
import Main from "../../Layout/main/Main";
import Login from "../../pages/login/Login";
import SingleUser from "../../pages/singleUser/SingleUser";
import SingleProduct from "../../pages/singleProduct/SingleProduct";
import ProfilePage from "../../pages/userProfile/UserProfile";
import OrdersPage from "../../pages/order/Order";

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
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/orders",
        element:<OrdersPage></OrdersPage>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
