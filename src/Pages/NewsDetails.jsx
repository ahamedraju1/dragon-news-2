import React, { useEffect, useState } from 'react';
import Header from '../component/Header/Header';
import RightAside from '../component/HomeLayout/RightAside';
import NewsDetailsCard from '../component/NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    // console.log(data, id, news);

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        // console.log("Found news", newsDetails);

        setNews(newsDetails);
    }, [data, id]);


    return (
        <div>
            <h2>News Details page </h2>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-10 grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold gap-3'>Dragon News</h2>
                    {/* {news?.title ? (
                        <NewsDetailsCard news={news} />
                    ) : (
                        <p>Loading news details...</p>
                    )} */}

                    <NewsDetailsCard news={news} />
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;