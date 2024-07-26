import React from "react";
import "../style/style.css";

export default function SearchHospital() {
  return (
    <div className="flex justify-center items-center bg-secondary z-10">
      <div className="flex justify-center max-w-7xl flex-col serviceBox p-10 rounded-3xl mx-5 md:mx-10 bg-white shadow-lg">
        <form className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center border-2 border-grey rounded-full overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg">
            <i className="fa-solid fa-magnifying-glass text-gray-600 mx-3"></i>
            <input
              type="text"
              placeholder="Search Hospital"
              className="docInput p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
            />
          </div>
          <div className="flex items-center border-2 border-grey rounded-full overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg">
            <i className="fa-solid fa-location-dot text-gray-600 mx-3"></i>
            <input
              type="text"
              placeholder="Set Location"
              className="docInput p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
            />
          </div>
          <div className="flex justify-center items-center my-2">
            <button className="bg-primary text-secondary px-6 py-3 rounded-full shadow-md hover:bg-primary-dark transition-colors duration-300">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <div>
          <div className="text-base text-black font-bold mb-4">
            You may be looking for
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start items-center text-black text-sm space-x-2 space-y-2">
            <div className="bg-lightGrey text-black px-4 py-2 rounded-full shadow-sm hover:bg-lightGrey-dark transition-colors duration-300 cursor-pointer">
              Family Medicine
            </div>
            <div className="bg-lightGrey text-black px-4 py-2 rounded-full shadow-sm hover:bg-lightGrey-dark transition-colors duration-300 cursor-pointer">
              Pediatrics
            </div>
            <div className="bg-lightGrey text-black px-4 py-2 rounded-full shadow-sm hover:bg-lightGrey-dark transition-colors duration-300 cursor-pointer">
              Cardiology
            </div>
            <div className="bg-lightGrey text-black px-4 py-2 rounded-full shadow-sm hover:bg-lightGrey-dark transition-colors duration-300 cursor-pointer">
              Neurology
            </div>
            <div className="bg-lightGrey text-black px-4 py-2 rounded-full shadow-sm hover:bg-lightGrey-dark transition-colors duration-300 cursor-pointer">
              Orthopedics
            </div>
            <div className="bg-lightGrey text-black px-4 py-2 rounded-full shadow-sm hover:bg-lightGrey-dark transition-colors duration-300 cursor-pointer">
              Dermatology
            </div>
            <div className="bg-primary text-secondary px-4 py-2 rounded-full cursor-pointer hover:bg-primary-dark transition-colors duration-300">
              More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
