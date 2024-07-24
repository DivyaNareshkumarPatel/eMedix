import React from 'react'
import HospitalMainLeft from './HospitalMainLeft'
import HospitalMainRight from './HospitalMainRight'
export default function HospitalMain() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly items-center w-screen sm:px-20 px-5 z-0'>
      <HospitalMainLeft/>
      <HospitalMainRight/>
    </div>
  )
}
