/* eslint-disable no-unused-vars */
import './contact.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Contact () {
  return (
    <div className='content'>
      <div className='backgroundImage'>
        <div className='contact'>
        <p><FontAwesomeIcon icon={faPhone} />{' '}
          <span class='iconify' data-icon='fa-whatsapp' data-inline='false'/>{' '}00491737586025</p>
          <p><FontAwesomeIcon icon={faEnvelope} />{' '}rebeccasvoice@gmail.com</p>
          <div className='callToAction'>
            <Link to='/services'>
              <button> Services </button>
            </Link>
            <Link to='/information'>
              <button> Information </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
