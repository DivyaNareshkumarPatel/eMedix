import React from 'react';

export default function HospitalDiffMainWelcome({hospital}) {
  return (
    <div className='bg-secondary py-16 px-6 md:px-10 lg:px-20'>
      <div className='max-w-4xl mx-auto text-center'>
        <p className='text-primary text-3xl font-bold mb-2'>Welcome to {hospital.name}</p>
        <p className='text-black text-4xl font-extrabold mb-4'>A Great Place to Receive Care</p>
        <p className='text-grey text-base mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aliquid rerum harum, voluptatum natus dignissimos quasi.
        </p>
        <div className='relative inline-block'>
          <img
            src={hospital.displayPhoto}
            alt="Hospital"
            className='rounded-lg shadow-lg object-cover max-w-full h-auto'
          />
        </div>
      </div>
    </div>
  );
}
