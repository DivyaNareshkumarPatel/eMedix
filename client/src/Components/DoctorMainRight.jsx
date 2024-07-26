import React from 'react';
import image from '../Images/doctor2.png';

export default function DoctorMainRight() {
  return (
    <div className='md:w-1/2 flex justify-center p-5 md:p-10'>
      <img src={image} alt="Doctor" className='md:max-w-lg max-w-xs rounded-lg' />
    </div>
  );
}
