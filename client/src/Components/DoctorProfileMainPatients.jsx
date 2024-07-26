import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

export default function DoctorProfileMainPatients() {
  return (
    <div className="px-8 pb-10 text-black">
      <div>
        <h2 className="text-black mb-6 text-2xl font-bold">Your Patients</h2>
        <div className="serviceBox rounded-lg bg-lightBlue p-4 shadow-md">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-lightGrey text-grey text-sm font-medium">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, index) => (
                <tr key={index} className="bg-secondary border-b border-lightGrey hover:bg-lightGrey transition-colors duration-300">
                  <td className="py-3 px-4 text-center">Divya Patel</td>
                  <td className="py-3 px-4 text-center">6355079763</td>
                  <td className="py-3 px-4 text-center">divyanareshkumarPatel@gmail.com</td>
                  <td className="py-3 px-4 text-center">
                    <Link to="/checkDetails" className="text-primary hover:underline">Message</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
