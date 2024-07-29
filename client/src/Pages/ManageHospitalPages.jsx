import React, { useState, useEffect } from 'react';
import { fetchHospitals, updateHospital, deleteHospital } from '../services/api';
import '../style/ManageHospitalsPage.css';

const ManageHospitalsPage = () => {
  const [hospitals, setHospitals] = useState([]);
  const [editingHospital, setEditingHospital] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contactNumbers: ['', ''],
    emails: ['', ''],
    workingHoursMonSat: '',
    workingHoursSunday: '',
  });

  useEffect(() => {
    fetchHospitalsData();
  }, []);

  const fetchHospitalsData = async () => {
    try {
      const hospitalsData = await fetchHospitals();
      setHospitals(hospitalsData);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  const handleEditClick = (hospital) => {
    setEditingHospital(hospital);
    setFormData({
      name: hospital.name,
      location: hospital.location,
      contactNumbers: hospital.contactNumbers,
      emails: hospital.emails,
      workingHoursMonSat: hospital.workingHours.monSat,
      workingHoursSunday: hospital.workingHours.sunday,
    });
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteHospital(id);
      fetchHospitalsData();
    } catch (error) {
      console.error('Error deleting hospital:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHospital(editingHospital._id, formData);
      fetchHospitalsData();
      setEditingHospital(null);
      setFormData({
        name: '',
        location: '',
        contactNumbers: ['', ''],
        emails: ['', ''],
        workingHoursMonSat: '',
        workingHoursSunday: '',
      });
    } catch (error) {
      console.error('Error updating hospital:', error);
    }
  };

  return (
    <div className="manage-hospitals-page">
      <h1 className="title">Manage Hospitals</h1>
      {editingHospital && (
        <form onSubmit={handleSubmit} className="hospital-form">
          <h2>Edit Hospital</h2>
          <div className="form-group">
            <label htmlFor="name">Hospital Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
              value={formData.location}
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
              value={formData.contactNumbers[0]}
              onChange={(e) => {
                const newContactNumbers = [...formData.contactNumbers];
                newContactNumbers[0] = e.target.value;
                setFormData((prevState) => ({ ...prevState, contactNumbers: newContactNumbers }));
              }}
              className="form-input"
              placeholder="Contact Number 1"
              required
            />
            <input
              type="text"
              name="contactNumbers"
              value={formData.contactNumbers[1]}
              onChange={(e) => {
                const newContactNumbers = [...formData.contactNumbers];
                newContactNumbers[1] = e.target.value;
                setFormData((prevState) => ({ ...prevState, contactNumbers: newContactNumbers }));
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
              value={formData.emails[0]}
              onChange={(e) => {
                const newEmails = [...formData.emails];
                newEmails[0] = e.target.value;
                setFormData((prevState) => ({ ...prevState, emails: newEmails }));
              }}
              className="form-input"
              placeholder="Email 1"
              required
            />
            <input
              type="email"
              name="emails"
              value={formData.emails[1]}
              onChange={(e) => {
                const newEmails = [...formData.emails];
                newEmails[1] = e.target.value;
                setFormData((prevState) => ({ ...prevState, emails: newEmails }));
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
              value={formData.workingHoursMonSat}
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
              value={formData.workingHoursSunday}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-button">Update Hospital</button>
        </form>
      )}
      <div className="hospitals-list">
        <h2>Hospitals List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital) => (
              <tr key={hospital._id}>
                <td>{hospital.name}</td>
                <td>{hospital.location}</td>
                <td>
                  <button onClick={() => handleEditClick(hospital)} className="edit-button">Edit</button>
                  <button onClick={() => handleDeleteClick(hospital._id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageHospitalsPage;
