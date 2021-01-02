import React, { useState } from "react";
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navigation () {
  
  const isMenuOpen = false;

  return (
    <nav className='navigation'>
      <Link to='/'>
        <p className='logo'><FontAwesomeIcon icon={faHome} />  Rebecca Howles</p>
      </Link>
      <ul className='navlinks' >
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
        <Link to='/services'>
          <li>Services</li>
        </Link>
        <Link to='/testimonials'>
          <li>Testimonials</li>
        </Link>
      </ul>
      <div className='bars'><FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
}


export default Navigation;
