import React from 'react';
import AboutMainLeft from './AboutMainLeft';
import AboutMainRight from './AboutMainRight';

export default function AboutMain() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center w-full px-5 sm:px-20 bg-light-blue py-10 bg-lightBlue">
      <AboutMainLeft />
      <AboutMainRight />
    </div>
  );
}