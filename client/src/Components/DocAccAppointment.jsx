import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

export default function DocAccAppointment() {
  return (
    <div className="px-10 text-black pb-10">
      <div className="mb-8">
        <h2 className="text-black text-lg font-semibold mb-4">Appointment Requests Sent</h2>
        <div className="serviceBox rounded-lg bg-lightBlue py-4 px-6 shadow-lg">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-lightGrey text-grey text-base font-semibold">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Approval</th>
                <th className="py-3 px-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, index) => (
                <tr key={index} className="bg-secondary border-t border-lightGrey hover:bg-lightGrey transition-colors duration-300">
                  <td className="py-3 px-4 text-center">Divya Patel</td>
                  <td className="py-3 px-4 text-center">28/7</td>
                  <td className="py-3 px-4 text-center">
                    <Link to="/checkDetails" className="text-green-500 hover:text-green-600">
                      <i className="fa-solid fa-check bg-green-500 text-white h-6 w-6 rounded-full inline-flex justify-center items-center cursor-pointer"></i>
                    </Link>
                    <Link to="/rejectApp" className="ml-2 text-red-500 hover:text-red-600">
                      <i className="fa-solid fa-xmark bg-red-500 text-white h-6 w-6 rounded-full inline-flex justify-center items-center cursor-pointer"></i>
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Link to="/checkDetails" className="text-primary hover:underline">Check details</Link>
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
