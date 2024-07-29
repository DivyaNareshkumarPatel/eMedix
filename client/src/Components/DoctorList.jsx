import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { fetchDoctors } from '../services/api';

export default function DoctorList({ searchQuery, location }) {
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

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      doctor.hospitalLocation.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center bg-secondary py-10">
      <div className="flex flex-col items-center mt-8 mb-10">
        <div className="text-2xl font-semibold text-black mb-4">
          Meet our Doctors
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                name={doctor.name}
                specialty={doctor.specialty}
                hospital={doctor.hospitalName}
                location={doctor.hospitalLocation}
                image={doctor.image}
                id={doctor._id}
                message={doctor.message}
              />
            ))
          ) : (
            <p className="text-grey">No doctors found</p>
          )}
        </div>
      </div>
    </div>
  );
}
