import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    // const {user} =use(AuthContext)
    const { user, signOutUser } = use(AuthContext);
    // console.log(userInfo);
    const { pathname } = useLocation();

    const handleLogout = () => {
        console.log("User trying to Logout ");
        signOutUser()
            .then(() => {
                alert('sign out successful')
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <>
            <div className='flex justify-between py-5 items-center'>
                <div className="left">{user && user.email}</div>

                <div className="nav flex gap-5 text-accent">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                    {pathname !== "/auth/register" && (
                        <NavLink to='/auth/register'>Register</NavLink>
                    )}
                </div>

                <div className='flex gap-5'>
                    <img className='w-10 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="" />

                    {user ?
                        <span onClick={handleLogout} className='btn bg-primary text-white'>Sign Out</span> :
                        <Link to='/auth/login' className='btn bg-primary px-10 text-white'>Login</Link>}
                </div>

            </div>
        </>
    );
};

export default Navbar;