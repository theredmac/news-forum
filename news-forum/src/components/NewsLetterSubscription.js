// NewsletterSubscription.js
import React, { useState } from 'react';
import axios from 'axios';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = () => {
    axios
      .post('http://localhost:3001/subscribe', { email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage('Failed to subscribe');
      });
  };

  const unsubscribe = () => {
    axios
      .post('http://localhost:3001/unsubscribe', { email })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage('Failed to unsubscribe');
      });
  };

  return (
    <div className="newsletter-subscription">
      <h2>Newsletter Subscription</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={subscribe}>Subscribe</button>
      <button onClick={unsubscribe}>Unsubscribe</button>
      <p>{message}</p>
    </div>
  );
}

export default NewsletterSubscription;
