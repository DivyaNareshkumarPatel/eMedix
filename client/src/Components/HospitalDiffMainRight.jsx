import React from 'react'
import image from '../Images/hospital.png'
export default function HospitalDiffMainRight() {
  return (
    <div className='max-w-96 my-10 bg-secondary'>
      <img src={image} alt="" className='md:max-w-lg max-w-xs rounded-full'/>
    </div>
  )
}
