import React, { useEffect, useState } from 'react';
import { fetchAppointmentsByUser } from '../services/api';

const UserAppointments = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const data = await fetchAppointmentsByUser(userId);
        console.log('Fetched Appointments:', data); // Log the data
        setAppointments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAppointments();
  }, [userId]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
  if (error) return <div style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>Error: {error}</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#4200FF' }}>Appointments</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {appointments.map((appointment) => (
          <li key={appointment._id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
            {appointment.docId ? (
              <>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Doctor: {appointment.docId.name}</p>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Hospital: {appointment.docId.hospitalName}</p>
              </>
            ) : (
              <p style={{ margin: '5px 0', color: 'red' }}>Doctor information not available</p>
            )}
            <p style={{ margin: '5px 0' }}>Date: {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
            <p style={{ margin: '5px 0' }}>Time: {appointment.appointmentTime}</p>
            <p style={{ margin: '5px 0' }}>Message: {appointment.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAppointments;
