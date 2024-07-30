import React from "react";
import "../style/style.css";

export default function CheckDetailsIndi({ appointment }) {
  return (
    <div className="mx-8 my-6 text-black">
      <h2 className="text-2xl font-bold mb-4">Details of {appointment.firstName} {appointment.lastName}</h2>
      <div className="serviceBox rounded-lg bg-lightBlue shadow-lg p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">First Name:</span>
                <span>{appointment.firstName}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Last Name:</span>
                <span>{appointment.lastName}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">Email:</span>
                <span>{appointment.email}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Phone:</span>
                <span>{appointment.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">Age:</span>
            <span>{appointment.age}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold mt-4">Requested Appointment Date and Time:</h3>
            <div className="flex flex-col mt-2">
              <div className="flex items-center mb-1">
                <span className="font-semibold mr-2">Date:</span>
                <span>{new Date(appointment.appointmentDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Time:</span>
                <span>{appointment.appointmentTime}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mt-4">Message by Patient:</h3>
            <p className="mb-4 text-base">{appointment.message}</p>
          </div>
          <form>
            <div>
              <h3 className="text-lg font-bold mt-4">To Accept Request, Send Date, Time, and Message:</h3>
              <div className="flex flex-col md:flex-row md:space-x-4 mt-2">
                <input
                  type="time"
                  name="appointmentTime"
                  className="docInput mb-2 md:mb-0"
                />
                <input
                  type="date"
                  name="appointmentDate"
                  className="docInput"
                />
              </div>
              <textarea
                placeholder="Message"
                className="block w-full my-2 message rounded border border-lightGrey p-2 mt-3"
                cols={30}
                rows={5}
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <button className="bg-primary text-secondary px-6 py-2 rounded-lg shadow hover:bg-primaryDark transition-colors">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
