import React from "react";
import "./contact.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_afztan9', 'template_pebihcc', form.current, 'okfS8ZqRkQLdlQhrw')
     
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <i className="contact__option-icon bx bx-envelope"></i>
            <h4>Email</h4>
            <h5>daniel.santosprf@gmail.com</h5>
            <a href="mailto:daniel.santos96prf@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <i className="contact__option-icon bx bxl-whatsapp"></i>
            <h4>WhatsApp</h4>
            <h5>+55 (11) 98110-2837</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=5511981102837"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <i className="contact__option-icon bx bxl-Instagram"></i>
            <h4>Instagram</h4>
            <h5>socials</h5>
            <a
              href="https://www.instagram.com/daniel_santoskkk/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* ============End of contact options ===================== */}

        <form ref={form} onSubmit={sendEmail} >
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
