import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    LargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const DriverInfo = () => {

    const carouselSettings = {
        responsive: responsive,
        autoPlay: true,
        autoPlaySpeed: 2000,
        infinite: true,
        containerClass: 'carousel-container',
      };

  return (
    
    <Carousel responsive={responsive} {...carouselSettings} className='bg-transparent transform delay-300 ease-in-out max-w-[1240px]'>
        <div className='bg-[#FAF9F6] p-4 rounded-md flex items-center justify-center mt-2 m-4'>
        <img src="/images/lewis-hamilton.png" alt="" className='w-[200px] h-[200px] mb-4 rounded-full border border-black bg-[#00A19C]' />
          <div className='flex flex-col ml-24'>
            <h3 className='mb-4 text-2xl font-bold font'>Lewis Hamilton</h3>
              <p className='font-thin text-[#00A19C]'><strong className='text-black'>Age: </strong>38</p>
              <p className='font-thin text-[#00A19C]'><strong className='text-black'>Team: </strong>Mercedes AMG Motorsport</p>
              <p className='font-thin text-[#00A19C]'><strong className='text-black'>Wins: </strong>49</p>
              <p className='font-thin text-[#00A19C]'><strong className='text-black'>Podiums: </strong>93</p>
              <p className='font-thin text-[#00A19C]'><strong className='text-black'>Overall Career Points: </strong>2445</p>
          </div>
        </div>
        <div className='bg-[#FAF9F6] p-4 rounded-md flex items-center justify-center mt-2 m-4'>
        <img src="/images/max-v.png" alt="" className='w-[200px] h-[200px] mb-4 rounded-full  border border-black bg-[#1B2B5A]'/>
          <div className='flex flex-col ml-24'>
          <h3 className='mb-4 text-2xl font-bold font'>Max Verstappen</h3>
          <p className='font-thin text-[#1B2B5A]'><strong className='text-black'>Age: </strong>26</p>
          <p className='font-thin text-[#1B2B5A]'><strong className='text-black'>Team: </strong>Red Bull Racing</p>
          <p className='font-thin text-[#1B2B5A]'><strong className='text-black'>Wins: </strong>49</p>
          <p className='font-thin text-[#1B2B5A]'><strong className='text-black'>Podiums: </strong>93</p>
          <p className='font-thin text-[#1B2B5A]'><strong className='text-black'>Overall Career Points: </strong>2445</p>
          </div>
        </div>
        <div className='bg-[#FAF9F6] p-4 rounded-md flex items-center justify-center mt-2 m-4'>
        <img src="/images/charles.png" alt="" className='w-[200px] h-[200px] mb-4 rounded-full  border border-black bg-[#A6051A]'/>
          <div className='flex flex-col ml-24'>
          <h3 className='mb-4 text-2xl font-bold font'>Charles Leclerc</h3>
          <p className='font-thin text-[#A6051A]'><strong className='text-black'>Age: </strong>20</p>
          <p className='font-thin text-[#A6051A]'><strong className='text-black'>Team: </strong>Ferrari</p>
          <p className='font-thin text-[#A6051A]'><strong className='text-black'>Wins: </strong>49</p>
          <p className='font-thin text-[#A6051A]'><strong className='text-black'>Podiums: </strong>93</p>
          <p className='font-thin text-[#A6051A]'><strong className='text-black'>Overall Career Points: </strong>2445</p>
          </div>
        </div>
        <div className='bg-[#FAF9F6] p-4 rounded-md flex items-center justify-center mt-2 m-4'>
        <img src="/images/norris.png" alt="" className='w-[200px] h-[200px] mb-4 rounded-full border border-black bg-[#FF8000] '/>
          <div className='flex flex-col ml-24'>
          <h3 className='mb-4 text-2xl font-bold font'>Lando Norris</h3>
          <p className='font-thin text-[#FF8000]'><strong className='text-black'>Age: </strong>38</p>
          <p className='font-thin text-[#FF8000]'><strong className='text-black'>Team: </strong>Mercedes AMG Motorsport</p>
          <p className='font-thin text-[#FF8000]'><strong className='text-black'>Wins: </strong>49</p>
          <p className='font-thin text-[#FF8000]'><strong className='text-black'>Podiums: </strong>93</p>
          <p className='font-thin text-[#FF8000]'><strong className='text-black'>Overall Career Points: </strong>2445</p>
          </div>
        </div>
      </Carousel>
    
  )
}

export default DriverInfo