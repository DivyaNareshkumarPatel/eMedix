import React from 'react'
import HospitalContactCard from './HospitalContactCard'
export default function HospitalContact() {
  return (
    <div className="flex justify-center items-center flex-col w-screen mb-10 mx-10">
      <div className="flex justify-center items-center flex-col max-w-5xl">
        <div className="text-2xl font-semibold text-primary mb-1">
          Contact us
        </div>
        <div className="text-lg font-semibold text-black mb-3">
          Get in touch
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <HospitalContactCard icon={<i class="fa-solid fa-phone-volume"></i>} head="Emergency" line1="(237) 681-812-255" line2="(237) 666-331-894" />
          <HospitalContactCard icon={<i class="fa-solid fa-location-dot"></i>} head="Location" line1="0123 Some place" line2="9876 Some country"/>
          <HospitalContactCard icon={<i class="fa-solid fa-envelope"></i>} head="Email" line1="fildineeesoe@gmil.com" line2="myebstudios@gmail.com"/>
          <HospitalContactCard icon={<i class="fa-solid fa-clock"></i>} head="Working Hours" line1="Mon-Sat 09:00-20:00" line2="Sunday Emergency only"/>
        </div>
      </div>
    </div>
  )
}
