import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

export default function Navbar() {
  return (
     <>
       <div className="nav">
       <Link to={'/'} className='nav_text'>
        <h2 >Home</h2>
       </Link>
       <Link to={'/Student'} className='nav_text'>
        <h2 >Students</h2>
       </Link>
       <Link to={'/Contact'} className='nav_text'>
        <h2 >Contact Us</h2>
       </Link>
       </div>
     </>
  )
}
