import React, { useState, useEffect } from 'react';
import { fetchDoctors, updateDoctor, deleteDoctor } from '../services/api';
import '../style/manageDoctor.css';
import Notification from '../Components/Notification';

export default function ManageDoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '' });

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const doctorsList = await fetchDoctors();
        setDoctors(doctorsList);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    getDoctors();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!selectedDoctor) return;

    const formData = new FormData();
    formData.append('name', selectedDoctor.name);
    formData.append('hospitalName', selectedDoctor.hospitalName);
    formData.append('hospitalLocation', selectedDoctor.hospitalLocation);
    formData.append('hospitalSpecialities', selectedDoctor.hospitalSpecialities);
    formData.append('contactNumber', selectedDoctor.contactNumber);
    formData.append('email', selectedDoctor.email);
    formData.append('password', selectedDoctor.password);
    formData.append('availability', selectedDoctor.availability);
    formData.append('message', selectedDoctor.message);

    if (selectedDoctor.image) {
      formData.append('image', selectedDoctor.image);
    }

    try {
      const response = await updateDoctor(selectedDoctor._id, formData);

      if (response.success) {
        setNotification({ message: 'Doctor updated successfully!', type: 'success' });
        setDoctors(doctors.map(doc => (doc._id === selectedDoctor._id ? selectedDoctor : doc)));
        setSelectedDoctor(null);
        setTimeout(() => setNotification({ message: '', type: '' }), 2000);
      } else {
        setNotification({ message: 'Failed to update doctor.', type: 'error' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000);
      }
    } catch (error) {
      console.error('Error updating doctor:', error);
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
      setTimeout(() => setNotification({ message: '', type: '' }), 2000);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteDoctor(id);

      if (response.success) {
        setDoctors(doctors.filter(doctor => doctor._id !== id));
        setNotification({ message: 'Doctor deleted successfully!', type: 'success' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000);
      } else {
        setNotification({ message: 'Failed to delete doctor.', type: 'error' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000);
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
      setTimeout(() => setNotification({ message: '', type: '' }), 2000);
    }
  };

  return (
    <div className="manage-doctors-page">
      <h1 className="title">Manage Doctors</h1>
      <Notification message={notification.message} type={notification.type} />

      {selectedDoctor && (
        <div className="update-form">
          <h2>Update Doctor</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label htmlFor="name">Doctor Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={selectedDoctor.name}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, name: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalName">Hospital Name:</label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={selectedDoctor.hospitalName}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, hospitalName: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalLocation">Hospital Location:</label>
              <input
                type="text"
                id="hospitalLocation"
                name="hospitalLocation"
                value={selectedDoctor.hospitalLocation}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, hospitalLocation: e.target.value })}
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
                value={selectedDoctor.hospitalSpecialities}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, hospitalSpecialities: e.target.value })}
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
                value={selectedDoctor.contactNumber}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, contactNumber: e.target.value })}
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
                value={selectedDoctor.email}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, email: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={selectedDoctor.password}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, password: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="availability">
                <input
                  type="checkbox"
                  id="availability"
                  name="availability"
                  checked={selectedDoctor.availability}
                  onChange={(e) => setSelectedDoctor({ ...selectedDoctor, availability: e.target.checked })}
                  className="form-checkbox"
                />
                Available
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                name="message"
                value={selectedDoctor.message}
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, message: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Doctor Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setSelectedDoctor({ ...selectedDoctor, image: e.target.files[0] })}
                className="form-input"
                accept="image/*"
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: '#34A853', color: '#fff', padding: '10px 20px', marginRight: '10px', border: 'none', cursor: 'pointer' }}
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => setSelectedDoctor(null)}
              style={{ padding: '10px 20px', border: 'none', cursor: 'pointer' }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <table className="doctors-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Hospital Name</th>
            <th>Hospital Location</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor._id}>
              <td>{doctor.name}</td>
              <td>{doctor.hospitalName}</td>
              <td>{doctor.hospitalLocation}</td>
              <td>{doctor.contactNumber}</td>
              <td>{doctor.email}</td>
              <td>{doctor.availability ? 'Available' : 'Not Available'}</td>
              <td>
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  style={{ backgroundColor: '#34A853', color: '#fff', padding: '5px 10px', border: 'none', cursor: 'pointer' }}
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(doctor._id)}
                  style={{ backgroundColor: '#EA4335', color: '#fff', padding: '5px 10px', border: 'none', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
