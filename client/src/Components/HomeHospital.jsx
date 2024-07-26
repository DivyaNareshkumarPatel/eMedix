import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HospitalCard from './HospitalCard';
import { fetchHospitals } from '../services/api';

export default function HomeHospital() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const hospitalsList = await fetchHospitals();
        setHospitals(hospitalsList.slice(0, 4));
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    getHospitals();
  }, []);

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="text-2xl font-semibold text-black mb-2">
        Visit Our Hospitals
      </div>
      <div className="text-center text-grey mb-5 px-5">
        Well-qualified doctors are ready to serve you
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
        {hospitals.map(hospital => (
          <HospitalCard 
            key={hospital._id}
            name={hospital.name}
            location={hospital.location}
            image={hospital.hospitalPhoto}
            contactNumbers = {hospital.contactNumbers}
            emails = {hospital.emails}
            displayPhoto = {hospital.displayPhoto}
            id={hospital.id}
          />
        ))}
      </div>
      <div>
        <Link 
          to="/hospitals" 
          className="bg-primary text-secondary px-6 py-2 rounded-md text-sm font-semibold transition-transform transform hover:scale-105 hover:bg-primary-dark hover:text-secondary"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
