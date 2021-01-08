import React from "react";
import './components.css';
import { Link } from 'react-router-dom';

export function Navigation ({links}) {

  return (
    <nav className='navigation'>
      <ul className='navlinks'>
      {links.map(link =>
        <li>
          <Link to={link.path}>
            {link.text}
          </Link>
        </li>
      )}
      </ul>
    </nav>
  );
}

