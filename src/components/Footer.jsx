import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-yellow-50 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.indus1} className='h-auto w-32 mb-0' alt="" />
            <p className='text-gray-900 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae laboriosam reiciendis eaque.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-black text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-900'>
                <a href="#Header" className='hover:text-black'>Home</a>
                <a href="#About" className='hover:text-black'>About</a>
                <a href="#Contact" className='hover:text-black'>Contact Us</a>
                <a href="#" className='hover:text-black'>Privacy Policy </a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-black text-lg font-bold mb-4'>Subscribe to Our Newsletter</h3>
        <p className='text-gray-900 mb-3 max-w-80'>The latest news, articles, and resources,send to your inbox weekly.</p>
        <div className='flex gap-2'>
            <input type="email" placeholder='Enter Your Email' className='p-1 rounded bg-gray-800 text-white border border-gray-900 focus:outline-none w-full md
            md:w-auto' />
            <button className='py-1 px-4 rounded bg-blue-700 text-white'>Subscribe</button>
        </div>
        </div>
      </div>
      <div className='border-t text-xl font-bold  border-gray-900 py-4 mt-10 text-center text-black'>
        Developed By: Alamgeer Ghanghro
      </div>
    </div>
  )
}

export default Footer
