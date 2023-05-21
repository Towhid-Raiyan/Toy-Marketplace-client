// import { Link } from "react-router-dom";


// const MyToyTable = ({toy,serial,handleDelete}) => {
//     const { ToyName, SellerName, Category, Price, Quantity, _id } = toy;
//     // console.log('done');
//     return (
//         <tr>
//             <td> {serial} </td>
//             <td>{ToyName}</td>
//             <td>{SellerName}</td>
//             <td>{Category}</td>
//             <td>{Price}</td>
//             <td>{Quantity}</td>
//             <td>
//                 <Link to={`/edittoy/${_id}`}>
//                     <button className="btn btn-sm btn-warning me-2 text-white">Edit</button>
//                 </Link>

//                 <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error text-white">Delete</button>
//             </td>
//         </tr>
//     );
// };
// export default MyToyTable;