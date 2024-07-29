import React, { useState, useEffect } from "react";
import "../style/style.css";

export default function SearchDoctor({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    onSearch(searchQuery, location);
  }, [searchQuery, location, onSearch]);

  return (
    <div className="flex justify-center items-center bg-secondary z-10 py-10">
      <div className="flex justify-center max-w-7xl flex-col serviceBox p-10 rounded-3xl mx-5 md:mx-10 bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Search for Doctors
        </h2>
        <form className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center border-2 border-grey rounded-full overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg w-full md:w-auto">
            <i className="fa-solid fa-magnifying-glass text-gray-600 mx-3"></i>
            <input
              type="text"
              placeholder="Search Doctor"
              className="docInput p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 w-full md:w-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center border-2 border-grey rounded-full overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg w-full md:w-auto">
            <i className="fa-solid fa-location-dot text-gray-600 mx-3"></i>
            <input
              type="text"
              placeholder="Set Location"
              className="docInput p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 w-full md:w-auto"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
