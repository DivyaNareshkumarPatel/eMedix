import React from 'react'
import HospitalMainLeft from './HospitalMainLeft'
import HospitalMainRight from './HospitalMainRight'

export default function HospitalMain() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-around sm:justify-evenly w-screen sm:px-10 px-5 py-10 bg-lightBlue'>
      <HospitalMainLeft/>
      <HospitalMainRight/>
    </div>
  )
}
