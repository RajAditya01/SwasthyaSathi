import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'; // Make sure the path is correct

const Navbar = () => {
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 bg-white text-black'>
            {/* Logo */}
            <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
            
            {/* Navigation Links */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                {/* Home Link */}
                <li className='py-1'>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}
                    >
                        HOME
                        <hr className='border-none h-0.5 bg-primary w-3/4 m-auto hidden group-hover:block' />
                    </NavLink>
                </li>

                {/* Doctors Link */}
                <li className='py-1'>
                    <NavLink 
                        to="/doctors" 
                        className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}
                    >
                        ALL DOCTORS
                        <hr className='border-none h-0.5 bg-primary w-3/4 m-auto hidden group-hover:block' />
                    </NavLink>
                </li>

                {/* About Link */}
                <li className='py-1'>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}
                    >
                        ABOUT
                        <hr className='border-none h-0.5 bg-primary w-3/4 m-auto hidden group-hover:block' />
                    </NavLink>
                </li>

                {/* Contact Link */}
                <li className='py-1'>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}
                    >
                        CONTACT
                        <hr className='border-none h-0.5 bg-primary w-3/4 m-auto hidden group-hover:block' />
                    </NavLink>
                </li>
            </ul>

            {/* Create Account Button */}
            <div className='flex items-center space-x-4'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                    Create account
                </button>
            </div>
        </div>
    );
}

export default Navbar;
