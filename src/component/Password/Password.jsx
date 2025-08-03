import React, { use, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router';

const Password = () => {
    const { resetPassword } = use(AuthContext);
    const [email, setEmail] = useState("");
    

    const handleResetPassword = e => {
        e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log("reset password", email, password);

        resetPassword(email)
        .then(()=>{
            console.log("email has to sent", email);
             
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (


        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card-body">
                    <form onSubmit={handleResetPassword} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="label">New Password</label>
                        <input
                            type="password"
                            className="input" placeholder="Password"
                            name='password'
                            required
                        />

                        <div>
                            <p>Try to another way?</p>
                        </div>
                        
                        <Link
                        
                         className='btn btn-secondary'> Submit 
                         </Link>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Password;