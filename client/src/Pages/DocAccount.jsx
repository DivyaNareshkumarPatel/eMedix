import React, { useEffect, useState } from 'react';
import AccNavbar from '../Components/AccNavbar';
import DocAccWelcome from '../Components/DocAccWelcome';
import DocAccAppointment from '../Components/DocAccAppointment';
import DoctorProfileMainPatients from '../Components/DoctorProfileMainPatients';
import { getDoctorAppointments, fetchDoctorById } from '../services/api';
import { getUserToken } from '../services/authService';

export default function DocAccount() {
  const [appointments, setAppointments] = useState([]);
  const [doctorName, setDoctorName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const token = getUserToken('doctorToken');
        console.log(token)
        if (!token) {
          setError('No token found, please login.');
          setLoading(false);
          return;
        }

        // Parse token to get doctor ID
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const doctorId = decodedToken.id // Assuming docId is stored in the token payload
        console.log('Parsed Doctor ID:', doctorId);

        const doctorResponse = await fetchDoctorById(doctorId);
        console.log('Doctor Details Response:', doctorResponse);
        if (doctorResponse.success) {
          setDoctorName(doctorResponse.doctor.name);
        } else {
          setError(doctorResponse.message);
        }

        const appointmentResponse = await getDoctorAppointments(doctorId);
        console.log('Appointments Response:', appointmentResponse);
        if (appointmentResponse.success) {
          setAppointments(appointmentResponse.appointments);
        } else {
          setError(appointmentResponse.message);
        }
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, []);

  return (
    <div>
      <AccNavbar />
      <DocAccWelcome doctorName={doctorName} />
      {loading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DocAccAppointment appointments={appointments} />
      )}
      <DoctorProfileMainPatients />
    </div>
  );
}
