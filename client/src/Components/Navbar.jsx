import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import "../style/style.css";
import { getUserToken } from "../services/authService"; // Ensure this service exists

export default function Navbar() {
  const [boxWidth, setBoxWidth] = useState("w-0");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserStatus = () => {
      const token = getUserToken();
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkUserStatus();
  }, []);

  function openNavBox() {
    setBoxWidth("w-96");
  }
  function closeBox() {
    setBoxWidth("w-0");
  }

  const boxClass = `fixed top-0 right-0 bg-secondary flex flex-col h-full nav-fixed-box overflow-hidden ${boxWidth}`;

  return (
    <div className="bg-secondary">
      <div>
        <div className={boxClass}>
          <div className="p-2">
            <i className="fa-solid fa-xmark cursor-pointer" onClick={closeBox}></i>
          </div>
          <div className="px-10 py-1">
            <div className="text-primary text-xl font-semibold">
              <Link to="/">eMedix</Link>
            </div>
            <div>
              <hr className="border-t-lightGrey w-full bottom-2" />
            </div>
            <div className="flex flex-col justify-evenly h-48 px-24 my-5 text-black">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/hospitals">Hospitals</Link>
              </div>
              <div>
                <Link to="/doctors">Doctors</Link>
              </div>
              <div className="overflow-hidden w-28">
                <Link to="/about">About us</Link>
              </div>
              {/* <div className="overflow-hidden w-28">
                <Link>Contact us</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-28">
        <div className="flex justify-between align-middle w-10/12">
          <div className="text-primary text-xl font-semibold">
            <Link to="/">eMedix</Link>
          </div>
          <div className="xl:flex justify-between align-middle w-5/12 hidden text-black">
            <div>
              <Link to="/" className="text-sm">Home</Link>
            </div>
            <div>
              <Link className="text-sm" to="/hospitals">Hospitals</Link>
            </div>
            <div>
              <Link className="text-sm" to="/doctors">Doctors</Link>
            </div>
            <div>
              <Link className="text-sm" to="/about">About us</Link>
            </div>
            {/* <div>
              <Link className="text-sm">Contact us</Link>
            </div> */}
          </div>
          <div className="flex justify-between align-middle w-1/12 mr-20">
            {isLoggedIn ? (
              <div className="flex items-center">
                <Link to="/patientAcc" className="text-primary border-primary border-2 px-6 py-1 rounded text-sm">
                  <i className="fa-solid fa-user"></i>
                </Link>
              </div>
            ) : (
              <Link to="/login" className="text-primary border-primary border-2 px-6 py-1 rounded text-sm">
                Login
              </Link>
            )}
            <div className="ml-5">
              <i className="fa-solid fa-bars xl:hidden cursor-pointer" onClick={openNavBox}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
