import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";


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
                element:<AddToy></AddToy>
            },
            {
                path:'alltoys',
                element:<AllToys></AllToys>
            },
            {
                path:'mytoys',
                element:<MyToys></MyToys>
            },
        ]
    }
])
export default router