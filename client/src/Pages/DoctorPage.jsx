import React, { useState } from 'react';
import { addDoctor } from '../services/api';
import '../style/Doctor.css';
import Notification from '../Components/Notification';

export default function DoctorPage() {
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    hospitalSpecialities: '',
    contactNumber: '',
    email: '',
    image: null
  });

  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setDoctorDetails(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', doctorDetails.name);
    formData.append('hospitalSpecialities', doctorDetails.hospitalSpecialities);
    formData.append('contactNumber', doctorDetails.contactNumber);
    formData.append('email', doctorDetails.email);
  
    if (doctorDetails.image) {
      formData.append('image', doctorDetails.image);
    }
  
    try {
      const response = await addDoctor(formData);
  
      if (response.success) {
        setNotification({ message: 'Doctor added successfully!', type: 'success' });
        setDoctorDetails({
          name: '',
          hospitalSpecialities: '',
          contactNumber: '',
          email: '',
          image: null
        });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000);
      } else {
        setNotification({ message: 'Failed to add doctor.', type: 'error' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000);
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
      setTimeout(() => setNotification({ message: '', type: '' }), 2000);
    }
  };
  

  return (
    <div className="doctor-page">
      <h1 className="title">Add Doctor Details</h1>
      <Notification message={notification.message} type={notification.type} />
      <form onSubmit={handleSubmit} className="doctor-form">
        <div className="form-group">
          <label htmlFor="name">Doctor Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={doctorDetails.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hospitalSpecialities">Hospital Specialities:</label>
          <input
            type="text"
            id="hospitalSpecialities"
            name="hospitalSpecialities"
            value={doctorDetails.hospitalSpecialities}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={doctorDetails.contactNumber}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={doctorDetails.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Doctor Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}
