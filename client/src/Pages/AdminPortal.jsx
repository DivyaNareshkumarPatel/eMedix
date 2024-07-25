import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HospitalPage from './HospitalPage';
import DoctorPage from './DoctorPage';
import { FaHospitalAlt, FaUserMd } from 'react-icons/fa';

export default function AdminPortal() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-primary p-6 text-secondary flex flex-col">
        <div className="flex items-center mb-10">
          <div className="text-3xl font-bold flex items-center">
            <Link to="/" className="text-secondary">eMedix</Link>
          </div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin-portal/hospitals"
                className="flex items-center text-white hover:bg-gray-700 p-3 rounded transition duration-300 ease-in-out"
              >
                <FaHospitalAlt className="mr-3 text-lg" />
                Hospitals
              </Link>
            </li>
            <li>
              <Link
                to="/admin-portal/doctors"
                className="flex items-center text-white hover:bg-gray-700 p-3 rounded transition duration-300 ease-in-out"
              >
                <FaUserMd className="mr-3 text-lg" />
                Doctors
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold text-black mb-8">
          Welcome to the Admin Portal
        </h1>
        <Routes>
          <Route path="hospitals" element={<HospitalPage />} />
          <Route path="doctors" element={<DoctorPage />} />
        </Routes>
      </div>
    </div>
  );
}
