import React from 'react'
import News from '../Pages/News';

const Pagination = ({ onPageChange, currentPage, pageSize, news }) => {
    // Ensure news is an array before calculating total pages
    const totalPage = Array.isArray(news) ? Math.ceil(news.length / pageSize) : 0;
   // console.log(totalPage);
   const renderPaginationLinks = () =>{
    return Array.from({length: totalPage}, (_, i) => i+1).map((pageNumber) => (
        <li className={pageNumber === currentPage ? "activerPagination" : ""} key={pageNumber}>
            <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
        </li>
    ))
   }

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={() => onPageChange(currentPage - 1)}disabled={currentPage === 1}>Privious</button>
      </li>
      <div className='flex gap-1'>{renderPaginationLinks()}</div>
      <li>
        <button  onClick={() => onPageChange(currentPage + 1)}disabled={currentPage === totalPage}>Next</button>
      </li>
    </ul>
  )
}

export default Pagination
