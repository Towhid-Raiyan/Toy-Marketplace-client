import { useContext } from "react";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToy = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
        data.price = parseFloat(data.price);
        data.quantity = parseInt(data.quantity);
        data.rating = parseFloat(data.rating);
        fetch("http://localhost:5000/addtoy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            mode: 'cors'
        })
            .then((res) => res.json())
            .then((newData) => {
                Swal.fire(
                    "Added!",
                    "Your Toy has been Added!!",
                    "success"
                );
                reset();
            });
        // console.log(data);
    };

    return (
        <div className="my-20">
            <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">Add A Toy</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center gap-6"
            >
                <div className="overflow-x-auto">
                    <table className="table  w-full flex flex-col">
                        <tbody>
                            <tr>
                                <th>Picture Url</th>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Picture Url"
                                        {...register("picture", { required: true })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Toy Name</th>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Toy Name"
                                        {...register("name", { required: true })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Seller Name</th>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Seller Name"
                                        defaultValue={user?.displayName}
                                        {...register("SellerName", {})}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Seller Email</th>
                                <td>
                                    <input
                                        type="email"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Seller Email"
                                        defaultValue={user?.email}
                                        {...register("SellerEmail", { required: true })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Subcategory</th>
                                <td>
                                    <select
                                        className="p-4 border-2 w-96 rounded-lg"
                                        {...register("subcategory", { required: true })}
                                    >
                                        <option value="car">Car</option>
                                        <option value="bike">Bike</option>
                                        <option value="truck">Truck</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Price"
                                        {...register("price", {})}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Quantity</th>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Quantity"
                                        {...register("quantity", {})}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Ratings</th>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Rating"
                                        {...register("rating", {})}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>
                                    <input
                                        type="text-area"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Description"
                                        {...register("description", {})}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <input className="btn btn-accent btn-wide" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;
