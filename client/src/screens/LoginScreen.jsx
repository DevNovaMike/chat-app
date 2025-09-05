import React from 'react';

export default function LoginScreen({ goHome }) {
  return (
    <div className="screen">
      <h2>Login</h2>
      <input placeholder="Email" /><br />
      <input placeholder="Password" type="password" /><br />
      <button>Login</button>
      <button onClick={goHome}>Back</button>
    </div>
  );
}