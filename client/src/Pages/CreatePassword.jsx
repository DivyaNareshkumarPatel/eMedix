import React from 'react'
import "../style/style.css";
export default function CreatePassword() {
  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="bg-secondary p-10">
        <div>
          <form action="/login">
            <input type="password" placeholder="new password" className="formInput" /><br />
            <input type="password" placeholder="confirm password" className="formInput" /><br />
            <button className="w-64 bg-primary my-2 text-secondary h-10">
              CHANGE PASSWORD
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
