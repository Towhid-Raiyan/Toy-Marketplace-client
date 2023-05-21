import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import TimeCount from "../TimeCount/TimeCount";

const Offers = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="bg-gradient-to-r from-sky-700 to-sky-400 border-0 my-5 rounded">
            <div className="flex flex-col items-center justify-center">
                <h1
                    className="text-white text-4xl md:text-6xl font-bold mt-24  "
                    data-aos="fade-right"
                >
                    EID FLASH SALE
                </h1>
                <p
                    className="text-white text-2xl font-semibold mt-2"
                    data-aos="fade-left"
                >
                    20% Discount on all products
                </p>

                <button className="btn btn-accent text-black mb-16" >Purchase</button>
            </div>
        </div>
    );
};

export default Offers;