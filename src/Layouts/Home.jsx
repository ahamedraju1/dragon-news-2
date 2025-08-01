import React from 'react';
import Header from '../component/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../component/Header/LatestNews/LatestNews';
import Navbar from '../component/Navbar/Navbar';
import LeftAside from '../component/HomeLayout/LeftAside';
import RightAside from '../component/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const Home = () => {
    const{ state } = useNavigation();

    return (
        <div>

            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3b grid grid-cols-12 gap-3'>

                <aside className='grid col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main-content grid col-span-6">
                  {state=="loading"? <Loading/> :
                   <Outlet></Outlet> }  
                </section>
                <aside className='grid col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>

            </main>

        </div>
    );
};

export default Home;