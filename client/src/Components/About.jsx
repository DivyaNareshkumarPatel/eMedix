import React from "react";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <div className="flex flex-col items-center mt-8 mb-10">
      <div className="text-2xl font-semibold text-black mb-6">Our Mission and Services</div>
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl">
        <AboutCard
          iclass="fa-solid fa-trophy"
          text="Our mission is to simplify the process of finding and receiving medical treatment, ensuring everyone has access to the best healthcare possible."
        />
        <AboutCard
          iclass="fa-solid fa-crosshairs"
          text="eMedix was founded with the vision of making healthcare more accessible and convenient. Inspired by the challenges people face in finding quality medical care, we created a platform that connects users with top-tier hospitals effortlessly."
        />
        <AboutCard
          iclass="fa-solid fa-gears"
          text="eMedix offers a seamless way to book appointments, receive medical advice, and connect with a network of trusted hospitals. Whether you need an online consultation or an in-person visit, we have you covered."
        />
        <AboutCard
          iclass="fa-solid fa-handshake"
          text="Register on eMedix, search for hospitals based on your needs, book an appointment, and manage your healthcare journey with ease."
        />
      </div>
    </div>
  );
}
