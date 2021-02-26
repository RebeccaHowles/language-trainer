import './information.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faBan, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function Information () {
  return (
    <div className='content'>
      <div className='backgroundImage'>
        <ul className='info'>
          <li>
            <h3><FontAwesomeIcon icon={faDollarSign} /> Prices</h3>
            <ul className='prices'>
              <li>
                As price per unit and availability can vary, please contact me for more information. 
              </li>
              <li>
                All classes are paid in advance per month at the beginning of the month by bank transfer.
              </li>
            </ul>
          </li>
          <li>
            <h3><FontAwesomeIcon icon={faBan} /> Cancellation</h3>
            <ul className='cancellation'>
              <li>
                In general, there is a fixed amount of classes per month and if, on occasion a class needs to be reorganised that can be done the week before or at the start of the month.
              </li>
              <li>
                For last minute cancellations (less than 24 hours before the class) these cannot be rearranged because the class is already prepared and the time set aside. Thank you for your understanding.
              </li>
            </ul>
          </li>
          <li>
            <h3><FontAwesomeIcon icon={faQuestionCircle} /> FAQ</h3>
            <ul className='faq'>
              <li className='question'>
                How do the classes work online?
              </li>
              <li>
                First you are given a link to a folder in Google Drive where all of your materials are uploaded. There will be a document called “Words of the Day” where I will record all the new vocabulary from every class by date. For anything I’d like you to look at immediately for example corrections or new words, I’ll write in the chat box of the online platform.
              </li>
              <li className='question'>
                What platforms do you use?
              </li>
              <li>
                Any platform can be used, I generally use Skype, Microsoft Teams, Zoom or Google meets. Skype is my favourite because the chat is always saved.
              </li>
              <li className='question'>
                Do you provide the materials?
              </li>
              <li>
                Yes, all materials are uploaded to your Google Drive folder. You can either print or download these files as you like. If we decide that a textbook would help you, that too will be given.
              </li>
              <li className='question'>
                What happens if there’s a problem with the internet during the class?
              </li>
              <li>
                For any technical problem extra time is given to fix this whenever possible.
              </li>
              <li className='question'>
                Are my class times flexible?
              </li>
              <li>
                In general no, there will be a specific time and day for your classes that doesn’t change. If a class needs to be reorganised it can be done so a week before the class or at the beginning of the month.
              </li>
              <li className='question'>
                How many people are in each class?
              </li>
              <li>
                That is completely up to you, in general the price does not change if you would like to share classes but I recommend a maximum of 4 students.
              </li>
            </ul>
          </li>
          <div className='callToAction'>
            <Link to='/contact'>
              <button> Contact Me </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
