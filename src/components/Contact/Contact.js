/* eslint-disable no-unused-vars */
import './contact.css';
import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form';


  

export function Contact () {

  const { register, errors } = useForm();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [status,setStatus] = useState('');

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message, file }
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data)
    })
      .then(() => setStatus("Thank you for your message!"))
      .catch(error => setStatus("Sorry, message not sent!"));

    e.preventDefault();
  };

  return (
    <div className='content'>
      <div className='backgroundImage'>
        <div className='contact' id='contact'>
          <h3><FontAwesomeIcon icon={faEnvelope} /> Get in touch</h3>
        <p>Contact via <FontAwesomeIcon icon={faPhone} />{' '}
          <span className='iconify' data-icon='fa-whatsapp' data-inline='false'/>{' '}+49(0)1737586025</p>
          <p>or message me directly:</p>
          <h2>{status}</h2>
          <form name="contact" 
            method="POST" 
            action="/thank-you"
            data-netlify="true" 
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Name</label>
              <input type="text" name="Name" ref={register({ required: true})} />
              {errors.Name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label>Email</label>
              <input type="text" name="Email" ref={register({
              required: true,
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
              }
            })} />
            { errors.Email && <span>Please enter a valid email</span>}
            </div>
            <div className="form-control">
              <label>Level</label>
              <select name="Level" ref={register({ required: true })}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              {errors.Level && <span>This field is required</span>}
          </div>
            <div className="form-control">
              <label>Message</label>
              <textarea type="text" name="Message" ref={register({ required: true})} />
              {errors.Message && <span>This field is required</span>}
            </div>   
            <div data-netlify-recaptcha="true"></div>
            <div className="form-control">
              <label></label>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
