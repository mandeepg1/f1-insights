import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-1 border-b-2 border-gray-600'>
      <img className='w-[85px] h-[85px]' src='/images/custom-f1-logo (1).png' alt='/' />
      <h1 className='w-full text-3xl font-thin text-[#000300] pl-4'>FORMULA ONE - INSIGHTS</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-4'>
          <Link to='/about'>About</Link>
        </li>
        <li className='p-4'>
          <Link to='/teams'>Teams</Link>
        </li>
        <li className='p-4'>
          <Link to='/drivers'>Drivers</Link>
        </li>
        <li className='p-4'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
        {/* Mobile View Stuff*/}
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} /> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FAF9F6] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-thin text-[#000300] m-4'>ALL ABOUT F1</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Teams</li>
                <li className='p-4 border-b border-gray-600'>Drivers</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar