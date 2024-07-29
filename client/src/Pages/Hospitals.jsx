import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import HospitalMain from '../Components/HospitalMain.'
import SearchHospital from '../Components/SearchHospital';
import HospitalList from '../Components/HospitalList';
import Footer from '../Components/Footer';

export default function Hospitals() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HospitalMain />
      <SearchHospital setSearchQuery={setSearchQuery} setLocation={setLocation} />
      <HospitalList searchQuery={searchQuery} location={location} />
      <Footer />
    </div>
  );
}
