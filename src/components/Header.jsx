import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div className='Header'>
        <Link className='link' to='/'>Customers</Link>
        <Link className='link' to='/add'>Add Customer</Link>
        <a className='src-code' href='https://github.com/tahirdibirovresearch/async-actions' target='_blank'>Source Code</a>
    </div>
  )
}
