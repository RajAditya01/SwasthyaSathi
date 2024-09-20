import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; 

const Navbar = () => {
    const navigate = useNavigate(); // Place useNavigate here, outside the return
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true); // Assuming you may want to handle auth token later

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
                {
                    token
                    ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={()=>navigate('my-appointement')} className='hover:text-black cursor-pointer'> My Appointments </p>
                                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                    :<button onClick={() => navigate('/login')} className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                    Create account
                </button>
                }
            </div>
        </div>
    );
}

export default Navbar;
