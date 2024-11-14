import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Publish from './Pages/Publish'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
