import React from 'react'
import image from '../Images/doctor.png'
export default function DoctorProfileMainRight() {
  return (
    <div className='max-w-96 my-10'>
      <img src={image} alt="" className='md:max-w-lg max-w-xs'/>
    </div>
  )
}
