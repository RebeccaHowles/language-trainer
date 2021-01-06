import React, {useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import './contact.css';


function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

export function ContactForm () {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => data.preventDefault()
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-type' : "application/x-www-form-urlencoded"},
      body: onSubmit
      .then(() => {
        alert('worked')
    })
  })
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className="ContactForm">
      <form name="ContactForm" 
            method="POST" 
            action="/contact/?success=true"
            data-netlify="true" 
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="form-name" value="ContactForm" />
      <div className="form-control">
      {success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )}
          <p class="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>
          
              <label>Name</label>
          <input type="text" name="Name" ref={register({ required: true})} />
          {errors.Name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="Email" ref={register({ required: true })} />
          {errors.Email && <span>This field is required</span>}
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
        </div>
        {errors.Message && <span>This field is required</span>}
        <div data-netlify-recaptcha="true"></div>
        <div className="form-control">
          <label></label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}