import React from 'react'
import AboutMainLeft from './AboutMainLeft'
import AboutMainRight from './AboutMainRight'
export default function AboutMain() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly items-center w-screen sm:px-20 px-5 z-0'>
      <AboutMainLeft/>
      <AboutMainRight/>
    </div>
  )
}
