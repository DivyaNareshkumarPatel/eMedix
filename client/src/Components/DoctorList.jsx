import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { fetchDoctors } from '../services/api'; // Ensure you have this path correct

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    getDoctors();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-secondary py-10">
      <div className="flex flex-col items-center mt-8 mb-10">
        <div className="text-2xl font-semibold text-black mb-4">
          Meet our Doctors
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <DoctorCard key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              hospital={doctor.hospitalName}
              location={doctor.hospitalLocation}
              image={doctor.image} />
            ))
          ) : (
            <p className="text-grey">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
