import React from 'react';

export default function DoctorProfileMainRight({ image }) {
  return (
    <div className='flex justify-center items-center bg-secondary p-5 rounded-lg shadow-lg mb-10'>
      <img src={image} alt="Doctor" className='h-80 w-auto rounded-lg border-4 border-lightBlue transform transition-transform duration-500 hover:scale-105'/>
    </div>
  );
}
