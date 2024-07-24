import React from 'react'

export default function AboutCard({iclass, text}) {
  return (
    <div>
      <div className='max-w-80 bg-secondary flex justify-center items-center flex-col p-5 m-5 serviceBox rounded-2xl h-72'>
        <div className='text-primary'><i className={iclass}></i></div>
        <div className='text-black my-5 text-sm'>{text}</div>
      </div>
    </div>
  )
}
