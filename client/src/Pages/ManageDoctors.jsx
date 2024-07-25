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
    formData.append('hospitalSpecialities', selectedDoctor.hospitalSpecialities);
    formData.append('contactNumber', selectedDoctor.contactNumber);
    formData.append('email', selectedDoctor.email);

    if (selectedDoctor.image) {
      formData.append('image', selectedDoctor.image);
    }

    try {
      const response = await updateDoctor(selectedDoctor.id, formData);

      if (response.success) {
        setNotification({ message: 'Doctor updated successfully!', type: 'success' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000); // Hide notification after 2 seconds
      } else {
        setNotification({ message: 'Failed to update doctor.', type: 'error' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000); // Hide notification after 2 seconds
      }
    } catch (error) {
      console.error('Error updating doctor:', error);
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
      setTimeout(() => setNotification({ message: '', type: '' }), 2000); // Hide notification after 2 seconds
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteDoctor(id);

      if (response.success) {
        setDoctors(doctors.filter(doctor => doctor._id !== id));
        setNotification({ message: 'Doctor deleted successfully!', type: 'success' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000); // Hide notification after 2 seconds
      } else {
        setNotification({ message: 'Failed to delete doctor.', type: 'error' });
        setTimeout(() => setNotification({ message: '', type: '' }), 2000); // Hide notification after 2 seconds
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
      setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
      setTimeout(() => setNotification({ message: '', type: '' }), 2000); // Hide notification after 2 seconds
    }
  };

  return (
    <div className="manage-doctors-page">
      <h1 className="title">Manage Doctors</h1>
      <Notification message={notification.message} type={notification.type} />
      <div className="doctors-list">
        {doctors.map(doctor => (
          <div key={doctor._id} className="doctor-item">
            <h2>{doctor.name}</h2>
            <p>{doctor.hospitalSpecialities}</p>
            <p>{doctor.contactNumber}</p>
            <p>{doctor.email}</p>
            {doctor.image && <img src={doctor.image} alt={doctor.name} className="doctor-image" />}
            <button onClick={() => setSelectedDoctor(doctor)}>Update</button>
            <button onClick={() => handleDelete(doctor._id)}>Delete</button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <form onSubmit={handleUpdate} className="update-form">
          <h2>Update Doctor</h2>
          <div className="form-group">
            <label htmlFor="name">Doctor Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={selectedDoctor.name}
              onChange={e => setSelectedDoctor({ ...selectedDoctor, name: e.target.value })}
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
              onChange={e => setSelectedDoctor({ ...selectedDoctor, hospitalSpecialities: e.target.value })}
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
              onChange={e => setSelectedDoctor({ ...selectedDoctor, contactNumber: e.target.value })}
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
              onChange={e => setSelectedDoctor({ ...selectedDoctor, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Doctor Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={e => setSelectedDoctor({ ...selectedDoctor, image: e.target.files[0] })}
              accept="image/*"
            />
          </div>
          <button type="submit">Update Doctor</button>
        </form>
      )}
    </div>
  );
}
