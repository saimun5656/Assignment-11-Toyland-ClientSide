import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/register";
import PrivateRoute from "./PrivateRoute";


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
                element:<MyToys></MyToys>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<Register></Register>
            }
        ]
    }
])
export default router