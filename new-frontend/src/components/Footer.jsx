import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Your health is our top priority. Easily book appointments with our network of trusted, certified doctors who specialize in a wide range of medical fields. Whether you need a routine check-up or specialized care, our platform connects you with experienced professionals committed to providing quality healthcare.
            </p>
        </div>

        {/* Middle section */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* Right Section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-8076489276</li>
                <li>adityavishal903@gmail.com</li>
            </ul>
        </div>
      </div>

      {/* Copyright text */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 Aditya-Raj - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
