import React from 'react'
import DoctorCard from './DoctorCard'
export default function HospitalDocList() {
  return (
    <div className="flex justify-center items-center flex-col w-screen m-10">
      <div className="flex justify-center items-center flex-col max-w-5xl">
        <div className="text-2xl font-semibold text-primary mb-1">
          Our Doctors
        </div>
        <div className="text-lg font-semibold text-black mb-3">
          Book Appointment
        </div>
        <div className="flex flex-wrap">
          <DoctorCard/>
          <DoctorCard/>
          <DoctorCard/>
        </div>
      </div>
    </div>
  )
}
