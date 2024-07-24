import React from 'react'
import AccNavbar from '../Components/AccNavbar'
import DocAccWelcome from '../Components/DocAccWelcome'
import DocAccAppointment from '../Components/DocAccAppointment'
import DoctorProfileMainPatients from '../Components/DoctorProfileMainPatients'
export default function DocAccount() {
  return (
    <div>
      <AccNavbar/>
      <DocAccWelcome/>
      <DocAccAppointment/>
      <DoctorProfileMainPatients/>
    </div>
  )
}
