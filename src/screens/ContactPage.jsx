import React from 'react';

export default function ContactPage({ goHome }) {
  return (
    <div className="screen">
      <h2>Contact Us</h2>
      <textarea placeholder="Your message"></textarea><br />
      <button>Send</button>
      <button onClick={goHome}>Back</button>
    </div>
  );
}