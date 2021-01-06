import React, {useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import './contact.css';

export function ContactForm () {
  
  const { register } = useForm();
  
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className="ContactForm">
      <form name="contact" 
            method="POST" 
            action="/contact/?success=true"
            data-netlify="true" >
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-control">
      {success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )}
          <label>Name</label>
          <input type="text" name="Name" ref={register({ required: true})} />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="Email" ref={register({
              required: 'Email is required.',
              pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email is not valid.'
              }
            })}/>
        </div>
        <div className="form-control">
          <label>Level</label>
          <select name="Level" ref={register({ required: true })}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
      </div>
        <div className="form-control">
          <label>Message</label>
          <textarea type="text" name="Message" ref={register({ required: true})} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}