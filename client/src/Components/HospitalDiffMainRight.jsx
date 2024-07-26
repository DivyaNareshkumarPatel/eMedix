import React from 'react'

export default function HospitalDiffMainRight({hospital}) {
  return (
    <div className='flex justify-center items-center bg-secondary p-5 rounded-lg shadow-lg'>
      <img src={hospital.image} alt="Hospital" className='md:max-w-lg max-w-xs rounded-lg transform transition-transform duration-500 hover:scale-105' />
    </div>
  )
}
