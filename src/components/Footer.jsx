import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16mmx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div className='grid mb-8 lg:grid-cols-6'>
            <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                <div><p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2'>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>World</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>India</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Health</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Technology</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Polities</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Sports</a>
                    </li>
                </ul>
               </div>
               {/*------*/}
               <div><p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2'>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>World</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>India</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Health</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Technology</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Polities</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Sports</a>
                    </li>
                </ul>
               </div>
               {/*------*/}
               <div><p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2'>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>World</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>India</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Health</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Technology</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Polities</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Sports</a>
                    </li>
                </ul>
               </div>
               {/*------*/}
               <div><p className='font-medium tracking-wide text-gray-300'>Category</p>
                <ul className='mt-2 space-y-2'>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>World</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>India</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Health</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Technology</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Polities</a>
                    </li>
                    <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Sports</a>
                    </li>
                </ul>
               </div>
               

            </div>

            {/*---Subscription---*/}
            <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                <p className='font-medium tracking-wide text-gray-300'>Subscribe for updates</p>
               <form className='mt-4 flex flex-col md:flex-row'>
                   <input type='email' name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none'/>
                  <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 roundedshadow-md hover:bg-orange-500 focus:outline-none border'>
                    Subscribe
                  </button>
               
               </form>
               <p className='mt-4 text-sm text-gray-500'>sdgrthyghulgf gdsdrtfyfdr gfdfyf fxdyrdu hdrdtyf fdrjdtf gdytfyg hdhgfutg</p>
               </div>
        </div>

        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
            <p className=' text-sm text-gray-500'>Copyright © 2024 NewsKT [P] Ltd. All Rights Reserved</p>
            <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-blue-500'><FaTwitter className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-pink-500'><FaInstagram className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-blue-500'><FaFacebook className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-green-500'><FaWhatsapp className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-blue-500'><FaLinkedin className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-yellow-300'><FaEnvelope className='h-6 w-6'/></a>
                </div>
        </div>

       
      </div>
    </div>
  )
}

export default Footer
