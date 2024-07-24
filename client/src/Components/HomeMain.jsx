import React from 'react'
import HomeMainLeft from './HomeMainLeft'
import HomeMainRight from './HomeMainRight'
export default function HomeMain() {
  return (
    <div className='flex flex-row flex-wrap justify-evenly items-center w-screen sm:px-20 px-5'>
      <HomeMainLeft/>
      <HomeMainRight/>
    </div>
  )
}