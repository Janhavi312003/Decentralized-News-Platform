import React, { useEffect, useState } from 'react'
import NewsCards from './NewsCards';
import Pagination from './Pagination';
import CategoreSelections from './CategoreSelections';
import SideBar from './SideBar';

const NewPage = () => {

    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12 //news per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    

    useEffect(() => {
        async function fetchNews() {
            let url = `=${currentPage}&limit=${selectedCategory}`;

            //filtered by category 
            if(selectedCategory){
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setNews(data);
        }

        fetchNews();
    }, [currentPage, pageSize, selectedCategory])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }


  return (
    <div>
     {/* category section*/}
     <div><CategoreSelections onSelectCategory={ handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
     </div>

     {/* newsCards section*/}
     <div className='flex flex-col lg:flex-row gap-12'>
        {/* news Cards components*/}
        <NewsCards news={news} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

       {/* sidebar section*/}
     <div className='lg:w-1/4'>
        <SideBar/>
     </div>

     </div>

     {/* pagination section*/}
     <div>
        <Pagination onPageChange={ handlePageChange} currentPage={currentPage} news={news} pageSize={pageSize}/>
     </div>
    </div>
  )
}

export default NewPage
