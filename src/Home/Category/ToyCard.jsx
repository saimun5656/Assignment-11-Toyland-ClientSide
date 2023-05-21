/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ToyCard = ({toy}) => {
    const{_id,toyName,price,rating,subCategory,photo,quantity}=toy
    return (
        <div className="card md:card-side bg-base-100 shadow-xl border rounded-b-lg border-emerald-600">
            <figure><img className="w-full  md:w-80 md:h-80" src={photo} alt="Movie" /></figure>
            <div className="card-body p-0 glassbg rounded-lg text-white ">
                <h2 className="border-b px-8 py-4 card-title">{toyName}</h2>
                <p  className="border-b px-8 py-4">${price}</p>
                <p  className="border-b px-8 py-4">Category : {subCategory}</p>
                <p  className="border-b px-8 py-4">Available : {quantity} units</p>
                <div className="card-actions justify-center">
                    <Link to={`toys/${_id}`}><button className="py-1 px-6 bg-4 mb-2 rounded">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;