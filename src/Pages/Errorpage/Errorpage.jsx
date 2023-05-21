import { Link, useRouteError } from 'react-router-dom';
import errorpage from '../../assets/404.png';
const Errorpage = () => {
    const error = useRouteError();
    const status = useRouteError();
    return (
        <section className="">
            <div className="flex justify-center items-center">
                <div className="">
                    <h2 className="text-2xl font-bold my-5 py-5">
                        <img src={errorpage} alt="" />
                    </h2>
                    <div className='my-3 pb-5 flex justify-center items-center font-bold text-3xl '>
                        <Link
                            to="/"
                            className=" text-decoration-none  text-cyan-600"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Errorpage;