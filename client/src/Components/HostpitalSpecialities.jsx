import React from "react";
import HospitalSpecialitiesCard from "./HospitalSpecialitiesCard";
export default function HostpitalSpecialities() {
  return (
    <div className="flex justify-center items-center flex-col w-screen mb-10 mx-10">
      <div className="flex justify-center items-center flex-col max-w-2xl">
        <div className="text-2xl font-semibold text-primary mb-1">
          Our Specialties
        </div>
        <div className="text-lg font-semibold text-black mb-3">
          Always Caring
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
          <HospitalSpecialitiesCard />
        </div>
      </div>
    </div>
  );
}
