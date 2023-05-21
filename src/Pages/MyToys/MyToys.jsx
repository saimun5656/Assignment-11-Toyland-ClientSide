import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";

const MyToys = () => {
    const [toys,setToys]=useState([]);
    const{user}=useContext(AuthContext);
    const [updated,setUpdate]=useState(false);
    useEffect(()=>{
        fetch(`https://assignment-11-toyland-server-side.vercel.app/toys/user?email=${user.email}`)
        .then(res => res.json())
        .then(data => setToys(data));
    }, [user.email,updated])
    const handleUpdateToy=(update,id)=>{
        fetch(`https://assignment-11-toyland-server-side.vercel.app/toys/${id}`,{
            method:"PATCH",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUpdate(!updated)
            data.modifiedCount>0?
            Swal.fire({
              title: 'updated!',
              text: 'Toy details has been updated',
              icon: 'success',
              confirmButtonText: 'ok'
            }):''
        })
   }
    return (
        <div className="overflow-x-auto min-h-screen text-white mt-16">
        <table className="table mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>index</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {
              toys.map((toy, idx) => <MyToyRow key={toy._id} idx={idx} toy={toy} handleUpdateToy={handleUpdateToy}></MyToyRow>)
            }

          </tbody>
        </table>
      </div>
    );
};

export default MyToys;