import { Link } from 'react-router-dom';
import img from '../../assets/login.png'

const Login = () => {
const handleLogin = event =>{
    event.preventDefault();


}

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-12 w-1/2">
                    <img src={img} alt="" className='rounded-xl' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-accent" value="Login" />

                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Kidoz? <Link className='font-bold text-cyan-500' to='/register'>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;