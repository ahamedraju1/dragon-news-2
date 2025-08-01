import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    if (!news || !news.title) {
        return <p>Loading news or no data found...</p>; // or return nothing or a spinner
    }
    // console.log("news", news);

    return (
        <div className='space-y-5'>
         <img className='w-full h-[400px]' src={news.thumbnail_url} alt="" />
         <h2 className="text-2xl font-bold">{news.title}</h2>
         <p className=''>{news.details}</p>
          <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>
           Back to category
          </Link>
        </div>
    );
};

export default NewsDetailsCard;