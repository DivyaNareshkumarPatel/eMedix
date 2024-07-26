import React from "react";
import HomeServiceCard from "./HomeServiceCard";
import '../style/style.css'

export default function HomeService() {
  return (
    <div className="flex flex-col items-center mt-12 mb-16 px-6">
      <div className="text-3xl font-bold text-black mb-3">Our Medical Services</div>
      <div className="text-center text-grey mb-8 text-lg">
        We are dedicated to serving you with the best medical services available.
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <HomeServiceCard c="fa-solid fa-person" text="Physical Treatment"/>
        <HomeServiceCard c="fa-solid fa-user-doctor" text="Direct Contact with Doctor"/>
        <HomeServiceCard c="fa-solid fa-earth-americas" text="Online Appointment"/>
        <HomeServiceCard c="fa-solid fa-magnifying-glass" text="Search Nearby Hospitals"/>
      </div>
    </div>
  );
}
