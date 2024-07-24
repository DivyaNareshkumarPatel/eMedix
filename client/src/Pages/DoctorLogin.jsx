import React from 'react'
export default function DoctorLogin() {
  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="bg-secondary p-10">
        <div>
          <form action="/docAccount">
            <input type="email" placeholder="email" className="formInput" />
            <br />
            <input
              type="password"
              placeholder="password"
              className="formInput"
            /><br/>
            <button className="w-64 my-2 bg-primary text-secondary h-10">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
