import React from 'react'
import HospitalDiffMainLeft from './HospitalDiffMainLeft'
import HospitalDiffMainRight from './HospitalDiffMainRight'
export default function HospitalDiffMain() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly items-center w-screen sm:px-20 px-5 z-0'>
      <HospitalDiffMainLeft/>
      <HospitalDiffMainRight/>
    </div>
  )
}
