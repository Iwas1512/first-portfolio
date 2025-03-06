import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .sendForm(
        'service_6sn2cmj', // Replace with your EmailJS service ID
        'template_p7dxv2d', // Replace with your EmailJS template ID
        e.target, // the form element
        'WOyxHD7YO8ej3Rbi3' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Your Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <label>Your Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <label>Subject</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      
      <label>Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
