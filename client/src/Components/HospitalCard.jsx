import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Images/hospital.png'
export default function HospitalCard() {
  return (
    <div className="m-5 serviceBox p-8 rounded-2xl">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center flex-col text-center">
          <div>
            <div className="bg-primary h-36 flex w-52 my-1 justify-center items-center rounded-xl">
              <img src={image} className="h-40 -mt-4" alt="" />
            </div>
          </div>
          <div className="text-black text-sm">Xyz</div>
          <Link>
            <div className="text-primary text-sm">
            <i className="fa-solid fa-location-dot"></i> xyz
            </div>
          </Link>
          <div className="my-3">
            <Link to="/hospital" className="text-xs text-primary border-primary border px-4 py-1 rounded-lg">Visit Hospital</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
