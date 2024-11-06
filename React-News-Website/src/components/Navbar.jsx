import React, { useState } from 'react'
import { FaBars, FaLinkedin, FaXmark } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }
     // navItems
    const navItems = [
        {path: "/",link: "Home"},
        {path: "/publish",link: "Publish"},
        {path: "/profile",link: "Profile"},
        {path: "/about",link: "About"},
        {path: "/contact",link: "Contact"}
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="" className='text-xl font-bold text-white'>News<span className='text-purple-600'>KT</span></a>
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-white' key={path}>
                        <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                    </li>) 
                }
            </ul>

            <div className='text-white lg:flex gap-4 item-center hidden'>
                <a href="/" className='hover:text-blue-600'><FaLinkedin /></a>
                <a href="/" className='hover:text-green-500'><FaWhatsappSquare /></a>
                <a href="/" className='hover:text-pink-400'><FaInstagramSquare /></a>
                <a href="/" className='hover:text-blue-600'><FaFacebook /></a>
                <a href="/" className='hover:text-yellow-500'><FaEnvelope /></a>
                <a href="/" className='hover:text-blue-500'><FaTwitter /></a>
                <button className='bg-blue-800 text-white px-6 py-2 font-medium rounded-md hover:bg-white hover:text-blue-800'>Log In</button>
            </div>

            <div className='md:hidden'>
                <button onClick={toggleMenu}className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                    </button>
            </div>

            <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                    navItems.map(({path, link}) => <li className='text-black' key={path}>
                       <NavLink to={path} activeClassName="active" onClick={toggleMenu}>{link}</NavLink>
                    </li>) 
                }
            </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar