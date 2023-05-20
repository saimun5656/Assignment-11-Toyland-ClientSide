/* eslint-disable react/prop-types */


const MyToyRow = ({toy,idx}) => {
    const { toyName,
        name,
        subCategory,
        quantity,
        price
      } = toy;
return (
    <>
        <tr>
            <th>{idx+1}</th>
            <td>{name}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td className="flex justify-center">{quantity}</td>
            <td><button className="bg-3 text-black hoverbg-4 text-xl px-4 py-1 rounded-md">Update</button></td>
        </tr>
    </>
);
};

export default MyToyRow;