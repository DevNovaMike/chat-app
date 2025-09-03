import React from 'react';

export default function Signup({ goHome }) {
  return (
    <div className="screen">
      <h2>Sign Up</h2>
      <input placeholder="Email" /><br />
      <input placeholder="Password" type="password" /><br />
      <button>Create Account</button>
      <button onClick={goHome}>Back</button>
    </div>
  );
}