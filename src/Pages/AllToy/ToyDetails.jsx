import { Link, useLoaderData } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import setTitle from "../../Title/setTitle";
const ToyDetails = () => {

    const toy = useLoaderData();
    const {
        picture,
        name,
        SellerName,
        SellerEmail,
        price,
        quantity,
        rating,
        description,
        subcategory
    } = toy;
    const ratingValue = parseFloat(rating);
    console.log(toy);
    setTitle(`${name}`);

    return (
        <section className="my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-extrabold">{name}</h2>
                    <p className="text-2xl font-bold">${price}</p>
                    <p className="text-xl font-semibold">SellerName: {SellerName}</p>
                    <p className="text-xl font-semibold">SellerEmail: {SellerEmail}</p>
                    <p className="text-xl font-semibold">Subcategory: {subcategory}</p>
                    <p className="text-xl font-semibold">Quantity: {quantity}</p>
                    <p className="flex items-center gap-1 text-xl font-semibold">
                        <span>
                            Rating:
                        </span>
                        <ReactStarsRating
                            value={ratingValue}
                            isEdit={false}
                            isHalf={true}
                            size={20}
                            primaryColor={"gold"}
                            className="flex bg-red"
                        />
                    </p>

                    <p className="text-xl font-semibold">Description: {description}</p>
                    <div className="card-actions justify-end">
                        <Link to={'/allToy'}>
                            <button className="btn btn-accent">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;
