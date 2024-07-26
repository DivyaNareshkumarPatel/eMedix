import React from 'react';
import '../style/style.css';

export default function DoctorProfileMainAppointment() {
  return (
    <div className="flex justify-center items-center flex-col mx-10">
      <div className="text-black text-3xl font-semibold mb-5">Book An Appointment</div>
      <div className="flex flex-col justify-center items-center">
        <div className="serviceBox px-10 py-10 mb-10 rounded-xl shadow-lg bg-white">
          <form>
            <div className="flex flex-wrap">
              <input type="text" placeholder="First Name" className="block my-2 mx-4 docInput" />
              <input type="text" placeholder="Last Name" className="block my-2 mx-4 docInput" />
            </div>
            <div className="flex flex-wrap">
              <input type="email" placeholder="Email" className="block my-2 mx-4 docInput" />
              <input type="number" placeholder="Phone" className="block my-2 mx-4 docInput" />
            </div>
            <div className="mx-4 mt-3 text-lg font-medium text-gray-700">
              Age
            </div>
            <div className="flex flex-wrap">
              <input type="date" className="block my-2 mx-4 docInput" />
            </div>
            <div className="mx-4 mt-3 text-lg font-medium text-gray-700">
              Date and time for appointment:
            </div>
            <div className="flex flex-wrap">
              <input type="date" className="block my-2 mx-4 docInput" />
              <input type="time" className="block my-2 mx-4 docInput" />
            </div>
            <div className="flex flex-wrap mt-3 items-center">
              <label htmlFor="gender" className="block my-2 mx-4 text-lg font-medium text-gray-700">Gender</label>
              <div className="flex items-center">
                <input type="radio" name="gender" className="mx-2 cursor-pointer" />
                <p className="mx-2">Male</p>
              </div>
              <div className="flex items-center">
                <input type="radio" name="gender" className="mx-2 cursor-pointer" />
                <p className="mx-2">Female</p>
              </div>
              <div className="flex items-center">
                <input type="radio" name="gender" className="mx-2 cursor-pointer" />
                <p className="mx-2">Other</p>
              </div>
            </div>
            <div className="flex flex-wrap mt-3 mx-4">
              <textarea
                type="text"
                placeholder="Message"
                className="block my-2 mx-4 message rounded p-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                cols={30}
                rows={5}
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="block my-2 mx-4 bg-primary text-secondary px-4 py-2 rounded-full shadow-md hover:bg-primary-dark transition-colors duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
