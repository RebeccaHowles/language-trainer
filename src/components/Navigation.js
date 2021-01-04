import React from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function Navigation () {
  return (
    <nav className='navigation'>
      <Link to='/'>
        <div className='logo'><FontAwesomeIcon icon={faHome} />  Rebecca Howles</div>
      </Link>
      <ul className='navlinks'>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/services'>
          <li>Services</li>
        </Link>
        <Link to='/information'>
          <li>Information</li>
        </Link>
        <Link to='/testimonials'>
          <li>Testimonials</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
      <div onClick={toggleNavigation} className='bars'><FontAwesomeIcon id='icon' icon={faBars} /> </div>
    </nav>
  );
}

function toggleNavigation () {
  const navlinks = document.querySelector('.navlinks');
  if (navlinks.style.display === 'block') {
    navlinks.style.display = 'none'
  } else {
    navlinks.style.display = 'block'
  }
}
