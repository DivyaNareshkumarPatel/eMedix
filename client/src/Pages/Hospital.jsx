import React from 'react'
import Navbar from '../Components/Navbar'
import HospitalDiffMain from '../Components/HospitalDiffMain'
import HospitalDiffMainWelcome from '../Components/HospitalDiffMainWelcome'
import HospitalDiffServices from '../Components/HospitalDiffServices'
import HostpitalSpecialities from '../Components/HostpitalSpecialities'
import HospitalDocList from '../Components/HospitalDocList'
import HospitalContact from '../Components/HospitalContact'
import Footer from '../Components/Footer'
export default function Hospital() {
  return (
    <div className='overflow-x-hidden h-screen'>
      <Navbar/>
      <HospitalDiffMain/>
      <HospitalDiffMainWelcome/>
      <HospitalDiffServices/>
      <HostpitalSpecialities/>
      <HospitalDocList/>
      <HospitalContact/>
      <Footer/>
    </div>
  )
}
