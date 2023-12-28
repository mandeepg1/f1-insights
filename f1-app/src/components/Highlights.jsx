import React from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";
import WatchVideoButton from '../WatchVideoButton';

const Highlights = () => {
  return (
    <div className='w-full py-[2rem] px-4 bg-white'>
        <div className='text-5xl p-5 pt-0 text-center font-semibold'>
            Highlights
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* Abu Dhabi */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-[#ede0a7]'>
          <h2 className='text-2xl font-bold text-center pt-8 pl-8 pr-8 pb-1'>Abu Dhabi</h2>
          <p className='text-center font-thin pb-2'>Nov 26 2023</p>
          <div className='flex justify-center'>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/mk93xwElKsk?si=6P6b4BjiWMo3gJEr"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex justify-center' >
            <AiOutlineArrowDown size={30} />
          </div>
          <WatchVideoButton videoId="mk93xwElKsk" videoTitle="Abu Dhabi" />
        </div>

        {/* Las Vegas */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-[#f7ada3]'>
          <h2 className='text-2xl font-bold text-center pt-8 pl-8 pr-8 pb-1'>Las Vegas</h2>
          <p className='text-center font-thin pb-2'>Nov 18 2023</p>
          <div className='flex justify-center'>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/XZR5t0Sm_vI?si=azXBhvgqyQWIEYiy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex justify-center' >
            <AiOutlineArrowDown size={30} />
          </div>
          <WatchVideoButton videoId="XZR5t0Sm_vI" videoTitle="Las Vegas" />
        </div>

        {/* Brazil */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-[#a9eda7]'>
          <h2 className='text-2xl font-bold text-center pt-8 pl-8 pr-8 pb-1'>Brazil</h2>
          <p className='text-center font-thin pb-2 text-'>Nov 5 2023</p>
          <div className='flex justify-center'>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/dI-2oNpdW9M?si=PaN9cywGtBUqz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex justify-center' >
            <AiOutlineArrowDown size={30} />
          </div>
          <WatchVideoButton videoId="dI-2oNpdW9M" videoTitle="Brazil" />
        </div>
      </div>
    </div>
  );
}

export default Highlights;
