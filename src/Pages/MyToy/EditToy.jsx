// import { useContext, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import setTitle from "../../hook/setTitle";

// const EditToy = () => {
//     const navigate = useNavigate();
//     setTitle('Edit Toy');

//     const { register, handleSubmit } = useForm();
//     const { user } = useContext(AuthContext);
//     const toy = useLoaderData();

//     // console.log(toy);
//     const {
//         PictureUrl,
//         ToyName,
//         SellerName,
//         SellerEmail,
//         Price,
//         Quantity,
//         Rating,
//         Description,
//         Category,
//         _id,
//     } = toy;
//     const onSubmit = (data) => {
//         data.Price = parseFloat(data.Price);
//         data.Quantity = parseInt(data.Quantity);
//         data.Rating = parseFloat(data.Rating);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to edit this toy?",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#FBBD23",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, Edit my toy!",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`https://khela-ghor-server.vercel.app/edittoy/${_id}`, {
//                     method: "PUT",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(data),
//                     mode: 'cors'
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.modifiedCount > 0) {
//                             Swal.fire(
//                                 "Edited!",
//                                 "Your Toy has been Edited.",
//                                 "success"
//                             );
//                             navigate("/mytoys");
//                         }
//                     });
//             }
//         });

//         // modifiedCount
//     };
//     return (
//         <div className="my-20">
//             <h1 className="text-4xl text-center mb-8">Edit Toy</h1>
//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="flex flex-col justify-center items-center gap-6"
//             >
//                 <div className="overflow-x-auto">
//                     <table className="table  w-full flex flex-col">
//                         <tbody>
//                             <tr>
//                                 <th>Pic Url</th>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         id="PictureUrl"
//                                         label="URL"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Picture Url"
//                                         defaultValue={PictureUrl}
//                                         {...register("PictureUrl", {
//                                             required: true,
//                                         })}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Toy Name</th>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Toy Name"
//                                         defaultValue={ToyName}
//                                         {...register("ToyName", {
//                                             required: true,
//                                         })}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Seller Name</th>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Seller Name"
//                                         defaultValue={
//                                             user?.displayName || SellerName
//                                         }
//                                         {...register("SellerName", {})}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Seller Email</th>
//                                 <td>
//                                     <input
//                                         type="email"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Seller Email"
//                                         defaultValue={
//                                             user?.email || SellerEmail
//                                         }
//                                         {...register("SellerEmail", {
//                                             required: true,
//                                         })}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Category</th>
//                                 <td>
//                                     <select
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         defaultValue={Category}
//                                         {...register("Category", {
//                                             required: true,
//                                         })}
//                                     >
//                                         <option value="engineering">
//                                             Engineering Toys
//                                         </option>
//                                         <option value="board">
//                                             Board Toys
//                                         </option>
//                                         <option value="puzzle">
//                                             Puzzle Toys
//                                         </option>
//                                     </select>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Price</th>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Price"
//                                         defaultValue={Price}
//                                         {...register("Price", {})}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Quantity</th>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Quantity"
//                                         defaultValue={Quantity}
//                                         {...register("Quantity", {})}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Ratings</th>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Rating"
//                                         defaultValue={Rating}
//                                         {...register("Rating", {})}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <th>Description</th>
//                                 <td>
//                                     <input
//                                         type="text-area"
//                                         className="p-4 border-2 w-96 rounded-lg"
//                                         placeholder="Description"
//                                         defaultValue={Description}
//                                         {...register("Description", {})}
//                                     />
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 <input
//                     className="btn btn-warning btn-wide text-white"
//                     type="submit"
//                 />
//             </form>
//         </div>
//     );
// };

// export default EditToy;
