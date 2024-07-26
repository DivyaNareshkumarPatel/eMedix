import React from "react";
import { Link } from "react-router-dom";

export default function DoctorCard({ name, specialty, hospital, location, image, id }) {
  return (
    <div className="m-5 serviceBox p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center items-center flex-col">
        <div className="flex items-center bg-lightGrey rounded-full px-3 py-1 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary mx-1"></div>
          <p className="text-xs text-black">Available</p>
        </div>
        <div className="bg-lightBlue h-36 w-36 flex justify-center items-center rounded-full overflow-hidden mb-4 shadow-md">
          <img src={image} className="h-full w-full object-cover" alt="Doctor" />
        </div>
        <div className="text-black text-lg font-semibold mb-2">{name}</div>
        <div className="text-grey text-sm mb-3">{specialty}</div>
        <div className="text-primary text-sm mb-2 flex items-center font-medium hover:text-primary-dark transition-colors">
          <i className="fa-solid fa-hospital mr-2"></i> {hospital}
        </div>
        <div className="text-primary text-sm flex items-center mb-4 font-medium hover:text-primary-dark transition-colors max-w-52">
          <i className="fa-solid fa-location-dot mr-2"></i> {location}
        </div>
        <Link
          to="/doctorProfile"
          state={{ name, specialty, hospital, location, image, id }}
          className="bg-primary text-secondary px-4 py-2 rounded-lg text-xs font-medium border border-transparent hover:border-primary hover:bg-secondary hover:text-primary transition-all duration-300"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
