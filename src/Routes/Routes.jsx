import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import Blogs from "../Pages/Blogs/Blogs";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'allToy',
                element: <AllToy></AllToy>
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'/*',
                element: <Errorpage></Errorpage>
            }
        ],
    },
]);

export default router;