import React from 'react';
import '../style/style.css';

export default function RejectMessage() {
  return (
    <div className='mx-8 my-6 text-black'>
      <h2 className='text-2xl font-bold mb-4'>Reject Appointment Request for Divya Patel</h2>
      <form className='serviceBox p-6 rounded-lg bg-lightBlue shadow-md'>
        <div className='mb-4'>
          <label className='block text-lg font-semibold mb-2'>
            Reason for Rejection
          </label>
          <input
            type="text"
            placeholder='Enter reason here'
            className='docInput w-full p-3 rounded-md border border-lightGrey shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition duration-300'
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-primary text-secondary px-6 py-3 rounded-lg shadow hover:bg-primaryDark transition-colors duration-300'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
