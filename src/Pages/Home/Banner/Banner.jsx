import { Link } from 'react-router-dom';
import pic1 from '../../../assets/Carosel/caro1.png';
import pic2 from '../../../assets/Carosel/caro2.png';


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={pic1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/2 ml-14'>
                        <h2 className='text-6xl font-bold'>Lucrative Toys For Kids</h2>
                        <p>Our shop is very popular for vehicle type toys in the country. Providing quality products is our only goal. </p>
                        <div>
                            <Link to={'/allToy'}>
                                <button className="btn btn-accent">View Toys</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={pic2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 w-1/2 ml-14'>
                        <h2 className='text-6xl font-bold'>Lucrative Toys For Kids</h2>
                        <p>Our shop is very popular for vehicle type toys in the country. Providing quality products is our only goal. </p>
                        <div>
                            <button className="btn btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-wide font-bold text-white">View Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;