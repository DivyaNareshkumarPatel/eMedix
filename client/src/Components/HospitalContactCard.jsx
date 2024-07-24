import React from 'react'

export default function HospitalContactCard({icon, head, line1, line2}) {
  return (
    <div className="flex justify-center items-center p-10 flex-wrap border border-lightGrey rounded-lg bg-primary m-1">
      <div className='text-secondary'>
        <div className="text-2xl">
          {icon}
        </div>
        <div className="text-lightGrey font-semibold mb-1">{head}</div>
        <div className='text-xs mb-1'>{line1}</div>
        <div className='text-xs'>{line2}</div>
      </div>
    </div>
  )
}
