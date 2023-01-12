import React, { useState } from 'react'
import './AddPage.jsx'
import './AddPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { uid } from 'uid'
import { trig } from '../redux/actionCreators.js'
import { useNavigate } from 'react-router-dom'

export const AddPage = () => {

  const [compName, setCompName] = useState('')
  const [contName, setContName] = useState('')
  const [contTitle, setContTitle] = useState('')
  const trigger = useSelector(state => state?.trigger)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const compNameHandler = event => {
      setCompName(event.target.value)
  }

  const contNameHandler = event => {
    setContName(event.target.value)
  }

  const contTitleHandler = event => {
    setContTitle(event.target.value)
  }

  const send = async () =>{
    await fetch('https://northwind.vercel.app/api/customers', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        companyName: compName,
        contactName: contName,
        contactTitle: contTitle,
        id: uid()
      })

    })

    dispatch(trig())
    navigate('/')

  }

  return (
    <div className='AddPage'>
        <div className="add-form">
            <h1>Add Post</h1>
            <input onChange={compNameHandler} placeholder='Company name' type="text" className="company-name" />
            <input onChange={contTitleHandler} placeholder='Contact title' type="text" className="contact-title" />
            <input onChange={contNameHandler} placeholder='Contact name' type="text" className="contact-name" />
            <button onClick={send} className="add-customer">Add Customer</button>
        </div>
    </div>
  )
}
