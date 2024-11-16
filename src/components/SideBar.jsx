import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SideBar = () => {
    const [popularNews, setPopularNews] = useState([]);

    useEffect(() => {
        // Add a valid API endpoint or data-fetching logic here
        fetch("https://api.example.com/news")
            .then((res) => res.json())
            .then((data) => setPopularNews(data.slice(0, 15)))
            .catch((err) => console.error("Error fetching popular news:", err));
    }, []);

    return (
        <div>
            <h3 className="text-2xl font-semibold px-4">LATEST NEWS</h3>
            <div>
                {popularNews.slice(0, 5).map((news) => (
                    <div
                        key={news.id}
                        className="my-5 border-b-2 border-spacing-2 px-4"
                    >
                        <h4 className="font-medium mb-2">{news.title}</h4>
                        <Link
                            to={`/news/${news.id}`}
                            className="text-base pb-2 hover:text-purple-600 inline-flex items-center"
                        >
                            Read more
                            <FaArrowRight className="mt-1 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
            <div>
            <h3 className="text-2xl font-semibold px-4 mt-20">POPULAR NEWS</h3>
            <div>
                {popularNews.slice(6, 10).map((news) => (
                    <div
                        key={news.id}
                        className="my-5 border-b-2 border-spacing-2 px-4"
                    >
                        <h4 className="font-medium mb-2">{news.title}</h4>
                        <Link
                            to={`/news/${news.id}`}
                            className="text-base pb-2 hover:text-purple-600 inline-flex items-center"
                        >
                            Read more
                            <FaArrowRight className="mt-1 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default SideBar;
