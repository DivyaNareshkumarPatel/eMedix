import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";
import { getUserToken } from "../services/authService";

export default function Navbar() {
  const [boxWidth, setBoxWidth] = useState("w-0");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserStatus = () => {
      const token = getUserToken();
      setIsLoggedIn(!!token);
    };

    checkUserStatus();
  }, []);

  const openNavBox = () => setBoxWidth("w-96");
  const closeBox = () => setBoxWidth("w-0");

  const boxClass = `fixed top-0 right-0 bg-secondary flex flex-col h-full nav-fixed-box overflow-hidden transition-all duration-300 ${boxWidth}`;

  return (
    <div className="bg-secondary">
      <div className={boxClass}>
        <div className="p-2">
          <i 
            className="fa-solid fa-xmark cursor-pointer text-primary" 
            onClick={closeBox} 
            aria-label="Close menu"
          ></i>
        </div>
        <div className="px-8 py-4">
          <div className="text-primary text-2xl font-bold mb-4">
            <Link to="/">eMedix</Link>
          </div>
          <hr className="border-t-lightGrey mb-4" />
          <div className="flex flex-col space-y-4 text-lg text-black">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/hospitals" className="hover:text-primary">Hospitals</Link>
            <Link to="/doctors" className="hover:text-primary">Doctors</Link>
            <Link to="/about" className="hover:text-primary">About Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center h-16 px-6 md:px-12 bg-secondary">
        <div className="text-primary text-2xl font-bold">
          <Link to="/">eMedix</Link>
        </div>
        <div className="hidden xl:flex space-x-6 text-black text-sm">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/hospitals" className="hover:text-primary">Hospitals</Link>
          <Link to="/doctors" className="hover:text-primary">Doctors</Link>
          <Link to="/about" className="hover:text-primary">About Us</Link>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Link 
              to="/patient-acc" 
              className="text-primary border-primary border-2 px-4 py-2 rounded text-sm flex items-center hover:bg-primary hover:text-secondary transition"
              aria-label="Go to account page"
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="text-primary border-primary border-2 px-4 py-2 rounded text-sm flex items-center hover:bg-primary hover:text-secondary transition"
              aria-label="Login"
            >
              Login
            </Link>
          )}
          <i 
            className="fa-solid fa-bars xl:hidden cursor-pointer text-primary" 
            onClick={openNavBox} 
            aria-label="Open menu"
          ></i>
        </div>
      </div>
    </div>
  );
}
