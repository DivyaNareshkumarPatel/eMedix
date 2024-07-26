import React from 'react';
import image from '../Images/home.png';

export default function HomeMainRight() {
  return (
    <div className='flex justify-center items-center w-full max-w-lg px-6 md:px-0'>
      <img
        src={image}
        alt="Health and Wellness"
        className='rounded-lg max-w-full h-auto transition-transform duration-300 transform hover:scale-105'
      />
    </div>
  );
}
