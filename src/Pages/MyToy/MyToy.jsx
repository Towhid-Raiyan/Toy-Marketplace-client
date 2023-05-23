import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import setTitle from "../../Title/setTitle";
import MyToyTable from "./MyToyTable";

const MyToy = () => {
    setTitle('My Toys');

    const [myToys, setMyToys] = useState([]);
    const [sort, setSort] = useState('x');
    const { user } = useContext(AuthContext);
    const email = user?.email;
    useEffect(() => {
        // console.log(sort);
        fetch(`https://toy-marketplace-server-zeta.vercel.app/mytoys?email=${email}&sort=${sort}`)
            .then((res) => res.json())
            .then((data) => {
                setMyToys(data);
            });
    }, [sort, email]);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#06bdb0",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete my toy!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-zeta.vercel.app/mytoys/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Toy has been deleted.",
                                "success"
                            );
                            const remaining = myToys.filter(
                                (toys) => toys._id !== id
                            );
                            setMyToys(remaining);
                        }
                    });
            }
        });
    };
    const handleAscending = () => {
        setSort("asc");
        
    };
    const handleDescending = () => {
        setSort("desc");
        
    };
    return (
        <div className="my-10">
            <p className=" text-2xl md:text-4xl font-bold text-center text-cyan-600 ">
                My Toys
            </p>
            <div className="flex items-center justify-end my-10  me-10 gap-6 ">
                Sort by price -
                <button
                    className={`btn btn-sm ${
                        sort === "asc" ? "btn-accent text-white" : "btn bg-gray-600 text-white"
                    }`}
                    onClick={handleAscending}
                >
                    Ascending
                </button>
                <button
                    className={`btn btn-sm ${
                        sort === "desc" ? "btn-accent text-white" : "btn bg-gray-600 text-white"
                    }`}
                    onClick={handleDescending}
                >
                    Descending
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>SubCategory</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myToys.map((toy, index) => (
                            <MyToyTable
                            key={toy._id}
                            toy={toy}
                            serial={index + 1}
                            handleDelete={handleDelete}
                            ></MyToyTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;