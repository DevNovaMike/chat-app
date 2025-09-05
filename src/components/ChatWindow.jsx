import React, { useState } from 'react';
import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    setMessages([...messages, { id: Date.now(), text, sender: 'me' }]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}