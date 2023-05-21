import img1 from '../../../assets/gallery/gallery-1.png';
import img2 from '../../../assets/gallery/gallery-2.png';
import img3 from '../../../assets/gallery/gallery-3.png';
import img4 from '../../../assets/gallery/gallery-4.png';
import img5 from '../../../assets/gallery/gallery-5.png';
import img6 from '../../../assets/gallery/gallery-6.png';

const Gallery = () => {
    return (
        <div className='bg-gray-100'>
            <h3 className='text-center text-4xl md:text-6xl font-bold text-cyan-600 my-5'>Gallery</h3>
            <div className="w-full ">
                <div className='flex'>
                    <figure className='flex-1 w-1/3 m-4'><img src={img1} alt="car!" className='rounded-lg'/></figure>
                    <figure className='flex-1 w-1/3 m-4'><img src={img2} alt="car!" className='rounded-lg'/></figure>
                    <figure className='flex-1 w-1/3 m-4'><img src={img3} alt="car!" className='rounded-lg'/></figure>
                </div>
                <div className='flex'>
                    <figure className='flex-1 w-1/3 m-4'><img src={img4} alt="car!" className='rounded-lg'/></figure>
                    <figure className='flex-1 w-1/3 m-4'><img src={img5} alt="car!" className='rounded-lg'/></figure>
                    <figure className='flex-1 w-1/3 m-4'><img src={img6} alt="car!" className='rounded-lg'/></figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;