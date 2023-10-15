import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import FeaturedProducts from "../pages/featuredProducts/FeaturedProducts";
import ServiceCardDetails from "../components/ServiceCardDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/services.json"),
      },
      {
        path: "/featuredProducts",
        element: <FeaturedProducts></FeaturedProducts>,
      },
      {
        path: "/service/:id",
        element: <ServiceCardDetails></ServiceCardDetails>,
        loader: () => fetch("/public/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
