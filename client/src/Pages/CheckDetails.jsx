import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AccNavbar from '../Components/AccNavbar';
import CheckDetailsIndi from '../Components/CheckDetailsIndi';
import { getAppointmentById } from '../services/api'; // Import your API function

export default function CheckDetails() {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    getAppointmentById(appointmentId)
      .then(response => {
        setAppointment(response.data);
        console.log('Appointment details:', response.data);
      })
      .catch(error => {
        console.error('Error fetching the appointment details:', error);
      });
  }, [appointmentId]);

  return (
    <div>
      <AccNavbar />
      {appointment ? (
        <CheckDetailsIndi appointment={appointment} />
      ) : (
        <p>Loading appointment details...</p>
      )}
    </div>
  );
}
