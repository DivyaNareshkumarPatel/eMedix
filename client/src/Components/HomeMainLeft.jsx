import React from "react";
import { Link } from "react-router-dom";

export default function HomeMainLeft() {
  return (
    <div className="flex flex-col justify-center items-start w-full max-w-lg px-6 md:px-0">
      <div className="text-5xl font-bold mb-6">
        <p className="text-primary">We care</p>
        <p className="text-black">about your health</p>
      </div>
      <div className="text-grey mb-8 text-lg">
        Good health is the state of mental, physical, and social well-being.<br />
        It doesn’t just mean the absence of diseases.
      </div>
      <div className="mb-8">
        <Link
          to="/doctors"
          className="bg-primary text-secondary px-8 py-4 rounded-lg inline-flex items-center hover:bg-primary-dark transition duration-300 shadow-lg transform hover:scale-105"
        >
          Book an appointment
          <i className="fa-solid fa-arrow-right ml-3 text-xl"></i>
        </Link>
      </div>
      <div className="text-black text-lg">
        Become a member of our community? <Link to="/signup" className="text-primary font-semibold hover:underline">Sign up</Link>
      </div>
    </div>
  );
}
