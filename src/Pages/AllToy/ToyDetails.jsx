import { useLoaderData } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
const ToyDetails = () => {
    const allToy = useLoaderData();
    const {
        PictureUrl,
        ToyName,
        SellerName,
        SellerEmail,
        Price,
        Quantity,
        Rating,
        Description,
    } = allToy;
    const ratingValue = parseFloat(Rating);
    console.log(allToy);
    return (
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt={ToyName}
                            src={PictureUrl}
                            className="aspect-square w-full rounded-xl object-cover"
                        />
                    </div>

                    <div className="sticky top-0">
                        <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                            Exclusive
                        </strong>

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl">
                                    {ToyName}
                                </h1>

                                <p className="text-lg font-bold">
                                    Price: ${Price}
                                </p>
                                <p className="text-lg   ">
                                    Seller: {SellerName}
                                </p>
                                <p className="text-lg   ">
                                    Seller Mail: {SellerEmail}
                                </p>
                                <p className="text-lg   ">
                                    Quantity: {Quantity}
                                </p>
                                <div className="flex items-center gap-1">
                                    <p className="text-gray-500 text-lg">
                                        Rating:
                                    </p>
                                    <ReactStarsRating
                                        value={ratingValue}
                                        isEdit={false}
                                        isHalf={true}
                                        size={20}
                                        primaryColor={"gold"}
                                        className="flex bg-red"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p>
                                    {Description}
                                </p>
                            </div>
                        </div>

                        <form className="mt-8">
                            <div className="mt-8 flex gap-4"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToyDetails;
