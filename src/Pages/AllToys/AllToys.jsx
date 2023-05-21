import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch('https://assignment-11-toyland-server-side.vercel.app/toys')
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])
  return (
    <div>
      <div className="overflow-x-auto text-white my-16">
        <table className="table w-11/12 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>index</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {
              toys.map((toy, idx) => <ToyRow key={toy._id} idx={idx} toy={toy}></ToyRow>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;