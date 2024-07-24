import React from 'react'
import '../style/style.css'
export default function RejectMessage() {
  return (
    <div className='mx-10 my-5 text-black'>
      <div className='text-xl font-semibold mb-2'>To Reject Appointment of Divya Patel send reason</div>
      <form action="" className='serviceBox pl-5 pb-5 rounded-xl'>
        <input type="text" placeholder='Reason' className='my-5 docInput w-4/5'/><br />
        <button className='bg-primary text-secondary px-4 py-2 rounded'>Send</button>
      </form>
    </div>
  )
}
