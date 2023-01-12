import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actionCreators'
import { PuffLoader } from 'react-spinners'
import './Customers.css'

export const Customers = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state?.posts)


  useEffect(() => {
    dispatch(getData())
  }, [])


  const deleteHandler = ()=>{

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
                <td><button>Delete</button></td>
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
