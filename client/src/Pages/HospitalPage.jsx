import React, { useState } from 'react';
import '../style/Hospital.css'
export default function HospitalPage() {
  const [hospitalDetails, setHospitalDetails] = useState({
    name: '',
    location: '',
    contactNumbers: ['', ''],
    emails: ['', ''],
    specialities: '',
    workingHours: {
      monSat: '',
      sunday: ''
    },
    specialityIcon: null,
    hospitalPhoto: null,
    displayPhoto: null
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(hospitalDetails);
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
          <label htmlFor="specialities">Specialities:</label>
          <input
            type="text"
            id="specialities"
            name="specialities"
            value={hospitalDetails.specialities}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="workingHoursMonSat">Working Hours (Mon-Sat):</label>
          <input
            type="text"
            id="workingHoursMonSat"
            name="workingHoursMonSat"
            value={hospitalDetails.workingHours.monSat}
            onChange={e => setHospitalDetails(prevState => ({
              ...prevState,
              workingHours: { ...prevState.workingHours, monSat: e.target.value }
            }))}
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
            value={hospitalDetails.workingHours.sunday}
            onChange={e => setHospitalDetails(prevState => ({
              ...prevState,
              workingHours: { ...prevState.workingHours, sunday: e.target.value }
            }))}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialityIcon">Speciality Icon:</label>
          <input
            type="file"
            id="specialityIcon"
            name="specialityIcon"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
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
    </div>
  );
}
