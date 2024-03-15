import * as React from 'react';
import Header from '../components/Header'
import './Support.css';

function SupportPage() {

  return (
    <div className="support-page">
      <Header/>
      <h2 className="support-title">Support</h2>
      <div className="support-section">
        <div className="search-box">
          <input type="text" placeholder="Search help articles" />
        </div>
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>Question 1?</h3>
            <p>Answer to question 1.</p>
          </div>
          <div className="faq-item">
            <h3>Question 2?</h3>
            <p>Answer to question 2.</p>
          </div>
          <div className="faq-item">
            <h3>Question 3?</h3>
            <p>Answer to question 3.</p>
          </div>
          <div className="faq-item">
            <h3>Question 4?</h3>
            <p>Answer to question 4.</p>
          </div>
          <div className="faq-item">
            <h3>Question 5?</h3>
            <p>Answer to question 5.</p>
          </div>
        </div>
        <div className="contact-box">
          <h2>Contact Us</h2>
          <div className="contact-inputs">
            <input type="text" placeholder="Your Phone Number" />
            <input type="email" placeholder="Your Email Address" />
            <textarea placeholder="Your Concerns"></textarea>
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;