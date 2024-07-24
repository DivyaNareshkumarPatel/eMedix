import React from "react";
import "../style/style.css";
export default function CheckDetailsIndi() {
  return (
    <div className="mx-10 my-5 text-black">
      <div className="text-xl font-semibold mb-2">Details of Divya Patel</div>
      <div className="flex justify-center items-center serviceBox px-5 py-5 rounded">
        <div>
          <div>
            <div>
              <span className="font-semibold mr-2">First Name:</span>
              <span>Divya</span>
            </div>
            <div>
              <span className="font-semibold mr-2">Last Name:</span>
              <span>Patel</span>
            </div>
          </div>
          <div>
            <div>
              <span className="font-semibold mr-2">Email:</span>
              <span>divyanareshkumarPatel@gmail.com</span>
            </div>
            <div>
              <span className="font-semibold mr-2">Phone:</span>
              <span>6355079763</span>
            </div>
          </div>
          <div>
            <span className="font-semibold mr-2">Age:</span>
            <span>20</span>
          </div>
          <div>
            <div className="text-lg font-bold mt-3">
              Requested Appointment Date and time:
            </div>
            <div>
              <div>
                <span className="font-semibold mr-2">Date: </span>
                <span>28/7</span>
              </div>
              <div>
                <span className="font-semibold mr-2">Time: </span>
                <span>4:00pm</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg font-bold mt-3">Message by patient:</div>
            <div className="mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              repudiandae saepe odio facere sed doloremque consequatur, odit
              sint ipsum ullam minus adipisci harum reiciendis fugiat officiis
              doloribus perferendis nulla sapiente!
            </div>
          </div>
          <form action="">
            <div>
              <div className="text-lg font-bold mt-3">To accept request send date, time and message</div>
              <input type="time" name="" id="" className="docInput"/><br />
              <input type="date" className="docInput"/>
              <textarea
                type="text"
                placeholder="Message"
                className="block my-2 message rounded mt-3"
                cols={30}
                rows={5}
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="block my-2 mx-4 bg-primary text-secondary px-4 py-2 rounded">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
