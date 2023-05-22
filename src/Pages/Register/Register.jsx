import { useContext, useState } from 'react';
import Lottie from 'react-lottie';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import animationData   from "../../assets/lottie/register.json";


const Register = () => {
    const { createUser, updateInfo, setUser, logOut } = useContext(AuthContext);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const handleRegister = event => {
        setStatus(null);
        setError(null);
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            setError("Email or password Can't be empty");
            return;
        }

        if (password.length < 6) {
            setError("Password must be more then 6 character");
            return;
        }

        createUser(email, password)
            .then((result) => {
                setUser(result.user);
                setStatus("Account Created!! Please Login");
                updateInfo(name, photo)
                    .then((result) => {
                        setStatus("Account Created!! Please Login");
                        Swal.fire(
                            "Registered Success",
                            "Now Please Login To get Access",
                            "success"
                        );
                        logOut();
                        Navigate('/login')
                    })
                    .catch((error) => {
                        setError(error.message);
                    });
            })
            .catch((error) => {
                if (
                    error.message ==
                    "Firebase: Error (auth/email-already-in-use)."
                ) {
                    setError("Email Already In Use!!");
                } else {
                    setError(error.message);
                }
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-12 w-1/2">
                    <Lottie options={defaultOptions} height={600} width={600} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-accent font-bold" value="Register" />

                            </div>
                        </form>
                        <p className='my-4 text-center '>Already have an account? <Link className='font-bold text-cyan-500' to='/login'>Login</Link></p>
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

export default Register;