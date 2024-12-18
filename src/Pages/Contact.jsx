import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6"

const Contact = () => {
  return (
    <div className='bg-gray-300 dark:bg-gray-900'>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 class="py-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Contact Us
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We’d love to hear from you! Whether you have questions, feedback, or just want to get in touch, here’s how you can reach us.
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div class="bg-yellow-300 dark:bg-gray-800 p-6 rounded-3xl border border-gray-300 dark:border-gray-700 text-left">
                <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
                <p class="mb-4 text-gray-700 dark:text-gray-300"><strong>Email:</strong> <a href="mailto:info@newskt.com" class="text-blue-500 hover:underline">info@NewsKT.com</a></p>
                <p class="mb-4 text-gray-700 dark:text-gray-300"><strong>Phone:</strong> <a href="tel:+1234567890" class="text-blue-500 hover:underline">+123 456 7890</a></p>
                <p class="mb-4 text-gray-700 dark:text-gray-300"><strong>LinkedIn:</strong> <a href="/" class="text-blue-500 hover:underline" target="_blank">NewsKT LinkedIn</a></p>
                <p class="mb-4 text-gray-700 dark:text-gray-300"><strong>Address:</strong> 123 News St, Media City, MC 12345</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0 justify-center'>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-blue-500'><FaTwitter className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-pink-500'><FaInstagram className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-blue-500'><FaFacebook className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-green-500'><FaWhatsapp className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-blue-500'><FaLinkedin className='h-6 w-6'/></a>
                <a href='' className='text-gray-500 transition-all duration-300 hover:text-yellow-300'><FaEnvelope className='h-6 w-6'/></a>
                </div>
                <a href="/" class="inline-flex justify-center items-center py-2 px-4 mt-4 text-base font-medium text-center text-blue-800 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Back to Home
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                
            </div>
        </div>
        </div>
   </div>
  )
}

export default Contact
