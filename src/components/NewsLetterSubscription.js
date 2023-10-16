import React, { useState } from 'react';
import axios from 'axios';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    // Replace 'http://localhost:5000' with your backend server's address.
    axios.post('http://localhost:5000/subscribe', { email })
      .then(response => {
        // Handle the success response from the backend.
        setMessage(response.data.message);
      })
      .catch(error => {
        // Handle any errors that occurred during the request.
        setMessage('An error occurred.');
      });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      <p>{message}</p>
    </div>
  );
}

export default NewsletterSubscription;
