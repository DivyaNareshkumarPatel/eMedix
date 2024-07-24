import React from 'react'
import Navbar from '../Components/Navbar'
import HomeMain from '../Components/HomeMain'
import HomeService from '../Components/HomeService'
import HomeDoctors from '../Components/HomeDoctors'
import HomeHospital from '../Components/HomeHospital'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div className='bg-secondary overflow-x-hidden'>
      <Navbar/>
      <HomeMain/>
      <HomeService/>
      <HomeHospital/>
      <HomeDoctors/>
      <Footer/>
    </div>
  )
}
