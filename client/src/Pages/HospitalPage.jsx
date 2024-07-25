import React, { useState } from 'react';
import { addHospital } from '../services/api';
import '../style/Hospital.css';
import Notification from '../Components/Notification';

export default function HospitalPage() {
  const [hospitalDetails, setHospitalDetails] = useState({
    name: '',
    location: '',
    contactNumbers: ['', ''],
    emails: ['', ''],
    workingHoursMonSat: '',
    workingHoursSunday: '',
    hospitalPhoto: null,
    displayPhoto: null
  });
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setHospitalDetails(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', hospitalDetails.name);
    formData.append('location', hospitalDetails.location);
    formData.append('contactNumbers', JSON.stringify(hospitalDetails.contactNumbers));
    formData.append('emails', JSON.stringify(hospitalDetails.emails));
    formData.append('workingHoursMonSat', hospitalDetails.workingHoursMonSat);
    formData.append('workingHoursSunday', hospitalDetails.workingHoursSunday);

    if (hospitalDetails.hospitalPhoto) {
      formData.append('hospitalPhoto', hospitalDetails.hospitalPhoto);
    }
    if (hospitalDetails.displayPhoto) {
      formData.append('displayPhoto', hospitalDetails.displayPhoto);
    }

    try {
      const response = await addHospital(formData);
      console.log(response);
      // Show success notification
      setNotification({ message: 'Hospital details successfully submitted!', type: 'success' });
      // Hide notification after 2 seconds
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 2000);
      // Reset form or redirect as needed
    } catch (error) {
      console.error('Error submitting form', error);
      // Show error notification
      setNotification({ message: 'Error submitting hospital details.', type: 'error' });
      // Hide notification after 2 seconds
      setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 2000);
    }
  };

  return (
    <div className="hospital-page">
      <h1 className="title">Add Hospital Details</h1>
      <form onSubmit={handleSubmit} className="hospital-form">
        <div className="form-group">
          <label htmlFor="name">Hospital Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hospitalDetails.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={hospitalDetails.location}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Numbers:</label>
          <input
            type="text"
            name="contactNumbers"
            value={hospitalDetails.contactNumbers[0]}
            onChange={e => {
              const newContactNumbers = [...hospitalDetails.contactNumbers];
              newContactNumbers[0] = e.target.value;
              setHospitalDetails(prevState => ({ ...prevState, contactNumbers: newContactNumbers }));
            }}
            className="form-input"
            placeholder="Contact Number 1"
            required
          />
          <input
            type="text"
            name="contactNumbers"
            value={hospitalDetails.contactNumbers[1]}
            onChange={e => {
              const newContactNumbers = [...hospitalDetails.contactNumbers];
              newContactNumbers[1] = e.target.value;
              setHospitalDetails(prevState => ({ ...prevState, contactNumbers: newContactNumbers }));
            }}
            className="form-input"
            placeholder="Contact Number 2"
          />
        </div>
        <div className="form-group">
          <label>Emails:</label>
          <input
            type="email"
            name="emails"
            value={hospitalDetails.emails[0]}
            onChange={e => {
              const newEmails = [...hospitalDetails.emails];
              newEmails[0] = e.target.value;
              setHospitalDetails(prevState => ({ ...prevState, emails: newEmails }));
            }}
            className="form-input"
            placeholder="Email 1"
            required
          />
          <input
            type="email"
            name="emails"
            value={hospitalDetails.emails[1]}
            onChange={e => {
              const newEmails = [...hospitalDetails.emails];
              newEmails[1] = e.target.value;
              setHospitalDetails(prevState => ({ ...prevState, emails: newEmails }));
            }}
            className="form-input"
            placeholder="Email 2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="workingHoursMonSat">Working Hours (Mon-Sat):</label>
          <input
            type="text"
            id="workingHoursMonSat"
            name="workingHoursMonSat"
            value={hospitalDetails.workingHoursMonSat}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workingHoursSunday">Working Hours (Sunday):</label>
          <input
            type="text"
            id="workingHoursSunday"
            name="workingHoursSunday"
            value={hospitalDetails.workingHoursSunday}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hospitalPhoto">Hospital Photo:</label>
          <input
            type="file"
            id="hospitalPhoto"
            name="hospitalPhoto"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="displayPhoto">Display Photo:</label>
          <input
            type="file"
            id="displayPhoto"
            name="displayPhoto"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Render notification */}
      <Notification message={notification.message} type={notification.type} />
    </div>
  );
}
