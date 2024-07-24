import React from "react";
import { Link } from "react-router-dom";
export default function PatientAppReq() {
  return (
    <div className="px-10 py-10 text-black">
      <div>
        <div className="text-black mb-5 text-lg font-semibold">
          Appointment request sent
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center serviceBox rounded bg-lightBlue py-2">
            <table className="w-1/2">
              <thead>
                <tr className="text-grey text-base font-thin">
                  <th className="font-normal">Doctor</th>
                  <th className="font-normal">Date</th>
                  <th className="font-normal">Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">10:00 AM</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">10:00 AM</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">10:00 AM</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">10:00 AM</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">10:00 AM</td>
                  <td className="text-center">
                    <Link to="/doctorProfile" className="text-primary">
                      Doctor Profile
                    </Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Dr. XYZ</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">10:00 AM</td>
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
  );
}
