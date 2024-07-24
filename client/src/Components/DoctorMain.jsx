import React from 'react'
import DoctorMainLeft from './DoctorMainLeft'
import DoctorMainRight from './DoctorMainRight'
export default function DoctorMain() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly items-center w-screen sm:px-20 px-5 z-0'>
      <DoctorMainLeft/>
      <DoctorMainRight/>
    </div>
  )
}
