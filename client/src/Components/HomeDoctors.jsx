import React from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";
export default function HomeDoctors() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mt-8 mb-10">
        <div className="text-2xl font-semibold text-black mb-2">
          Meet our Doctors
        </div>
        <div className="text-center text-grey mb-5 px-5">
          Well qualified doctors are ready to serve you
        </div>
        <div className="flex flex-wrap justify-center items-center">
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
        </div>
        <div className="mt-5">
            <Link to="/doctors" className="bg-primary text-secondary px-4 py-2 rounded-md text-sm">See more</Link>
        </div>
      </div>
    </div>
  );
}
