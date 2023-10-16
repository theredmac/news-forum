// Footer.js
import React from 'react';
import NewsletterSubscription from './NewsLetterSubscription';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Other footer content */}
        <NewsletterSubscription />
      </div>
    </footer>
  );
}

export default Footer;
