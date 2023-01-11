import React from 'react'
import './AddPage.jsx'
import './AddPage.css'

export const AddPage = () => {
  return (
    <div className='AddPage'>
        <div className="add-form">
            <h1>Add Post</h1>
            <input placeholder='Company name' type="text" className="company-name" />
            <input placeholder='Contact title' type="text" className="contact-title" />
            <input placeholder='Contact name' type="text" className="contact-name" />
            <button className="add-customer">Add Customer</button>
        </div>
    </div>
  )
}
