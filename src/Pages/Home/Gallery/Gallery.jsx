import img1 from '../../../assets/gallery/gallery-1.png';
import img2 from '../../../assets/gallery/gallery-2.png';
import img3 from '../../../assets/gallery/gallery-3.png';
import img4 from '../../../assets/gallery/gallery-4.png';
import img5 from '../../../assets/gallery/gallery-5.png';
import img6 from '../../../assets/gallery/gallery-6.png';

const Gallery = () => {
    return (
        <div className=''>
            <h3 className='text-center text-4xl md:text-6xl font-bold text-cyan-600 my-7'>Gallery</h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 bg-sky-100">
                {/* <div className='flex'> */}
                    <div>
                        <img src={img1} className='max-w-full m-3 rounded hover:scale-90' alt="" />
                    </div>
                    <div>
                        <img src={img2} className='max-w-full m-3 rounded hover:scale-90' alt="" />
                    </div>
                    <div>
                        <img src={img3} className='max-w-full m-3 rounded hover:scale-90' alt="" />
                    </div>
                    <div>
                        <img src={img4} className='max-w-full m-3 rounded hover:scale-90' alt="" />
                    </div>
                    <div>
                        <img src={img5} className='max-w-full m-3 rounded hover:scale-90' alt="" />
                    </div>
                    <div>
                        <img src={img6} className='max-w-full m-3 rounded hover:scale-90' alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Gallery;