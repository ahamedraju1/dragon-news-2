import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { signInUser, setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    console.log("locations", location);

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // Login User
        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user);
                navigate(`${location.state? location.state: '/'}`);
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                setError(errorCode);
            })
    }


    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-24">
            <h1 className="text-3xl text-center mt-10 font-semibold mb-8">Login Your Account</h1>
            <p className='border-t border-t-base-200'></p>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Enter Your Email" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Enter your Password" required />
                    <div><a className="link link-hover text-primary">Forgot password?</a></div>

                    {error && <p className='text-secondary text-sm'>{error}</p> }

                    <button className="btn btn-neutral mt-4">Login</button>
                    <div className='mt-5'>
                        <p className='text-center text-primary'>Don't have an account?
                            <Link to='/auth/register'>
                                <span className='text-secondary underline'> Register</span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;