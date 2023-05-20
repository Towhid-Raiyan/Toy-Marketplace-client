

const AllToyTable = ({ allToy }) => {
    const { name, price, quantity, subcategory, picture } = allToy;
    return (

        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <img src={picture} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-semibold">{subcategory}</div>
                </td>
                <td>
                    {quantity}
                </td>
                <td>${price}</td>
                <th className="text-center">
                    <button className="btn btn-accent btn-sm">Details</button>
                </th>
            </tr>
        </tbody>

    );
};

export default AllToyTable;