/* eslint-disable react/prop-types */

import { useRef } from "react";


const MyToyRow = ({ toy, idx, handleUpdateToy}) => {
    const priceRef=useRef()
    const quantityRef=useRef()
    const descriptionRef=useRef()
    const { 
        _id,
        toyName,
        name,
        subCategory,
        quantity,
        price,
        description
    } = toy;
    const updateToy=(id)=>{
        const price=priceRef.current.value;
        const quantity=quantityRef.current.value;
        const description=descriptionRef.current.value;
        const updatedToy={price,quantity,description}
        console.log(updatedToy);
        handleUpdateToy(updatedToy,id)
    }
    return (
        <>
            <tr>
                <th>{idx + 1}</th>
                <td>{name}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td className="">{quantity}</td>
                <td><label onClick={() => console.log(_id)} htmlFor={`modal${_id}`} className="bg-3 text-black hoverbg-4 text-xl px-4 py-1 rounded-md">Update</label></td>
            </tr>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`modal${_id}`} className="modal-toggle" />
            <div className="modal bg-black glassbg text-white">
                <form className="modal-box bg-1">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" className="input input-bordered" defaultValue={price} ref={priceRef}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" placeholder="" className="input input-bordered" defaultValue={quantity} ref={quantityRef}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="bg-transparent border rounded p-2" id="" cols="30" rows="6" defaultValue={description} ref={descriptionRef}></textarea>
                    </div>
                    <div className="modal-action">
                        <label  onClick={()=>updateToy(_id)} htmlFor={`modal${_id}`} className="btn">Update</label>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyToyRow;