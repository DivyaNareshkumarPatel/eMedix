import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-lightGrey py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Brand Name */}
        <div className="text-primary text-4xl font-bold mb-6">
          <Link to="/" className="hover:underline">eMedix</Link>
        </div>

        {/* Description */}
        <div className="text-grey mb-6">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus
            imperdiet nisi.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center mb-6">
          <a href="https://www.instagram.com" className="mx-3 text-2xl text-black hover:text-primary transition-colors" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" className="mx-3 text-2xl text-black hover:text-primary transition-colors" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" className="mx-3 text-2xl text-black hover:text-primary transition-colors" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com" className="mx-3 text-2xl text-black hover:text-primary transition-colors" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        {/* Footer Note */}
        <div className="text-grey text-sm">
          <p>© {new Date().getFullYear()} eMedix. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
