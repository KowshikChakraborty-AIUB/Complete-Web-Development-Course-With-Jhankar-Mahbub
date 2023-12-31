import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CheckOutDetails from "../Pages/CheckOutDetails/CheckOutDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/checkOut/:id', 
          element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/checkOutDetails',
          element: <PrivateRoutes><CheckOutDetails></CheckOutDetails></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router;
  