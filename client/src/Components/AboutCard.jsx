import React from "react";

export default function AboutCard({ iclass, text }) {
  return (
    <div className="max-w-xs bg-secondary flex flex-col justify-center items-center p-6 m-5 serviceBox rounded-2xl h-80 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="text-primary text-4xl mb-5"><i className={iclass}></i></div>
      <div className="text-black text-center text-sm">{text}</div>
    </div>
  );
}
