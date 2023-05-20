/* eslint-disable react/prop-types */


const MyToyRow = ({ toy, idx }) => {
    const { toyName,
        name,
        subCategory,
        quantity,
        price,
        description
    } = toy;
    return (
        <>
            <tr>
                <th>{idx + 1}</th>
                <td>{name}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td className="">{quantity}</td>
                <td><label onClick={() => console.log(idx + 1)} htmlFor={`modal${idx + 1}`} className="bg-3 text-black hoverbg-4 text-xl px-4 py-1 rounded-md">Update</label></td>
            </tr>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`modal${idx + 1}`} className="modal-toggle" />
            <div className="modal bg-black glassbg text-white">
                <div className="modal-box bg-1">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" className="input input-bordered" defaultValue={price} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" placeholder="" className="input input-bordered" defaultValue={quantity} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="bg-transparent border rounded p-2" name="" id="" cols="30" rows="6" defaultValue={description}></textarea>
                    </div>
                    <div className="modal-action">
                        <label onClick={() => console.log(idx + 1)} htmlFor={`modal${idx + 1}`} className="btn">Update</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyToyRow;