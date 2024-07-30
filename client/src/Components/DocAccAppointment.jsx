import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

export default function DocAccAppointment({ appointments }) {
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
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id} className="bg-secondary border-t border-lightGrey hover:bg-lightGrey transition-colors duration-300">
                    <td className="py-3 px-4 text-center">{appointment.firstName} {appointment.lastName}</td>
                    <td className="py-3 px-4 text-center">{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-center">
                      <Link to={`/checkDetails/${appointment._id}`} className="text-green-500 hover:text-green-600">
                        <i className="fa-solid fa-check bg-green-500 text-white h-6 w-6 rounded-full inline-flex justify-center items-center cursor-pointer"></i>
                      </Link>
                      <Link to="/rejectApp" className="ml-2 text-red-500 hover:text-red-600">
                        <i className="fa-solid fa-xmark bg-red-500 text-white h-6 w-6 rounded-full inline-flex justify-center items-center cursor-pointer"></i>
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Link to={`/checkDetails/${appointment._id}`} className="text-primary hover:underline">Check details</Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-3 px-4 text-center">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
