import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from '../services/authService'; // Correct import
import '../style/style.css';
import { bookAppointment } from '../services/api';
import getUserIdFromToken from '../services/decodeJWT.js'; // Updated import
import Notification from '../Components/Notification';

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export default function DoctorProfileMainAppointment({ docId }) {
  const navigate = useNavigate(); // Correct hook for navigation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    appointmentDate: '',
    appointmentTime: '',
    gender: '',
    message: '',
  });

  const [notification, setNotification] = useState({
    message: '',
    type: '', // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, firstName, lastName, phone, age, appointmentDate, appointmentTime, gender, message } = formData;

    if (!validateEmail(email)) {
      setNotification({ message: 'Invalid email address', type: 'error' });
      return;
    }

    if (!firstName || !lastName || !phone || !age || !appointmentDate || !appointmentTime || !gender || !message) {
      setNotification({ message: 'Please fill in all required fields', type: 'error' });
      return;
    }

    const userId = getUserIdFromToken(); // Get the user ID
    if (!userId) {
      navigate('/login'); // Redirect to login if not logged in
      return;
    }

    const formattedAge = new Date(age).toISOString(); // Convert to ISO date string

    try {
      const response = await bookAppointment({ ...formData, docId, userId, age: formattedAge });
      console.log('Appointment booked successfully', response);
      setNotification({ message: 'Appointment booked successfully!', type: 'success' });
    } catch (error) {
      console.error('Error booking appointment', error);
      setNotification({ message: 'Error booking appointment', type: 'error' });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mx-10">
      <Notification message={notification.message} type={notification.type} /> {/* Display notification */}
      <div className="text-black text-3xl font-semibold mb-5">Book An Appointment</div>
      <div className="flex flex-col justify-center items-center">
        <div className="serviceBox px-10 py-10 mb-10 rounded-xl shadow-lg bg-white">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="block my-2 mx-4 docInput"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="block my-2 mx-4 docInput"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-wrap">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="block my-2 mx-4 docInput"
                onChange={handleChange}
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="block my-2 mx-4 docInput"
                onChange={handleChange}
              />
            </div>
            <div className="mx-4 mt-3 text-lg font-medium text-gray-700">
              Age
            </div>
            <div className="flex flex-wrap">
              <input
                type="date"
                name="age"
                className="block my-2 mx-4 docInput"
                onChange={handleChange}
              />
            </div>
            <div className="mx-4 mt-3 text-lg font-medium text-gray-700">
              Date and time for appointment:
            </div>
            <div className="flex flex-wrap">
              <input
                type="date"
                name="appointmentDate"
                className="block my-2 mx-4 docInput"
                onChange={handleChange}
              />
              <input
                type="time"
                name="appointmentTime"
                className="block my-2 mx-4 docInput"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-wrap mt-3 items-center">
              <label htmlFor="gender" className="block my-2 mx-4 text-lg font-medium text-gray-700">Gender</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mx-2 cursor-pointer"
                  onChange={handleChange}
                />
                <p className="mx-2">Male</p>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mx-2 cursor-pointer"
                  onChange={handleChange}
                />
                <p className="mx-2">Female</p>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  className="mx-2 cursor-pointer"
                  onChange={handleChange}
                />
                <p className="mx-2">Other</p>
              </div>
            </div>
            <div className="flex flex-wrap mt-3 mx-4">
              <textarea
                name="message"
                placeholder="Message"
                className="block my-2 mx-4 message rounded p-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                cols={30}
                rows={5}
                onChange={handleChange}
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
