import React from 'react'

const Info = () => {
  return (
    <div className='w-full bg-[#E63946] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4 pb-9 text-white text-center'>What is Formula One?</h1>
                <p className='text-lg font-serif text-white indent-10'>Formula One, often referred to as F1, is a premier international auto racing series featuring high-performance, technologically advanced cars competing in a series of races known as Grand Prix. It represents the pinnacle of motorsport, attracting top racing teams, skilled drivers, and cutting-edge technology, emphasizing speed, skill, and innovation.</p>
            </div>
            <img className='rounded-md mx-auto my-4 w-[500px]' src='/images/nicecar2.jpg' alt='/' />
        </div>
    </div>
  )
}

export default Info