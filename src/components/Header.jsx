import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div className='Header'>
        <Link className='link' to='/'>Customers</Link>
        <Link className='link' to='/add'>Add Customer</Link>
        <Link className='src-code' to='https://github.com/tahirdibirovresearch/async-actions'>Source Code</Link>
    </div>
  )
}
