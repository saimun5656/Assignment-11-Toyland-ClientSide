import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Category = () => {
    const [category,setCategory]=useState('classical-cars');
    const [toys,setToys]=useState([]);
    const filter=(event)=>{
            const subCategory=event.target.value
            const filter = subCategory
            setCategory(filter)
    }
    console.log(category);
    useEffect(()=>{
        fetch(`https://assignment-11-toyland-server-side.vercel.app/?subCategory=${category}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setToys(data)
        })
        .catch()
    },[category])
    return (
        
        <div className="my-10 ">
            <h1 className="text-4xl text-white font-semibold md:text-center  mb-10">Shop By category</h1>
            <div>
                <button onClick={filter} value='off-road' className='bg-4 border-l-2 px-4 py-1 text-xl font-semibold text-white'>Off Road</button>
                <button onClick={filter} value='sports-car' className='bg-4 border-l-2 px-4 py-1 text-xl font-semibold text-white'> Sports Car</button>
                <button onClick={filter} value='classical-cars' className='bg-4 border-l-2 px-4 py-1 text-xl font-semibold text-white'> Classical</button>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
                {
                    toys.map(toy=><ToyCard toy={toy} key={toy._id}></ToyCard>)
                }
            </div>

        </div>
    );
};

export default Category;