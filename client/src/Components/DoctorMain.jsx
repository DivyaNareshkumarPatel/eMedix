import React from 'react';
import DoctorMainLeft from './DoctorMainLeft';
import DoctorMainRight from './DoctorMainRight';

export default function DoctorMain() {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center w-screen sm:px-20 px-5 py-10 bg-lightBlue'>
      <DoctorMainLeft />
      <DoctorMainRight />
    </div>
  );
}
