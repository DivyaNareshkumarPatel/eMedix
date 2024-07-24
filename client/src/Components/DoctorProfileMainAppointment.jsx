import React from 'react'
import '../style/style.css'
export default function DoctorProfileMainAppointment() {
  return (
    <div>
      <div className='flex justify-center items-center flex-col mx-10'>
        <div className='text-black text-3xl font-semibold mb-5'>Book An Appointment</div>
        <div className='flex flex-col justify-center items-center'>
            <div className='serviceBox px-20 py-10 mb-10 rounded-xl'>
                <form action="">
                    <div className='flex flex-wrap'>
                        <input type="text" placeholder='First Name' className='block my-2 mx-4 docInput'/>
                        <input type="text" placeholder='Last Name' className='block my-2 mx-4 docInput'/>
                    </div>
                    <div className='flex flex-wrap'>
                        <input type="email" placeholder='Email' className='block my-2 mx-4 docInput'/>
                        <input type="number" placeholder='Phone' className='block my-2 mx-4 docInput'/>
                    </div>
                    <div className='mx-4 mt-3'>
                        Age
                    </div>
                    <div className='flex flex-wrap'>
                        <input type="date" placeholder='age' className='block my-2 mx-4 docInput'/>
                    </div>
                    <div className='mx-4 mt-3'>
                        Date and time for appointment:
                    </div>
                    <div className='flex flex-wrap'>
                        <input type="date" placeholder='Date' className='block my-2 mx-4 docInput'/>
                        <input type="time" placeholder='Time' className='block my-2 mx-4 docInput'/>
                    </div>
                    <div className='flex flex-wrap mt-3'>
                        <label htmlFor="gender" className='block my-2 mx-4'>Gender</label>
                        <input type="radio" name="gender" className='block my-2 mx-4 cursor-pointer'/> <p className='block my-2'>Male</p>
                        <input type="radio" name="gender" className='block my-2 mx-4 cursor-pointer'/> <p className='block my-2'>Female</p>
                        <input type="radio" name="gender" className='block my-2 mx-4 cursor-pointer'/> <p className='block my-2'>other</p>
                    </div>
                    <div>
                        <textarea type="text" placeholder='Message' className='block my-2 mx-4 message rounded' cols={30} rows={5} />
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <button className='block my-2 mx-4 bg-primary text-secondary px-4 py-2 rounded'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
