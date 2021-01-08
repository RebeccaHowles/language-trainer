import './about.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';

export function About () {
  return (
    <div className='content'>
      <div className='backgroundImage'>
        <div className='aboutWapper'>
          <div className='video'>
            <ReactPlayer
              playsInline
              fluid={false}
              width='100%'
              height='100%'
              controls url='https://www.youtube.com/watch?v=J3x93qg60Zk&t=1s'/>
          </div>
          <div className='about-me'>
            <h2><FontAwesomeIcon icon={faGraduationCap} /> About Me</h2>
            <p>
              I grew up in the south-west of Ireland, completed my Joint Honours Degree in Dublin and was trained in teaching by Cambridge in Seville, Spain. I currently teach 100% online from my home office in Germany.
            </p>
            <p>
              During my 6 years teaching English as a foreign language full-time, I have taught at Universities, English Academies, Language Schools and Companies. This included teaching General English, Business English, Business skills through English, Cambridge and Trinity exam preparation and conversation English.
            </p>
            <p>
              All my classes are individually prepared based on client needs and learning styles, a detailed needs analysis is done before classes start. Whether group classes, in pairs or individuals, I enjoy getting to know my students and working together with them to improve their English!
            </p>
              <div className='callToAction'>
              <Link to='/testimonials'>
                <button> Testimonials </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

