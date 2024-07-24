import React from "react";
import '../style/style.css'
export default function DocAccWelcome() {
  return (
    <div className="bg-secondary mt-5 text-black">
      <div className="ml-10 font-semibold text-xl flex justify-between mr-10">
        <div>
          Welcome, <span className="text-primary">Dr. XYZ</span>
        </div>
        <div>
          <span className="text-base font-normal mr-2 inline-block">Availability</span>
          <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
