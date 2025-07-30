import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);

    const handleRegister =( e )=>{
        e.preventDefault();
        // const name = e.target.name.value;
        // const email= e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name, email, password);
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);


        // create user
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            // console.log(result.user)
            setUser(user);
        })
        .catch(error=>{
            console.log(error)
        })
        // createUser(email, password)
        // .then(result=>{
        //     console.log(result.user)
        // })
        // .then(error=>{
        //     console.log(error)
        // })
    };

    return (
        <div>

            <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-10">
                <h1 className="text-3xl text-center mt-10 font-semibold mb-8">Please Register </h1>
                <p className='border-t border-t-base-200'></p>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Your Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Enter Your URL" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Enter Your Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Enter your Password" />

                        <button type='submit' className="btn btn-primary mt-4">Register</button>
                    </form>
                    <p className='text-accent'>
                        <Link to='/auth/login'>
                        Already have an account?
                        <span className='text-secondary underline'> Login</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;