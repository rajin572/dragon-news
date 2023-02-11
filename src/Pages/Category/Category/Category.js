import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummryCard from '../../Shared/NewsSummryCard/NewsSummryCard';

const Category = () => {
    const allNews = useLoaderData()
    return (
        <div className='homeCom'>
            <div>
                {
                    allNews.length === 0 ? <h2>No News Here</h2> : 
                    <div>
                    {
                        allNews.map(news => <NewsSummryCard key={news._id} news={news}></NewsSummryCard>)
                    }
                    </div>
                }
            </div>
        </div>
    );
};

export default Category;