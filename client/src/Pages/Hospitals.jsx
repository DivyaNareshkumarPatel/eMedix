import React from 'react'
import Navbar from '../Components/Navbar'
import HospitalMain from '../Components/HospitalMain.'
import SearchHospital from '../Components/SearchHospital'
import HospitalList from '../Components/HospitalList'
import Footer from '../Components/Footer'
export default function Hospitals() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <HospitalMain/>
      <SearchHospital/>
      <HospitalList/>
      <Footer/>
    </div>
  )
}
