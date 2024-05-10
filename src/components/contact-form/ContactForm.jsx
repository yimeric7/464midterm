import React, { useState } from 'react';

function ContactForm() {
  // State to store input values
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Nice job! Message sent.'); // Show an alert on submission
    // Here you would typically also handle sending the data to a server
    setName(''); // Clear the input fields after submission
    setMessage('');
  };

  return (
    <div className="contact-form">
      <h1>Contact Kanye</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="social-links">
        <p>Follow Kanye on social media:</p>
        <a href="https://twitter.com/kanyewest" target="_blank" rel="noopener noreferrer">Twitter</a> | 
        <a href="https://www.instagram.com/kanyewest/" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
        <a href="https://www.facebook.com/kanyewest" target="_blank" rel="noopener noreferrer"> Facebook</a>
        <p>Side Note: he actually closed down all his social medias</p>
    </div>
    </div>
  );
}

export default ContactForm;
