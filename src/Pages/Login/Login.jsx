import { useContext, useState } from 'react';
import Lottie from 'react-lottie';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import animationData   from "../../assets/lottie/register.json";
import setTitle from '../../Title/setTitle';

const Login = () => {
    setTitle('Login');
    const { googleSignIn, setUser, loginWithEmail } = useContext(AuthContext);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        setStatus(null);
        setError(null);
        googleSignIn()
            .then((result) => {
                setError(null);
                setStatus("Sign In Successfull");
                setUser(result.user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const hangleEmailLogin = (event) => {
        setStatus(null);
        setError(null);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
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
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center ">
                    <div className="text-center lg:text-left">
                        <div>
                            <h1 className="text-5xl font-bold text-cyan-600">
                                Login now!
                            </h1>
                            <Lottie options={defaultOptions} height={600} width={600} />
                        </div>
                    </div>
                    <Form
                        onSubmit={hangleEmailLogin}
                        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 "
                    >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>
                            
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
                            <div className="form-control mt-2">
                                <button
                                    className="btn btn-accent text-white hover:bg-red-600"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <button
                                    className="btn  bg-sky-500 mt-4 hover:bg-red-600 border-none"
                                    onClick={handleGoogleSignIn}
                                >
                                    Login with Google
                                </button>
                            </div>
                            <p className="text-md text-center">
                               
                                New here? Please{" "}
                                <Link
                                    to={"/register"}
                                    className="text-cyan-500 font-semibold"
                                >
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;