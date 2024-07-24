import React from "react";
import { Link } from "react-router-dom";
export default function PatientMessage() {
  return (
    <div className="px-10 text-black py-10">
      <div>
        <div className="text-black mb-5 text-lg font-semibold">
          Messages By Doctor
        </div>
        <div className="">
          <div className="flex flex-col justify-center serviceBox rounded bg-lightBlue py-2 px-5 pb-5">
            <div className="pt-5 pb-1 font-semibold text-primary"><Link to="/doctorProfile">Dr. XYZ</Link></div>
            <div className="bg-secondary p-5 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempora voluptatem nam ad vel dolorem nisi. Porro reprehenderit
              fugiat non natus? Ipsam, autem voluptas nesciunt iusto delectus
              eos illum eligendi.
            </div>
            <div className="pt-5 pb-1 font-semibold text-primary"><Link to="/doctorProfile">Dr. XYZ</Link></div>
            <div className="bg-secondary p-5 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempora voluptatem nam ad vel dolorem nisi. Porro reprehenderit
              fugiat non natus? Ipsam, autem voluptas nesciunt iusto delectus
              eos illum eligendi.
            </div>
            <div className="pt-5 pb-1 font-semibold text-primary"><Link to="/doctorProfile">Dr. XYZ</Link></div>
            <div className="bg-secondary p-5 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempora voluptatem nam ad vel dolorem nisi. Porro reprehenderit
              fugiat non natus? Ipsam, autem voluptas nesciunt iusto delectus
              eos illum eligendi.
            </div>
            <div className="pt-5 pb-1 font-semibold text-primary"><Link to="/doctorProfile">Dr. XYZ</Link></div>
            <div className="bg-secondary p-5 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempora voluptatem nam ad vel dolorem nisi. Porro reprehenderit
              fugiat non natus? Ipsam, autem voluptas nesciunt iusto delectus
              eos illum eligendi.
            </div>
            <div className="pt-5 pb-1 font-semibold text-primary"><Link to="/doctorProfile">Dr. XYZ</Link></div>
            <div className="bg-secondary p-5 rounded-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempora voluptatem nam ad vel dolorem nisi. Porro reprehenderit
              fugiat non natus? Ipsam, autem voluptas nesciunt iusto delectus
              eos illum eligendi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
