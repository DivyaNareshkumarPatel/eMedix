import React from "react";
import image from "../Images/doctor.png";
import { Link } from "react-router-dom";
export default function DoctorCard() {
  return (
    <div className="m-5 serviceBox p-8 rounded-2xl">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center flex-col text-center">
          <div className="flex">
            <div className="flex items-center bg-lightGrey rounded-full px-1">
              <div className="w-2 h-2 rounded-full bg-primary mx-1"></div>
              <p className="text-xs text-black">Available</p>
            </div>
          </div>
          <div>
            <div className="bg-primary h-36 flex w-52 my-1 justify-center items-center rounded-xl">
              <img src={image} className="h-40 -mt-4" alt="" />
            </div>
          </div>
          <div className="text-black text-sm">Dr. Robert Henry</div>
          <div className="text-grey text-sm">Cardiologist</div>
          <Link>
            <div className="text-primary text-sm">
              <i className="fa-solid fa-hospital"></i> xyz
            </div>
          </Link>
          <div className="text-primary text-sm">
            <i className="fa-solid fa-location-dot"></i> xyz
          </div>
          <div className="my-3">
            <Link to="/doctorProfile" className="text-xs text-primary border-primary border px-4 py-1 rounded-lg">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
