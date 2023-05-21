import { useEffect, useRef, useState } from "react";
import AllToyTable from "./AllToyTable";

const AllToy = () => {
    const [allToys, setAllToy] = useState([]);
    const [searchItem, setSearchItem] = useState(null);
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchItem) {
            fetch(`http://localhost:5000/toys?name=${searchItem}`)
                .then((res) => res.json())
                .then((data) => {
                    setAllToy(data);
                });
        } else if (!searchItem) {
            fetch(`http://localhost:5000/toys`)
                .then((res) => res.json())
                .then((data) => {
                    setAllToy(data);
                });
        }
    }, [searchItem]);

    const setSearch = (event) => {
        event.preventDefault();
        const category = searchInputRef.current.value;
        setSearchItem(category);
    };

    // useEffect(() => {
    //     fetch('http://localhost:5000/toys')
    //         .then(res => res.json())
    //         .then(data => setAllToy(data))
    // }, [])
    return (
        <div>
            <div className="text-center my-6">
                <h3 className="text-3xl text-cyan-600 font-extrabold">All Toys of our Shop</h3>
                <p>Here you can explore all the toys of our shop. All products are unique and authentic.</p>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subcategory</th>
                                <th>Available Quantity</th>
                                <th>Price</th>
                                <th className="text-end">
                                    <input
                                        className="input input-bordered input-accent me-4"
                                        type="text"
                                        name="search"
                                        ref={searchInputRef}
                                    />
                                    <button className="btn btn-accent text-white" onClick={setSearch}>
                                        Search
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        {
                            allToys.map(allToy => <AllToyTable
                                key={allToy._id}
                                allToy={allToy}
                            ></AllToyTable>)
                        }
                    </table>
                </div>
            </div>

        </div >
    );
};

export default AllToy;