import React from 'react'
import Navbar from '../Components/Navbar'
import AboutMain from '../Components/AboutMain'
import About from '../Components/About'
import Footer from '../Components/Footer'
export default function AboutUs() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <AboutMain/>
      <About/>
      <Footer/>
    </div>
  )
}
