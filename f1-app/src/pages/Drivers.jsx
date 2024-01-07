import React from 'react'
import Footer from '../components/Footer';
import DriverInfo from '../components/DriverInfo';

const Drivers = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col h-full justify-center bg-[#E63946] mt-1 mb-1 p-10'>
        <h3 className='text-4xl md:text-6xl text-center items-center justify-center pt-10 text-white'>Formula One Drivers 2023 Lineup</h3>
        <p className='text-2xl py-6 pl-2 font-thin text-slate-200 indent-[173px]'>Check out this season's official F1 lineup with a full breakdown of points, wins, and more!!</p>
          <DriverInfo />
      </div>
    </div>
  );
};



export default Drivers