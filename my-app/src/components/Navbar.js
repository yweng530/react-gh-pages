import React, {useState} from 'react';
import Logo from '../assets/siebel.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} />
      </div>
      <div className='rightSide'>
        <Link to='/'> Home </Link>
        <Link to='/introduction'> Introduction </Link>
        <Link to='/data'> Data </Link>
        <Link to='/contact'> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar
