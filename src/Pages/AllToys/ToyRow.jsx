/* eslint-disable react/prop-types */


const ToyRow = ({ toy, idx }) => {
    const { toyName,
            name,
            subCategory,
            quantity,
            price
          } = toy;
    return (
        <>
            <tr>
                <th>{idx}</th>
                <td>{name}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td><button className="bg-3 text-black hoverbg-4 text-xl px-4 py-1 rounded-md">Update</button></td>
            </tr>
        </>
    );
};

export default ToyRow;