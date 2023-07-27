import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import ToyDetails from "../Pages/AllToy/ToyDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import EditToy from "../Pages/MyToy/EditToy";
import MyToy from "../Pages/MyToy/MyToy";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
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
                path: "toy/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://toy-marketplace-server-towhid-raiyan.vercel.app/toy/${params.id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "mytoys",
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
            },
            {
                path: "edittoy/:id",
                element: <PrivateRoute><EditToy></EditToy></PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`https://toy-marketplace-server-towhid-raiyan.vercel.app/toy/${params.id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }),
            },
            
        ],
    },
]);

export default router;