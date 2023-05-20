// import { fromJSON } from 'postcss';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.png'
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { googleSignIn, setUser, loginWithEmail } = useContext(AuthContext);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleLogin = event => {
        setStatus(null);
        setError(null);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const handleGoogleSignIn = () => {
            setStatus(null);
            setError(null);
            signInWithPopup(auth, provider)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate(from, { replace: true })
                })
                .catch(error => {
                    console.log(error);
                })
        };

        loginWithEmail(email, password)
            .then((result) => {
                setError(null);
                setStatus("Sign In Successfull");
                setUser(result.user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
        form.reset();

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
                        <Form onSubmit={handleLogin}>
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
                                <input type="submit" className="btn btn-accent font-bold" value="Login" />
                                <button
                                    className="btn  bg-red-500 mt-4 hover:bg-red-600 border-none"
                                    onClick={handleGoogleSignIn}
                                >
                                    Login with Google
                                </button>
                            </div>
                        </Form>
                        <p className='my-4 text-center'>New to Kidoz? <Link className='font-bold text-cyan-500' to='/register'>SignUp</Link></p>
                        <div className="text-center">
                            {status ? (
                                <p className="text-teal-600">{status}</p>
                            ) : (
                                <></>
                            )}
                            {error ? (
                                <p className="text-red-500">{error}</p>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;