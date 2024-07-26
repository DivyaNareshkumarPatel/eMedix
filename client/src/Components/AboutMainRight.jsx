import React from 'react';
import image from '../Images/doctor3.png';

export default function AboutMainRight() {
  return (
    <div className="p-5 flex justify-center">
      <img src={image} alt="Doctor" className="rounded-lg max-w-full" />
    </div>
  );
}