import React from 'react';
import '../style/style.css';

export default function HomeServiceCard({ text, c }) {
  const iclass = `${c} text-4xl text-primary mb-4`;

  return (
    <div className="w-64 bg-secondary flex flex-col items-center p-6 m-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className={iclass}></div>
      <div className="text-black text-center text-sm font-medium">{text}</div>
    </div>
  );
}
