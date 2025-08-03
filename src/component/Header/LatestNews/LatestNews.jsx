import React, { use } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../Provider/AuthProvider';

const LatestNews = () => {
    const { latestTitle, news} = use(AuthContext);

    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-white bg-secondary py-3 px-2 font-medium'>Latest</p>
            <Marquee pauseOnHover={true} speed={60}>
                {/* <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain as...</p> */}
               <h2 className='font-semibold'> { latestTitle }</h2>
            </Marquee>
        </div>
    );
};

export default LatestNews;