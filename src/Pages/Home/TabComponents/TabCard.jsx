import ReactStarsRating from "react-awesome-stars-rating";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TabCard = ({toy}) => {
    const {
        picture,
        name,
        price,
        rating,
        _id,
    } = toy;
    const ratingValue = parseFloat(rating);

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-in-out",
        });
        AOS.refresh();
    }, []);
    return (
        <div
            className="block rounded-lg p-6 bg-slate-100  shadow-indigo-100 shadow-md"
            data-aos="zoom-in"
        >
            <img
                alt="Home"
                src={picture}
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
                <dl>
                    <div>
                        <p className="text-xl text-gray-500">${price}</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">{name}</p>
                    </div>
                </dl>

                <div className="mt-2 flex items-center justify-between gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <ReactStarsRating
                            value={ratingValue}
                            isEdit={false}
                            isHalf={true}
                            size={20}
                            primaryColor={"gold"}
                            className="flex bg-red"
                        />

                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500 text-lg">{rating}</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/toy/${_id}`}>
                            <button className="btn btn-accent">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard;