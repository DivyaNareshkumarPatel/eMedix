import React from 'react'
import { Link } from 'react-router-dom'
export default function PatientRequestRejected() {
  return (
    <div className="px-10 text-black pb-10">
      <div>
        <div className="text-black mb-5 text-lg font-semibold">
          Request Rejected
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center serviceBox rounded bg-lightBlue py-2">
            <table className="w-1/2">
              <thead>
                <tr className="text-grey text-base font-thin">
                  <th className="font-normal">Doctor</th>
                  <th className="font-normal">Reason</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">Busy</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">Busy</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">Busy</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">Busy</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">Busy</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">Busy</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
