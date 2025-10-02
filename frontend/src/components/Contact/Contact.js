import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in Name, Email, and Message fields.");
      return;
    }

    // Remember to update this URL to your live backend URL when you deploy
    const response = await fetch('https://vr-portfolio-backend.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, contactNo, message }),
    });

    const result = await response.json();
    alert(result.message);

    setName('');
    setEmail('');
    setContactNo('');
    setMessage('');
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        Have a project idea, a question, or just want to connect? My inbox is always open.
        Fill out the form below, and I'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No. (Optional)</label>
          <input type="tel" id="contactNo" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </motion.section>
  );
};


export default Contact;
