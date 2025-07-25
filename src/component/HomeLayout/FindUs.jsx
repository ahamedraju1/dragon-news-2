import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className=''>
            <h2 className='font-semibold text-primary mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn join-item justify-start
                    bg-base-100"> <FaFacebook></FaFacebook> Facebook</button>

                    <button className="btn join-item justify-start
                    bg-base-100"> <FaTwitter></FaTwitter> Twitter</button>

                    <button className="btn join-item justify-start
                    bg-base-100"> <FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;