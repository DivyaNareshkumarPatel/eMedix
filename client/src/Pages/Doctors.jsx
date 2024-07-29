import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import DoctorMain from '../Components/DoctorMain';
import SearchDoctor from '../Components/SearchDoctor';
import DoctorList from '../Components/DoctorList';
import Footer from '../Components/Footer';

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (query, loc) => {
    setSearchQuery(query);
    setLocation(loc);
  };

  return (
    <div className='overflow-x-hidden bg-secondary'>
      <Navbar />
      <DoctorMain />
      <SearchDoctor onSearch={handleSearch} />
      <DoctorList searchQuery={searchQuery} location={location} />
      <Footer />
    </div>
  );
}
