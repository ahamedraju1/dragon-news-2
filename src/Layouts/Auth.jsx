import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>

            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
            
        </div>

    );
};

export default Auth;