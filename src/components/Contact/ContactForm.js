import React from "react";
import { useForm } from 'react-hook-form';
import './contact.css';

export function ContactForm () {
  
  const { register, handleSubmit} = useForm();

  function encode (data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const onSubmit = (event) => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "ContactForm": event.target.getAttribute("name"),
        'Name': event.target.getAttribute("name"),
        'Email': event.target.getAttribute("name"),
        'Level': event.target.getAttribute("name"),
        'Message': event.target.getAttribute("name"),
      })
    }).then(() => document.querySelector('#the-form').append(<p>Thank you for your message</p>)).catch(error => alert(error))
  }

  return (
    <div className="ContactForm">
      <form data-netlify="true" name="ContactForm" method="post" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="ContactForm" value="ContactForm" />
      <div className="form-control">
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