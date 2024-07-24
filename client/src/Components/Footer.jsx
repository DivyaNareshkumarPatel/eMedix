import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-lightGrey flex justify-center items-center p-10">
      <div>
        <div className="text-primary text-3xl font-semibold text-center mb-5">
          <Link>eMedix</Link>
        </div>
        <div className="text-center text-grey mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit<br></br>. Sit rhoncus
          imperdiet nisi.
        </div>
        <div className="flex justify-center items-center text-black">
          <div className="m-3">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="m-3">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className="m-3">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="m-3">
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
