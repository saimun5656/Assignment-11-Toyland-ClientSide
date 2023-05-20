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
                <th>{idx+1}</th>
                <td>{name}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td className="flex justify-center">{quantity}</td>
               
            </tr>
        </>
    );
};

export default ToyRow;