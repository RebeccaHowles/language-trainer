import './services.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faUserTie, faEdit} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function Services () {
  return (
    <div className='content'>
      <div className='backgroundImage'>
        <ul className='services'>
          <li>
            <h3><FontAwesomeIcon icon={faChalkboardTeacher} /> English classes</h3>
            <ul className='classes'>
              <li>
                General English
              </li>
              <li>
                Business English
              </li>
              <li>
                Business skills through English <span> Formal/informal writing, Presentation Skills, Negotiation Skills, Sales, Management Skills, Holding Meetings, Teleconferencing and videoconferencing.</span>
              </li>
              <li>
                Technical English <span> Accountancy, Data Management, Industrial Sector, Sales, Marketing, Finance, Aeronautical industry and more.</span>
              </li>
              <li>
                Exam Preparation<span> Cambridge, Trinity and Aptis</span>
              </li>
              <li>
                Conversation English and general fluency
              </li>
            </ul>
          </li>
          <li>
            <h3><FontAwesomeIcon icon={faUserTie} /> Interview preparation</h3>
            <ul className='interview'>
              <li> Short term practice</li>
            </ul>
          </li>
          <li>
            <h3><FontAwesomeIcon icon={faEdit} /> CV correction </h3>
            <ul className='correction'>
              <li> a once-off service to proofread, correct and better your CV to increase your chances in the job market. The price is €30.</li>
            </ul>
          </li>
          <div className='callToAction'>
            <Link to='/information'>
              <button> More Information</button>
            </Link>
            <Link to='/contact'>
              <button> Contact Me</button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

