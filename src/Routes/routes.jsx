import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import AddToy from "../AddToy/AddToy";

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
            }
        ]
    }
])
export default router