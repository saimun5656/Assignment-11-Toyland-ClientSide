import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";

const MyToys = () => {
    const [toys,setToys]=useState();
    const{user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5100/toy/user?email=${user.email}`)
    })
    return (
        <div>
            
        </div>
    );
};

export default MyToys;