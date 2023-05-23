
const OurReach = () => {
    return (
        <div className="text-center my-16">
            <p className="text-center text-4xl md:text-6xl font-bold text-cyan-600 my-8">
                Our Reach
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-blue-200 py-5 rounded hover:scale-90 hover:text-emerald-500">
                    <h2 className=" text-3xl font-semibold">Likes</h2>
                    <h4 className="font-bold text-4xl py-2">12.6K</h4>
                    <p className="m-0 text-green-700">15% more than last month</p>
                </div>
                <div className="bg-indigo-200 py-5 rounded hover:scale-90 hover:text-emerald-500">
                    <h2 className=" text-3xl font-semibold">Page Views</h2>
                    <h4 className="font-bold text-4xl py-2">22.3k</h4>
                    <p className="m-0 text-green-700">21% more than last month</p>
                </div>
                <div className="bg-violet-200 py-5 rounded hover:scale-90 hover:text-emerald-500">
                    <h2 className=" text-3xl font-semibold">Delivery Done</h2>
                    <h4 className="font-bold text-4xl py-2">86%</h4>
                    <p className="m-0 text-red-600">31 tasks remaining</p>
                </div>

                {/* <div className=" bg-blue-200 hover:scale-90 hover:text-emerald-500">
                    <div className="p-4 md:p-10">
                        <h2 className=" text-2xl font-semibold m-0">Total Likes</h2>
                        <h4 className=" m-0">12.6K</h4>
                        <p className="m-0 text-green-700">15% more than last month</p>
                    </div>
                </div>

                <div className=" bg-indigo-200 hover:scale-90 hover:text-emerald-500">
                    <div className="p-4 md:p-10">
                        <h2 className="text-2xl font-semibold">Page Views</h2>
                        <h4 className="">22.3k</h4>
                        <p className=" text-green-700">21% more than last month</p>
                    </div>
                </div>

                <div className=" bg-violet-200 hover:scale-90 hover:text-emerald-500">

                    <div className="p-4 md:p-10">
                        <h2 className=" text-2xl font-semibold">Delivery Done</h2>
                        <h4 className="">86%</h4>
                        <p className=" text-red-600">31 tasks remaining</p>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default OurReach;