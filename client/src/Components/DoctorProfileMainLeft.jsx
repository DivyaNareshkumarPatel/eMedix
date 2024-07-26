import React from "react";

export default function DoctorProfileMainLeft({ name, specialty, hospital, location }) {
  return (
    <div>
      <div className="text-4xl font-semibold mb-5 z-0">
        <p className="text-primary">{name}</p>
        <p className="text-black">{hospital}</p>
      </div>
      <div className="text-grey mb-10 w-96">
        {specialty} <br></br>A neurologist is a medical doctor specializing in
        the diagnosis and treatment of disorders affecting the nervous system,
        including the brain, spinal cord, and nerves.
      </div>
      <div className="text-grey mb-10 w-96">
        Location: {location}
      </div>
    </div>
  );
}
