import { useContext} from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import setTitle from "../../Title/setTitle";

const EditToy = () => {
    const navigate = useNavigate();
    setTitle('Edit Toy');

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();

    // console.log(toy);
    const {
        picture,
        name,
        SellerName,
        SellerEmail,
        price,
        quantity,
        rating,
        description,
        subcategory,
        _id,
    } = toy;
    const onSubmit = (data) => {
        data.price = parseFloat(data.price);
        data.quantity = parseInt(data.quantity);
        data.rating = parseFloat(data.rating);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Edit this toy?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#06bdb0", 
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Edit!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-towhid-raiyan.vercel.app/edittoy/${_id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                    mode: 'cors'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                "Edited!",
                                "Your Toy has been Edited.",
                                "success"
                            );
                            navigate("/mytoys");
                        }
                    });
            }
        });

        // modifiedCount
    };
    return (
        <div className="my-20">
            <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">Edit Toy Information</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center gap-6"
            >
                <div className="overflow-x-auto">
                    <table className="table  w-full flex flex-col">
                        <tbody className="grid grid-cols-2 gap-4">
                            <tr className="w-1/2">
                                <div className="w-28">
                                <th >Picture Url</th>
                                </div>
                                <td>
                                    <input
                                        type="text"
                                        id="picture"
                                        label="URL"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Picture Url"
                                        defaultValue={picture}
                                        {...register("picture", {
                                            required: true,
                                        })}
                                    />
                                </td>
                            </tr>
                            <tr className="w-1/2">
                                <div>
                                <th className="w-28">Toy Name</th>
                                </div>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Toy Name"
                                        defaultValue={name}
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                </td>
                            </tr>
                            <tr className="w-1/2">
                                <div>
                                <th className="w-28">Seller Name</th>
                                </div>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Seller Name"
                                        defaultValue={
                                            user?.displayName || SellerName
                                        }
                                        {...register("SellerName", {})}
                                    />
                                </td>
                            </tr>
                            <tr className="w-1/2">
                                <div>
                                <th className="w-28"> Seller Email</th>
                                </div>
                                <td>
                                    <input
                                        type="email"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Seller Email"
                                        defaultValue={
                                            user?.email || SellerEmail
                                        }
                                        {...register("SellerEmail", {
                                            required: true,
                                        })}
                                    />
                                </td>
                            </tr>
                            <tr className="w-1/2">
                                <div>
                                <th>Category</th>
                                </div>
                                <td>
                                    <select
                                        className="p-4 border-2 w-96 rounded-lg"
                                        defaultValue={subcategory}
                                        {...register("subcategory", {
                                            required: true,
                                        })}
                                    >
                                        <option value="car">
                                            Car
                                        </option>
                                        <option value="bike">
                                            Bike
                                        </option>
                                        <option value="truck">
                                            Truck
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="w-1/2">
                                <div>
                                <th>Price</th>
                                </div>
                                <td>
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Price"
                                        defaultValue={price}
                                        {...register("price", {})}
                                    />
                                </td>
                            </tr>
                            <tr className="w-1/2 ">
                                <div>
                                <th>Quantity</th>
                                </div>
                                <td className="w-3/4">
                                    <input
                                        type="text"
                                        className="p-4 border-2 w-96 rounded-lg"
                                        placeholder="Quantity"
                                        defaultValue={quantity}
                                        {...register("quantity", {})}
                                    />
                                </td>
                            </tr>
                            <tr className="w-1/2 ">
                                <div>
                                <th>Ratings</th>
                                </div>
                                <td className="w-3/4">
                                    <input
                                        type="text"
                                        className="p-4 border-2 rounded-lg w-96"
                                        placeholder="Rating"
                                        defaultValue={rating}
                                        {...register("rating", {})}
                                    />
                                </td>
                            </tr>
                            <tr className="w-full">
                                <div>
                                <th>Description</th>
                                </div>
                                <td className="">
                                    <input
                                        type="text-area"
                                        className="p-4 border-2  rounded-lg w-96"
                                        placeholder="Description"
                                        defaultValue={description}
                                        {...register("description", {})}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <input
                    className="btn btn-accent btn-block w-3/5 text-white"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default EditToy;
