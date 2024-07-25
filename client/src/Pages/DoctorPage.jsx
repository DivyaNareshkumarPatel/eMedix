import React, { useState } from 'react';
import '../style/Doctor.css'

export default function DoctorPage() {
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    hospitalSpecialities: '',
    contactNumber: '',
    email: '',
    image: null
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(doctorDetails);
  };

  return (
    <div className="doctor-page">
      <h1 className="title">Add Doctor Details</h1>
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
