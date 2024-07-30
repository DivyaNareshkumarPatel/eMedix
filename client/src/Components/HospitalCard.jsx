import React from 'react';
import { Link } from 'react-router-dom';

export default function HospitalCard({ name, location, image, contactNumbers, emails, displayPhoto, id}) {
  return (
    <div className="m-5 serviceBox p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-72">
      <div className="flex justify-center items-center flex-col">
        <div className="h-36 w-52 my-1 flex justify-center items-center rounded-xl overflow-hidden">
          <img src={image} className="h-full object-cover" alt={name} />
        </div>
        <div className="text-black text-sm mt-4">{name}</div>
        <div className="flex items-center text-grey text-xs mt-2 max-w-52">
          <i className="fa-solid fa-location-dot mr-1"></i> {location}
        </div>
        <div className="mt-4">
          <Link 
            to="/hospital" 
            state={{ name, location, image, contactNumbers, emails, displayPhoto, id }}
            className="bg-primary text-secondary px-4 py-2 rounded-lg text-xs font-medium border border-transparent hover:border-primary hover:bg-secondary hover:text-primary transition-all duration-300"
          >
            Visit Hospital
          </Link>
        </div>
      </div>
    </div>
  );
}
