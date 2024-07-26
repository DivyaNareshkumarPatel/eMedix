import React from 'react';
import HospitalContactCard from './HospitalContactCard';

export default function HospitalContact({hospital}) {
  return (
    <div className="bg-secondary py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-primary text-3xl font-bold mb-2">
          Contact Us
        </div>
        <div className="text-black text-xl font-semibold mb-8">
          Get in Touch
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <HospitalContactCard 
            icon={<i className="fa-solid fa-phone-volume text-secondary text-2xl"></i>} 
            head="Emergency" 
            line1={hospital.contactNumbers[0]}
            line2={hospital.contactNumbers[1]} 
          />
          <HospitalContactCard 
            icon={<i className="fa-solid fa-location-dot text-secondary text-2xl"></i>} 
            head="Location" 
            line1={hospital.location} 
            line2="" 
          />
          <HospitalContactCard 
            icon={<i className="fa-solid fa-envelope text-secondary text-2xl"></i>} 
            head="Email" 
            line1={hospital.emails[0]} 
            line2={hospital.emails[1]} 
          />
          <HospitalContactCard 
            icon={<i className="fa-solid fa-clock text-secondary text-2xl"></i>} 
            head="Working Hours" 
            line1={`Mon-Sat ${hospital.workingHours?.monSat}`} 
            line2={`Sunday ${hospital.workingHours?.sunday}`} 
          />
        </div>
      </div>
    </div>
  );
}
