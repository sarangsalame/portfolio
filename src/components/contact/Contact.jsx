import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submitted");
    emailjs
      .sendForm(
        "service_9bq191m",
        "template_1iz154t",
        form.current,
        "tNHqA7GQhm5s_JSwr"
      )
      e.target.reset()
  };
  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sarangsalame12160@gmail.com</h5>
            <a href='mailto:sarangsalame12160@gmail.com' target={'_blank'}>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+918305199547</h5>
            <a
              href='https://api.whatsapp.com/send?phone=918305199547'
              target='_blank'
            >
              Send a message
            </a>
          </article>
        </div>

        <form action='' onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            row='7'
            placeholder='Type your message'
            required
          ></textarea>
          <button  type='sumbit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
