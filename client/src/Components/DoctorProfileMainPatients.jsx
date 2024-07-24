import React from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
export default function DoctorProfileMainPatients() {
  return (
    <div className="px-10 pb-10 text-black">
      <div>
        <div className="text-black mb-5 text-lg font-semibold">
          Your Patients
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center serviceBox rounded bg-lightBlue py-2">
            <table className="w-1/2">
              <thead>
                <tr className="text-grey text-base font-thin">
                  <th className="font-normal">Name</th>
                  <th className="font-normal">Phone</th>
                  <th className="font-normal">Email</th>
                  <th className="font-normal"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">6355079763</td>
                  <td className="text-center">
                    divyanareshkumarPatel@gmail.com
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Message</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">6355079763</td>
                  <td className="text-center">
                    divyanareshkumarPatel@gmail.com
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Message</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">6355079763</td>
                  <td className="text-center">
                    divyanareshkumarPatel@gmail.com
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Message</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">6355079763</td>
                  <td className="text-center">
                    divyanareshkumarPatel@gmail.com
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Message</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">6355079763</td>
                  <td className="text-center">
                    divyanareshkumarPatel@gmail.com
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Message</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">6355079763</td>
                  <td className="text-center">
                    divyanareshkumarPatel@gmail.com
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Message</Link>
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
