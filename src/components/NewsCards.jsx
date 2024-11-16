import React from 'react';
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'

const NewsCards = ({ news, currentPage, selectedCategory, pageSize }) => {
    // Filter and paginate the news in one step
    const filteredNews = Array.isArray(news) 
        ? news
            .filter((newsItem) => !selectedCategory || newsItem.category === selectedCategory) // Filter by category
            .slice((currentPage - 1) * pageSize, currentPage * pageSize) // Paginate
        : [];

    console.log(filteredNews); // Debugging to confirm the type of news after filtering and slicing

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'> 
            {filteredNews.map((newsItem) => (
                <Link 
                    key={newsItem.id || Math.random()} 
                    to={`/news/${newsItem.id || '#'}`} 
                    className='p-5 shadow-lg rounded cursor-pointer'
                >
                    <div>
                        <img 
                            src={newsItem.image || 'https://via.placeholder.com/150'} 
                            alt={`Image for ${newsItem.title || 'Untitled News'}`} 
                            className='w-full' 
                        />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer '>
                        {newsItem.title || "Untitled News"}
                    </h3>
                    <p className='mb-2 text-gray-600'>
                        <FaUser className='inline-flex items-center mr-2'/>
                        {newsItem.author || "Unknown Author"}
                    </p>
                    <p className='text-sm text-gray-500'>
                        Published: {newsItem.published_date || "Unknown Date"}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default NewsCards;
