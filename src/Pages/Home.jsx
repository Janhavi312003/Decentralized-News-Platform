import React from 'react'
import Banner from '../components/Banner'
import NewPage from '../components/NewPage'


const Home = () => {
  return (
    <div>
      <Banner/>

       <div className='max-w-7xl mx-auto'>
        <NewPage/>
       </div>
    </div>
  )
}

export default Home
