import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

export default function DocAccAppointment() {
  return (
    <div className="px-10 text-black pb-10">
      <div>
        <div className="text-black mb-5 text-lg font-semibold">
          Appointment request sent
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center serviceBox rounded bg-lightBlue py-2">
            <table className="w-1/2">
              <thead>
                <tr className="text-grey text-base font-thin">
                  <th className="font-normal">Name</th>
                  <th className="font-normal">Date</th>
                  <th className="font-normal">Approval</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">
                    <Link to="/checkDetails"><i className="fa-solid fa-check bg-green text-secondary h-6 w-6 rounded-full mr-1 inline-flex justify-center items-center cursor-pointer"></i>{" "}</Link>
                    <Link to="/rejectApp"><i className="fa-solid fa-xmark text-secondary h-6 w-6 inline-flex justify-center items-center rounded-full ml-1 bg-red cursor-pointer"></i></Link>
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Check details</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">
                  <Link to="/checkDetails"><i className="fa-solid fa-check bg-green text-secondary h-6 w-6 rounded-full mr-1 inline-flex justify-center items-center cursor-pointer"></i>{" "}</Link>
                  <Link to="/rejectApp"><i className="fa-solid fa-xmark text-secondary h-6 w-6 inline-flex justify-center items-center rounded-full ml-1 bg-red cursor-pointer"></i></Link>
                  </td>
                  <td className="text-center">
                    <Link className="text-primary">Check details</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">
                  <Link to="/checkDetails"><i className="fa-solid fa-check bg-green text-secondary h-6 w-6 rounded-full mr-1 inline-flex justify-center items-center cursor-pointer"></i>{" "}</Link>
                  <Link to="/rejectApp"><i className="fa-solid fa-xmark text-secondary h-6 w-6 inline-flex justify-center items-center rounded-full ml-1 bg-red cursor-pointer"></i></Link>
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Check details</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">
                  <Link to="/checkDetails"><i className="fa-solid fa-check bg-green text-secondary h-6 w-6 rounded-full mr-1 inline-flex justify-center items-center cursor-pointer"></i>{" "}</Link>
                  <Link to="/rejectApp"><i className="fa-solid fa-xmark text-secondary h-6 w-6 inline-flex justify-center items-center rounded-full ml-1 bg-red cursor-pointer"></i></Link>
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Check details</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">
                  <Link to="/checkDetails"><i className="fa-solid fa-check bg-green text-secondary h-6 w-6 rounded-full mr-1 inline-flex justify-center items-center cursor-pointer"></i>{" "}</Link>
                  <Link to="/rejectApp"><i className="fa-solid fa-xmark text-secondary h-6 w-6 inline-flex justify-center items-center rounded-full ml-1 bg-red cursor-pointer"></i></Link>
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Check details</Link>
                  </td>
                </tr>
                <tr className="bg-secondary h-10 table-row border-lightGrey border">
                  <td className="text-center">Divya Patel</td>
                  <td className="text-center">28/7</td>
                  <td className="text-center">
                  <Link to="/checkDetails"><i className="fa-solid fa-check bg-green text-secondary h-6 w-6 rounded-full mr-1 inline-flex justify-center items-center cursor-pointer"></i>{" "}</Link>
                  <Link to="/rejectApp"><i className="fa-solid fa-xmark text-secondary h-6 w-6 inline-flex justify-center items-center rounded-full ml-1 bg-red cursor-pointer"></i></Link>
                  </td>
                  <td className="text-center">
                    <Link to="/checkDetails" className="text-primary">Check details</Link>
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
