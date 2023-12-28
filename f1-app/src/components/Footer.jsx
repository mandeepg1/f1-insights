import React from 'react'
import {FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full py-3 bg-[#E63946] text-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div>
                <p className='text-lg pt-1'>Sign up to our newsletter and stay up to date.</p>
                <div className='my-1'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-[360px] rounded-md text-black px-4' type="email" placeholder='Enter Email' />
                        <button className='bg-white w-[150px] rounded-md font-medium ml-4 my-3 mx-auto px-6 py-3 text-[#E63946]'>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-end space-x-4 md:w-[75%] my-4 ml-48'>
                <p className='font-thin text-white text-center'>Follow Us!</p>
                <FaFacebookSquare size={30} />
                <FaGithubSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
            </div>
        </div>
    </div>
  )
}

export default Footer