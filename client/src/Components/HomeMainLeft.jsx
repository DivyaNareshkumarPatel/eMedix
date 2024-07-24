import React from "react";
import { Link } from "react-router-dom";
export default function HomeMainLeft() {
  return (
    <div>
      <div className="text-4xl font-semibold mb-5">
        <p className="text-primary">We care</p>
        <p className="text-black">about your health</p>
      </div>
      <div className="text-grey mb-10">
        Good health is the state of mental, physical and social well being<br/>
        and it does not just mean absence of diseases.
      </div>
      <div>
        <Link to="/doctors" className="bg-primary inline-flex text-secondary px-6 py-3 rounded-md mb-8 justify-center items-center">Book an appointment<i class="fa-solid fa-arrow-right ml-2 text-xl"></i></Link>
      </div>
      <div className="text-black">
        Become member of our community? <Link to="/signup" className="text-primary">Sign up</Link>
      </div>
    </div>
  );
}
