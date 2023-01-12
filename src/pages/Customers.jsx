import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actionCreators'
import './Customers.css'

export const Customers = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.posts)

  useEffect(()=>{
      dispatch(getData())    
  },[])

  return (
    <div>Customers</div>
  )
}
