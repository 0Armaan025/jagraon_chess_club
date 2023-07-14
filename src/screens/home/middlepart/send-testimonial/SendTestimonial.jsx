import React from 'react';
import { useRef } from 'react';
import './sendtestimonial.css';
import emailjs from '@emailjs/browser';

const SendTestimonial = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
  
    emailjs.sendForm('service_ywno9k5', 'template_jq19r1j', form.current, 'UyHK6viRojRWGy3jG')
      .then((result) => {
          // show the user a success message
          alert("Your feedback has been sent successfully! :))")
      }, (error) => {
          // show the user an error
      });
  };
 
  const buttonStyle = {
    backgroundColor: '#ff6f00',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
  };

  return (
   <>
    <div className="sendTestimonial"> 
    <form ref={form} onSubmit={sendEmail}>
        <center>
            <div className="fields">
            <input type="text" placeholder="Please enter your name." className="testimonialTextField"/>
            <br/>
            <input type="text" placeholder="Please enter your email address." className="testimonialTextField"/>
            <br/>
            <textarea placeholder='Please enter your feedback! :))' className='feedbackField'></textarea>
            </div>
            <br/>
             <button style={buttonStyle} onClick={sendEmail}>
      Send testimonial
    </button>
    </center>
    </form>
        
    </div>
   </>
  )
}

export default SendTestimonial
