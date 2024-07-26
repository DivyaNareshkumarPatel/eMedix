import React from 'react'
import HospitalDiffMainLeft from './HospitalDiffMainLeft'
import HospitalDiffMainRight from './HospitalDiffMainRight'

export default function HospitalDiffMain({hospital}) {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between w-screen sm:px-20 px-5 py-10 bg-lightBlue'>
      <HospitalDiffMainLeft hospital={hospital}/>
      <HospitalDiffMainRight hospital={hospital}/>
    </div>
  )
}
