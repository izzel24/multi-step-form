import React from 'react'

export default function PersonalInfo() {
  return (
    <div>
      <h1 className='bold title m-blue'>Personal info</h1>
      <span className='regular paragraph c-gray'>Please provide your name, email address, and phone number</span>
      <div className='input'>
        <span className='regular m-blue'>Name</span>
        <input type="text" placeholder='e.g. Stephen King' />
      </div>
      <div className='input'>
        <span className='regular m-blue'>Email Address</span>
        <input type="text" placeholder='e.g. stephenking@lorem.com' />
      </div>
      <div className='input'>
        <span className='regular m-blue'>Phone Number</span>
        <input type="text" placeholder='e.g. +1 234 567 890' />
      </div>
      

      
      
    </div>
  )
}
