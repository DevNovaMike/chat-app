import React from 'react';

export default function MessageBubble({ message }) {
  return (
    <div style={{
      padding: '8px',
      margin: '5px',
      background: message.sender === 'me' ? '#4f46e5' : '#ddd',
      color: message.sender === 'me' ? '#fff' : '#000',
      borderRadius: '10px',
      textAlign: message.sender === 'me' ? 'right' : 'left'
    }}>
      {message.text}
    </div>
  );
}