import React from 'react'
import Typed from 'react-typed'


const Hero = () => {
  return (
    <div className='max-w-[1400px] m-auto p-20 pb-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh] '>
            <img className='row-span-5 object-cover w-full h-full p-2' src='/images/lwh-trophy.jpg' alt='holding trophy pic length' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='/images/f1-car.jpg' alt='f1 car pic' />
            <img className='row-span-2 object-cover w-full h-full p-2' src='/images/road.jpg' alt='road or something' />
            <img className='row-span-1 object-cover w-full h-full p-2' src='/images/finish.jpg' alt='road or something' />
        </div>
        {/*Right Side*/}
        <div className='flex flex-col h-full justify-center '>
            <h3 className='text-5xl md:text-6xl text-center items-center justify-center font-bold'>Welcome to Formula One Insights</h3>
            <div className='flex justify-center items-center '>
                <Typed className='text-2xl py-6 pl-2 font-thin' strings={['HERE YOU CAN FIND INFORMATION ON ALL FORMULA ONE RELATED INFORMATION!!', 'WHERE YOU CAN FIND ALL NEWS RELATED TO FORMULA ONE!!']} typeSpeed={25} backSpeed={25} loop/>
            </div>
        </div>
    </div>
  )
}

export default Hero