import './home.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export function Home () {
  const mission = `Learning and mastering a language opens doors both personally and professionally. It takes hard work and commitment for student and teacher alike but it should also be rewarding and fun! I'd love to help you on this journey.`
  
  return (
    <div className='content'>
      <div className='homeContent'>
        <div className='missionStatement'>
          <h2><FontAwesomeIcon icon={faQuoteLeft} /> {mission} <FontAwesomeIcon icon={faQuoteRight} /></h2>
        </div>
        <div className='homeCTA'>
          <div className='callToAction'>
            <h3>Have a look at the services I offer and send me a message if you'd like to work together!</h3>
            <Link to='/services'>
              <button className='ctaHome'> Services </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
