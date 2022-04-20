import React, { useEffect, useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
   const message = document.getElementById('message');
   message.value = '';
    
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }

  };

  return (
    <section className='form-section'>
      <form action="https://formsubmit.co/Folukeolaoye97@gmail.com" method="POST" id="contact-form" onSubmit={handleSubmit}>
        <div>
          
          <input className="input-text" type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Name" required/>
        </div>
        <div>
          
          <input className="input-text" type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email" required/>
        </div>
        <div>
          
          <textarea id="message" className="input-text" name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Message"/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="form-button"data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;