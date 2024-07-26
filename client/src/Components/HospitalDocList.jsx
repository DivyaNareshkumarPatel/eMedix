import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { fetchDoctorsByHospitalName } from '../services/api';

export default function HospitalDocList({ hospital }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const doctorsList = await fetchDoctorsByHospitalName(hospital.name);
        setDoctors(doctorsList);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    getDoctors();
  }, [hospital.name]);

  return (
    <div className="bg-secondary py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-primary text-3xl font-bold mb-2">
          Our Doctors
        </div>
        <div className="text-black text-xl font-semibold mb-8">
          Book Your Appointment
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.map(doctor => (
            <DoctorCard 
            key={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            hospital={doctor.hospitalName}
            location={doctor.hospitalLocation}
            image={doctor.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
