import React from "react";
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function Mobile ({links}) {
  
  function toggleNavigation () {
    const navlinks = document.querySelector('.mobileNavlinks');
    if (navlinks.style.display === 'block') {
      navlinks.style.display = 'none'
    } else {
      navlinks.style.display = 'block'
    }
  }

  return (
    <nav className='mobileNav'>
      <ul className='mobileNavlinks'>
      {links.map(link =>
        <li className='mobileNavlink'>
          <Link to={link.path} onClick={toggleNavigation}>
            {link.text}
          </Link>
        </li>
      )}
      </ul>
      <div className='bars' onClick={toggleNavigation}><FontAwesomeIcon icon={faBars} /></div>
    </nav>
  );
}

