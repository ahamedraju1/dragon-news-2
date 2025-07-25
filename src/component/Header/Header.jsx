import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {

    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-10'>
           <img src={logo} alt="" /> 
           <p className='text-accent'>Journalism Without Fear or Favour</p>
           <p className='text-accent'>
             <span className='text-primary font-semibold'> {format (new Date(), "EEEE")}</span>, {" "}
             {format (new Date(), "MMMM dd, yyyy")}
           </p>
        </div>
    );
};

export default Header;