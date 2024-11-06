import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Publish from './Pages/Publish'

function App() {
  

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
