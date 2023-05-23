import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import setTitle from "../../Title/setTitle";

const AddToy = () => {
    setTitle('Add Toy');
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
        data.price = parseFloat(data.price);
        data.quantity = parseInt(data.quantity);
        data.rating = parseFloat(data.rating);
        fetch("https://toy-marketplace-server-zeta.vercel.app/addtoy", {
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
                        <tbody className="grid grid-cols-2">
                            <tr>
                                <div>
                                    <th>Picture Url</th>
                                </div>
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
                                <div>
                                    <th>Toy Name</th>
                                </div>
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
                                <div>
                                    <th>Seller Name</th>
                                </div>
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
                                <div>
                                    <th>Seller Email</th>
                                </div>
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
                                <div>
                                    <th>Subcategory</th>
                                </div>
                                <td>
                                    <select
                                        className="p-4 border-2 w-96 rounded-lg"
                                        {...register("subcategory", { required: true })}
                                    >
                                        <option value="car">car</option>
                                        <option value="bike">bike</option>
                                        <option value="truck">truck</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <div>
                                    <th>Price</th>
                                </div>
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
                                <div>
                                    <th>Quantity</th>
                                </div>
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
                                <div>
                                    <th>Ratings</th>
                                </div>
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
                                <div>
                                    <th>Description</th>
                                </div>
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

                <input className="btn btn-accent btn-wide w-3/5" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;
