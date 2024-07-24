import React from 'react'
import '../style/style.css'
export default function HomeServiceCard({text, c}) {
  const iclass = `${c} text-3xl text-primary my-2`
  return (
    <div>
      <div className='w-56 bg-secondary flex justify-center items-center flex-col p-5 m-5 serviceBox rounded-2xl'>
        <div className='text-black'><i className={iclass}></i></div>
        <div className='text-black my-5 text-sm'>{text}</div>
      </div>
    </div>
  )
}
