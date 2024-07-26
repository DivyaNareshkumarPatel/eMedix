import React from 'react';
import Navbar from '../Components/Navbar';
import HospitalDiffMain from '../Components/HospitalDiffMain';
import HospitalDiffMainWelcome from '../Components/HospitalDiffMainWelcome';
import HospitalDocList from '../Components/HospitalDocList';
import HospitalContact from '../Components/HospitalContact';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

export default function Hospital() {
  const location = useLocation();
  const hospitalData = location.state || {};

  return (
    <div className='overflow-x-hidden h-screen'>
      <Navbar/>
      <HospitalDiffMain hospital={hospitalData}/>
      <HospitalDiffMainWelcome hospital={hospitalData}/>
      <HospitalDocList hospital={hospitalData}/>
      <HospitalContact hospital={hospitalData}/>
      <Footer/>
    </div>
  );
}
