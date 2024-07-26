import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";
import { fetchDoctors } from "../services/api";
export default function HomeDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    getDoctors();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="text-2xl font-semibold text-black mb-2">
        Meet Our Doctors
      </div>
      <div className="text-center text-grey mb-5 px-5">
        Our highly qualified doctors are here to help you
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {doctors.map((doctor) => (
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
      <div className="mt-8">
        <Link
          to="/doctors"
          className="bg-primary text-secondary px-6 py-3 rounded-md text-sm font-semibold shadow-lg hover:bg-primary-dark transition-colors"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
