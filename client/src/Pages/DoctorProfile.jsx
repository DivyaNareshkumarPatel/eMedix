import React from 'react'
import Navbar from '../Components/Navbar'
import DoctorProfileMainAppointment from '../Components/DoctorProfileMainAppointment'
import DoctorProfileMain from '../Components/DoctorProfileMain'
import Footer from '../Components/Footer'
export default function DoctorProfile() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <DoctorProfileMain/>
      <DoctorProfileMainAppointment/>
      <Footer/>
    </div>
  )
}
