/* eslint-disable no-unused-vars */
import './contact.css';
import { ContactForm } from './ContactForm.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Contact () {
  return (
    <div className='content'>
      <div className='backgroundImage'>
        <div className='contact'>
          <h3><FontAwesomeIcon icon={faEnvelope} /> Get in touch</h3>
        <p>Contact via <FontAwesomeIcon icon={faPhone} />{' '}
          <span className='iconify' data-icon='fa-whatsapp' data-inline='false'/>{' '}+49(0)1737586025</p>
          <p>or message me directly:</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
