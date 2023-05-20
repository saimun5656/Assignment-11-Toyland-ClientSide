import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
    const [toys,setToys]=useState([]);
    const{user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5100/toy/user?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    })

    return (
        <div className="overflow-x-auto min-h-screen">
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
              toys.map((toy, idx) => <MyToyRow key={toy._id} idx={idx} toy={toy}></MyToyRow>)
            }

          </tbody>
        </table>
      </div>
    );
};

export default MyToys;