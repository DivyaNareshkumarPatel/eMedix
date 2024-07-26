import React from "react";

export default function HospitalDiffMainLeft({hospital}) {
  return (
    <div className="text-center sm:text-left mb-10 sm:mb-0">
      <p className="text-black text-lg sm:text-xl mb-3 font-medium">Care for Life</p>
      <p className="text-primary text-3xl sm:text-5xl font-bold mb-5">{hospital.name}</p>
      <p className="text-black text-xl sm:text-2xl font-semibold">Leading the Way <br /> in Medical Excellence</p>
    </div>
  );
}
