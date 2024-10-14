import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Collection from "../Pages/Collection";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import PlaceOrder from "../Pages/PlaceOrder";
import Orders from "../Pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:ProductId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;
