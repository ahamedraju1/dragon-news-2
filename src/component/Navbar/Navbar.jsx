import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'
const Navbar = () => {
    return (
        <>
            <div className='flex justify-between my-5 items-center'>
                <div className="left"></div>
                <div className="nav flex gap-5 text-accent">

                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>

                </div>
                <div className='flex gap-5'>
                    <img src={user} alt="" />
                    <button className='btn bg-primary px-10 text-white'>Login</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;