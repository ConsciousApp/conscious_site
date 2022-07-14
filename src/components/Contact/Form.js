import './Contact.css';
import React, { useState } from 'react';
const axios = require('axios');

const {REACT_APP_EMAILJS_SERVICEID, REACT_APP_EMAILJS_TEMPLATEID, REACT_APP_EMAILJS_PUBLICKEY} = process.env
const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  var data = {
      service_id: REACT_APP_EMAILJS_SERVICEID,
      template_id: REACT_APP_EMAILJS_TEMPLATEID,
      user_id: REACT_APP_EMAILJS_PUBLICKEY,
      template_params: {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'message': message
      }
  };

  var options = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  const sendEmail = ()=> {
    console.log(
      {
        'data':data,
      }
    )
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data, options)
      .then(function() {
          alert('Your mail is sent!');
      })
      .catch(function(error) {
          alert('Oops... ' + JSON.stringify(error));
      });
  }

  return (
    <div className='formContainer'>
      <div  className='form'>
        <div className='formFields'>

          <div className='row'>

            <div className='nameInput'>
              <div className='inputWithLabel'>
                <div className='label'>
                  First name
                </div>
                <input
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  type='text'
                  placeholder='first name'
                  name='firstName'
                  className='input'
                />
              </div>
            </div>

            <div className='nameInput'>
              <div className='inputWithLabel'>
                <div className='label'>
                  Last name
                </div>
                <input
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  type='text'
                  placeholder='last name'
                  name='lastName'
                  className='input'
                />
              </div>
            </div>

          </div>

          <div className='wideRow'>
            <div className='wideInputWithLabel'>
              <div style={{width: 'auto'}} className='label'>Email</div>
              <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type='email'
                placeholder='email'
                name='email'
                className='wideInput'
              />
            </div>
          </div>

          <div className='textAreaContainer'>
            <div className='largestInputWithLabel'>
              <div className='label'>
                Message
              </div>
              <textarea
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder='leave us a message!'
                name='message'
                className='largestInput'
              />
            </div>
          </div>

          <div className='submitButton' onClick={sendEmail}>
            <div className='submitButtonText'>
              Send Message
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Form }
