import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, trig } from '../redux/actionCreators'
import { PuffLoader } from 'react-spinners'
import './Customers.css'

export const Customers = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state?.posts)
  const trigger = useSelector(state => state?.trigger)


  useEffect(() => {
    dispatch(getData())
  }, [trigger])


  const deleteHandler = async (event)=>{
    console.log(event.target.id)
      await fetch(`https://northwind.vercel.app/api/customers/${event.target.id}`, {
        method: 'DELETE'
      })
      dispatch(trig())
  }

  return (
    <div className='customers'>
      {Boolean(data) ?
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Contact Title</th>
              <th>Contact Name</th>
              <th>Company Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.contactTitle}</td>
                <td>{item.contactName}</td>
                <td>{item.companyName}</td>
                <td><button onClick={deleteHandler} id={item.id}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table> : <div className="loader">
          <PuffLoader
            color="red"
            size={400}
            speedMultiplier={3}
          />
        </div>
      }
    </div>
  )
}
