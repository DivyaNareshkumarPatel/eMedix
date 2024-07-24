import React from 'react'
import Navbar from '../Components/Navbar'
import PatientWel from '../Components/PatientWel'
import PatientAppReq from '../Components/PatientAppReq'
import PatientReqAcc from '../Components/PatientReqAcc'
import PatientMessage from '../Components/PatientMessage'
import PatientRequestRejected from '../Components/PatientRequestRejected'
import Footer from '../Components/Footer'
export default function PatientAcc() {
  return (
    <div>
      <Navbar/>
      <PatientWel/>
      <PatientAppReq/>
      <PatientReqAcc/>
      <PatientMessage/>
      <PatientRequestRejected/>
      <Footer/>
    </div>
  )
}
