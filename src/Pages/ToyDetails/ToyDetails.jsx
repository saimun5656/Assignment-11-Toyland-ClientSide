import { useLoaderData,} from "react-router-dom";

const ToyDetails = () => {
    const {photo,toyName,name,rating,price,quantity,description} = useLoaderData()
    return (
        <div className="text-white min-h-screen flex justify-center items-center ">
         
         <div className="grid grid-cols-1 md:grid-cols-3 border border-emerald-400 rounded-lg">
         <div className="rounded-l-lg ">
         <img className="rounded-l-lg md:h-full w-full" src={photo} alt="" />
         </div>
         <div className="col-span-2 glassbg rounded-lg p-10 space-y-3"> 
             <h1 className="text-3xl font-semibold">{toyName}</h1>
             <p className="text-xl font-medium">${price}</p>
             <p className="">seller : {name}</p>
             <p className="">rating :{rating}</p>
             <p className="">Avilable :{quantity}</p>
          <p><b>Details:</b>{description}</p>
         </div>
         </div>
        

        </div>
    );
};

export default ToyDetails;