import React from 'react'

const About = () => {
  return (
    <div className='bg-red-500 max-w-[1240px] py-14 mt-6 h-[600px] px-4 mx-auto grid lg:grid-cols-2'>
        <div className='p-4 pr-[100px]'>
            <img src="/images/about-pic.jpg" alt="/" />
        </div>
        <div className='flex flex-col h-full justify-center '>
            <h3 className='text-5xl md:text-6xl text-center items-center justify-center font-bold'>Welcome to Formula One Insights</h3>
            <div className='flex justify-center items-center '>
              the words
            </div>
        </div>
    </div>
  )
}

export default About