
const Reviews = () => {
    return (
        <div className="mx-5 md:mx-28 my-32 ">
            <section className="text-neutral-700 dark:text-neutral-300">
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                    <p className="text-center text-4xl md:text-6xl font-bold text-cyan-600 my-5">
                        Customer's Feedback
                    </p>
                    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                        Customer feedback is of utmost importance to Kidoz, as it plays a vital role in shaping our products and services. At Kidoz, we highly value the opinions and experiences shared by our customers.{" "}
                    </p>
                </div>

                {/* <!--First Testimonial--> */}
                <div className="grid gap-10 text-center md:grid-cols-3">
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 hover:scale-110">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d9378]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://cdn.shopify.com/s/files/1/0163/6622/files/Sitting_with_legs_flexed_web.jpg?v=1669845513" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Sakib Al Hasan
                                </h4>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    I recently discovered Kidoz, and I must say, it's a fantastic toy shop! They have a wide range of toys for all ages, and their collection is always up-to-date with the latest trends. The toys are of excellent quality, and the prices are reasonable. It's a one-stop shop for all your toy needs. Kidoz has definitely become our family's favorite toy store!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Second Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 hover:scale-110">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#7aa883] hover:bg-[#5b7d61]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Mashrafe Mortaza
                                </h4>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    I can't say enough good things about Kidoz! As a parent, safety is my top priority, and Kidoz ensures that all their toys meet the highest safety standards. I feel confident buying toys from them, knowing that they prioritize the well-being of children. Their customer service is outstanding, and they go above and beyond to assist and guide customers. Kidoz is the best toy shop in town!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!--Third Testimonial--> */}
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 hover:scale-110">
                            <div className="h-28 overflow-hidden rounded-t-lg bg-[#985b5b]"></div>
                            <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img src="https://cdn.shopify.com/s/files/1/0163/6622/files/One_leg_up_web.jpg?v=1669845567" />
                            </div>
                            <div className="p-6">
                                <h4 className="mb-4 text-2xl font-semibold">
                                    Tamim Iqbal
                                </h4>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <hr />
                                <p className="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Kidoz is simply amazing! I recently purchased a toy for my nephew's birthday, and it was a hit! The staff was incredibly knowledgeable and helped me choose the perfect gift. The toy was of excellent quality and provided hours of entertainment. Kidoz is definitely the place to go when you want to put a smile on a child's face!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;