import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummryCard from '../../Shared/NewsSummryCard/NewsSummryCard';
import './Home.css'

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div className='homeCom'>
            <div>
                {
                    allNews.map(news => <NewsSummryCard key={news._id} news={news}></NewsSummryCard>)
                }
            </div>
        </div>
    );
};

export default Home;