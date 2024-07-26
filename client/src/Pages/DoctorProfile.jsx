import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import DoctorProfileMain from '../Components/DoctorProfileMain';
import DoctorProfileMainAppointment from '../Components/DoctorProfileMainAppointment';
import Footer from '../Components/Footer';

export default function DoctorProfile() {
  const location = useLocation();
  const doctor = location.state;

  if (!doctor) {
    return <Navigate to="/" />;
  }

  const { name, specialty, hospital, location: doctorLocation, image, id } = doctor;

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <DoctorProfileMain
        name={name}
        specialty={specialty}
        hospital={hospital}
        location={doctorLocation}
        image={image}
      />
      <DoctorProfileMainAppointment docId={id}/>
      <Footer />
    </div>
  );
}
