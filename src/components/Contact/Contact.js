/* eslint-disable no-unused-vars */
import './contact.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export function Contact () {

  const { register, handleSubmit, errors } = useForm();

  const [notification, setNotification] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = data => {
    //alert(JSON.stringify(data));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => {
        setNotification("Your message has been sent")
        setSubmitted(true)
      })
      .catch(error => setNotification("Form Submission Failed!")); 
  }; 

  return (
    <div className='content'>
      <div className='backgroundImage'>
        <div className='contact' id='contact'>
          <h3><FontAwesomeIcon icon={faEnvelope} /> Get in touch</h3>
        <p>Contact via <FontAwesomeIcon icon={faPhone} />{' '}
          <span className='iconify' data-icon='fa-whatsapp' data-inline='false'/>{' '}+49(0)1737586025</p>
          <p>or message me directly:</p>
          <h2>{notification}</h2>
          {!submitted ? <form name="contact" 
            method="POST" 
            action="/thank-you"
            data-netlify="true" 
            data-netlify-recaptcha="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="contact" value="contact" />
            <div className="form-control">
              <label>Name {errors.name && <span>This field is required</span>}</label>
              <input type="text" name="name" ref={register({ required: true})} />
            </div>
            <div className="form-control">
              <label>Email { errors.email && <span>Please enter a valid email</span>}</label>
              <input type="text" name="email" ref={register({
              required: true,
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
              }
            })} />
            </div>
            <div className="form-control">
              <label>Level {errors.level && <span>Select your level</span>}</label>
              <select name="level" ref={register({ required: true })}>
              <option value=""></option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
          </div>
            <div className="form-control">
              <label>Message {errors.message && <span>This field is required</span>}</label>
              <textarea type="text" name="message" ref={register({ required: true})} />
            </div>   
            <div data-netlify-recaptcha="true"></div>
            <input type="hidden" name="form-name" value="contactForm" />
            <div className="form-control">
              <label></label>
              <p className="screen-reader-text">
              <label>Leave empty if you human <input name="bot-field" /></label>
            </p>
              <button type="submit">Send</button>
            </div>
          </form> : <h1>Thank you!</h1> }
        </div>
      </div>
    </div>
  );
}