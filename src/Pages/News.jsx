import React from 'react'
import NewsPage from '../components/NewPage'

const News = () => {
  return (
    <div>
        <div className='py-40 bg-black text-center text-white'> 
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>News Page</h2>
        </div>
        {/*All News Container*/}
        <div>
          <NewsPage/>
        </div>
    </div>
  )
}

export default News;
