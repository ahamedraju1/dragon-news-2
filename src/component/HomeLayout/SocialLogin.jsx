import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn, githubSignIn} = use(AuthContext);

    const handleGoogleSignIn = ()=>{
         googleSignIn()
         .then(result=>{
            console.log(result.user)
         })
         .catch(error=>{
            console.log(error)
         })

    }

    const handleGithubIn = ()=>{
          githubSignIn()
          .then(result=>{
            console.log(result.user)
          })
          .catch(error=>{
            console.log(error)
          })
    }

    return (
        <div>
            <h2 className='font-bold'>Login with</h2>
            <div className='space-y-5'>

                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary w-full'> <FcGoogle size={24}/> Login with Google</button>

                <button onClick={handleGithubIn} className='btn btn-outline btn-primary w-full'> <FaGithub size={24} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;