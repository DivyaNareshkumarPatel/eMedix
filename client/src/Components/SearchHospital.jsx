import React from "react";
import "../style/style.css";
export default function SearchHospital() {
  return (
    <div className="flex justify-center items-center bg-secondary z-10 -mt-9">
      <div className="flex justify-center max-w-7xl flex-col serviceBox p-10 rounded-3xl mx-10">
        <form
          action=""
          className="flex justify-between items-center mb-5 flex-wrap"
        >
          <div className="flex justify-center items-center my-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search Hospital"
              className="docInput"
            />
          </div>
          <div className="flex justify-center items-center my-2">
            <i class="fa-solid fa-location-dot"></i>
            <input
              type="text"
              placeholder="Set Location"
              className="docInput"
            />
          </div>
          <div className="flex justify-center items-center my-2">
            <button className="bg-primary text-secondary px-5 py-2 rounded-2xl">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
        <div>
          <div className="text-base text-black font-bold mb-3">
            You may be looking for
          </div>
          <div className="flex justify-evenly items-center text-black text-xs flex-wrap">
            <div className="bg-lightGrey text-black mx-1 px-2 rounded-2xl my-1">
              Family medicine
            </div>
            <div className="bg-lightGrey text-black mx-1 px-2 rounded-2xl my-1">
              Family medicine
            </div>
            <div className="bg-lightGrey text-black mx-1 px-2 rounded-2xl my-1">
              Family medicine
            </div>
            <div className="bg-lightGrey text-black mx-1 px-2 rounded-2xl my-1">
              Family medicine
            </div>
            <div className="bg-lightGrey text-black mx-1 px-2 rounded-2xl my-1">
              Family medicine
            </div>
            <div className="bg-lightGrey text-black mx-1 px-2 rounded-2xl my-1">
              Family medicine
            </div>
            <div className="bg-primary text-secondary mx-2 px-2 rounded-2xl cursor-pointer">
              More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
