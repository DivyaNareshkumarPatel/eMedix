import React from "react";
import HomeServiceCard from "./HomeServiceCard";
import '../style/style.css'
export default function HomeService() {
  return (
    <div className="flex flex-col items-center mt-8 mb-10">
      <div className="text-2xl font-semibold text-black mb-2">Our Medical Services</div>
      <div className="text-center text-grey mb-5">
        We are dedicated to serve you
        <br />
        best medical services
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <HomeServiceCard c="fa-solid fa-person" text="Physical Treatment"/>
        <HomeServiceCard c="fa-solid fa-user-doctor" text="Direct contact with doctor"/>
        <HomeServiceCard c="fa-solid fa-earth-americas" text="Online Appointment"/>
        <HomeServiceCard c="fa-solid fa-magnifying-glass" text="Search nearby Hospitals"/>
      </div>
    </div>
  );
}
