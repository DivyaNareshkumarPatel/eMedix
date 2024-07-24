import React from 'react'
import Navbar from '../Components/Navbar'
import DoctorMain from '../Components/DoctorMain'
import SearchDoctor from '../Components/SearchDoctor'
import DoctorList from '../Components/DoctorList'
import Footer from '../Components/Footer'
export default function Doctors() {
  return (
    <div className='overflow-x-hidden bg-secondary'>
      <Navbar/>
      <DoctorMain/>
      <SearchDoctor/>
      <DoctorList/>
      <Footer/>
    </div>
  )
}
