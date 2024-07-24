import React from 'react'
import image from '../Images/GroupDoctors.png'
export default function HospitalDiffMainWelcome() {
  return (
    <div className='flex justify-center items-center flex-col mt-16 mx-10'>
      <div className='flex justify-center items-center text-center flex-col max-w-96'>
        <p className='text-primary font-semibold'>Welcome to XYZ Hospital</p>
        <p className='text-black font-semibold text-2xl my-2'>A Great Place to Receive Care</p>
        <p className='text-xs text-black mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aliquid rerum harum, voluptatum natus dignissimos quasi</p>
      </div>
      <div className='mb-10 max-w-2xl'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}
