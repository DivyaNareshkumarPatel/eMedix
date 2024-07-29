import React from "react";
import '../style/style.css';

export default function DocAccWelcome({ doctorName}) {
  return (
    <div className="bg-secondary mt-5 text-black">
      <div className="ml-10 font-semibold text-xl flex justify-between mr-10">
        <div>
          Welcome, <span className="text-primary">Dr. {doctorName}</span>
        </div>
      </div>
    </div>
  );
}
