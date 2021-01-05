import React from "react";


const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('contact-form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}



export function ContactForm() {
  
  document.querySelector("form").addEventListener("submit", handleSubmit);

  return (
      <form name="contact-form" id='contact-form' method="POST" data-netlify-recaptcha="true" data-netlify="true">
        <input type="hidden" name="contact-form" value="contact-form" />
      <p>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
      </p>
      <p>
      <p>Level</p>
      <div className='radio-select'>
        <label>
      <input type="radio" value="Beginner" name="level" /> Beginner</label>
      <label>
        <input type="radio" value="Intermediate" name="level" /> Intermediate
        </label>
        <label>
        <input type="radio" value="Advanced" name="level" /> Advanced
        </label>
        </div>
      <p>
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
      </p>
  </form>
  );
}