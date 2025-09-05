import React from 'react';
import MessageBubble from './MessageBubble.jsx';

export default function MessageList({ messages }) {
  return (
    <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc' }}>
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
    </div>
  );
}