import React from 'react'
import image from '../Images/doctor3.png'

export default function HospitalMainRight() {
  return (
    <div className='flex justify-center items-center bg-secondary p-5 rounded-lg shadow-lg mb-10'>
      <img src={image} alt="Doctor" className='md:max-w-lg max-w-xs rounded-lg border-4 border-lightBlue transform transition-transform duration-500 hover:scale-105'/>
    </div>
  )
}
