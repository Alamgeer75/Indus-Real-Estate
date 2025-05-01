import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/header4.jpg')",}} id='Header'>
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[72px] inline-block max-w-3xl font-semibold shadow-lg shadow-gray-800 pt-20'>Unlock the Door to Your Dream Home</h2>
        <div className='space-x-6 mt-20'>
            <a href="#Projects" className='border border-white px-10 py-3 rounded sm:px-5 '>Projects</a>
            <a href="#Contact" className='bg-blue-500 px-10 py-3 rounded sm:px-5 '>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
