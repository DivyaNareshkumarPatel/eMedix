import React, { useEffect, useState } from "react";
import HospitalCard from "./HospitalCard";
import { fetchHospitals } from "../services/api";

export default function HospitalList({ searchQuery, location }) {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const hospitalData = await fetchHospitals();
        setHospitals(hospitalData);
      } catch (error) {
        setError("Failed to fetch hospitals.");
      } finally {
        setLoading(false);
      }
    };

    getHospitals();
  }, []);

  const filteredHospitals = hospitals.filter(hospital => 
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
    hospital.location.toLowerCase().includes(location.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mt-8 mb-10">
        <div className="text-2xl font-semibold text-black mb-4">
          Visit our Hospitals
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {filteredHospitals.map((hospital) => (
            <HospitalCard
              key={hospital._id}
              name={hospital.name}
              location={hospital.location}
              image={hospital.hospitalPhoto}
              contactNumbers={hospital.contactNumbers}
              emails={hospital.emails}
              displayPhoto={hospital.displayPhoto}
              id={hospital.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
