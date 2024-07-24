import React from 'react'
import { Link } from 'react-router-dom'
export default function AccNavbar() {
  return (
    <div className="bg-secondary serviceBox">
      <div className="flex items-center h-14">
        <div className="flex justify-between">
          <div className="text-primary text-xl font-semibold mx-10">
            <Link to="/">eMedix</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
