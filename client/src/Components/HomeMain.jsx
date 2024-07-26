import React from 'react';
import HomeMainLeft from './HomeMainLeft';
import HomeMainRight from './HomeMainRight';

export default function HomeMain() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-screen bg-lightBlue py-12 px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl mx-auto'>
        <HomeMainLeft/>
        <HomeMainRight/>
      </div>
    </div>
  );
}
