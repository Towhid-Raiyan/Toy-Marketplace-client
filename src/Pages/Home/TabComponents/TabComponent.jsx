import { useEffect, useState } from "react";
import TabCard from "./TabCard";

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('car');
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-zeta.vercel.app/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [activeTab])

    const handleTabClick = (tabname) => {
        console.log(tabname);
        setActiveTab(tabname);
    };

    return (
        <div className="container mx-auto  md:mt-10">
            <p className=" text-center text-4xl md:text-6xl font-bold text-cyan-600 my-5">
                Purchase by category
            </p>
            <div className="flex justify-center mt-16">
                <div className="flex ">
                    <div
                        className={`py-4 px-6 md:py-4 md:px-16 cursor-pointer ${activeTab === 'car'
                                ? "bg-teal-500 text-white font-semibold  "
                                : "bg-gray-200"
                            }`}
                        onClick={() => handleTabClick('car')}
                    >
                        Car
                    </div>
                    <div
                        className={`py-4 px-6 md:py-4 md:px-16  cursor-pointer ${activeTab === 'bike'
                                ? "bg-teal-500 text-white font-semibold  "
                                : "bg-gray-200"
                            }`}
                        onClick={() => handleTabClick('bike')}
                    >
                        Bike
                    </div>
                    <div
                        className={`py-4 px-6 md:py-4 md:px-16 cursor-pointer ${activeTab === 'truck'
                                ? "bg-teal-500 text-white font-semibold  "
                                : "bg-gray-200"
                            }`}
                        onClick={() => handleTabClick('truck')}
                    >
                        Truck
                    </div>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-28 md:ms-0 ms-3 me-3 md:me-0">
                {
                    // toys.map(toy => <ProductCard key={toy._id} toy={toy}/>)
                    toys.map(toy => <TabCard key={toy._id} toy={toy}></TabCard>)
                }
            </div>
        </div>
    );
};

export default TabComponent;
