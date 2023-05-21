import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/register";
import PrivateRoute from "./PrivateRoute";
import Authenticate from "../Layouts/Authenticate";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'addtoy',
                element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'alltoys',
                element:<AllToys></AllToys>
            },
            {
                path:'mytoys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'toys/:id',
                element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://assignment-11-toyland-server-side.vercel.app/toys/${params.id}`)
            }
        ]
    },
    {
        path:'/auth',
        element:<Authenticate></Authenticate>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/signup',
                element:<Register></Register>
            }
        ]
    }
])
export default router