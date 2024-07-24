import React from "react";
import DoctorProfileMainLeft from "./DoctorProfileMainLeft";
import DoctorProfileMainRight from "./DoctorProfileMainRight";
export default function DoctorProfileMain() {
  return (
    <div className="mt-16 mb-16 overflow-x-hidden">
      <div className="flex flex-row flex-wrap justify-evenly items-center w-screen sm:px-20 px-5 z-0">
        <DoctorProfileMainLeft />
        <DoctorProfileMainRight />
      </div>
    </div>
  );
}
