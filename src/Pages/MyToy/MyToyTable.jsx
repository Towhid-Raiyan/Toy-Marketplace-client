import { Link } from "react-router-dom";


const MyToyTable = ({toy,serial,handleDelete}) => {
    const { name, SellerName, subcategory, price, quantity, _id } = toy;
    console.log(toy);
    return (
        <tr>
            <td> {serial} </td>
            <td>{name}</td>
            <td>{SellerName}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/edittoy/${_id}`}>
                    <button className="btn btn-sm btn-warning me-2 text-white">Edit</button>
                </Link>

                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error text-white">Delete</button>
            </td>
        </tr>
    );
};
export default MyToyTable;