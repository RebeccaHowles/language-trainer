import React from "react";
import { useForm } from 'react-hook-form';
import './contact.css';

export function ContactForm () {
  
  const { register, handleSubmit} = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <label>Name</label>
          <input type="text" name="name" ref={register({ required: true})} />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" ref={register({
              required: 'Email is required.',
              pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email is not valid.'
              }
            })}/>
        </div>
        <div className="form-control">
          <label>Level</label>
          <select name="level" ref={register({ required: true })}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
      </div>
        <div className="form-control">
          <label>Message</label>
          <textarea type="text" name="message" ref={register({ required: true})} />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}