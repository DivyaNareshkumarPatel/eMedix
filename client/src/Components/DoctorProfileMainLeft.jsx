import React from "react";

export default function DoctorProfileMainLeft({ name, specialty, hospital, location, message }) {
  return (
    <div>
      <div className="text-4xl font-semibold mb-5 z-0">
        <p className="text-primary">{name}</p>
        <p className="text-black">{hospital}</p>
      </div>
      <div className="text-grey mb-10 w-96">
        {specialty} <br></br>{message}
      </div>
      <div className="text-grey mb-10 w-96">
        Location: {location}
      </div>
    </div>
  );
}
