// client/src/screens/ChatScreen.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import API from "../api";
import { AuthContext } from "../context/AuthContext";
import "./ChatScreen.css";

const ChatScreen = () => {
  const { chatId } = useParams();
  const navigate = useNavigate(); // ✅ Needed for back button
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect if not logged in
      return;
    }

    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.emit("joinChat", chatId);

    newSocket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    fetchMessages();

    return () => {
      newSocket.disconnect();
    };
  }, [chatId, user, navigate]);

  const fetchMessages = async () => {
    try {
      const { data } = await API.get(`/messages/${chatId}`);
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      await API.post(`/messages/${chatId}`, { text: newMessage });
      setNewMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <button className="back-btn" onClick={() => navigate("/chats")}>
          ←
        </button>
        <h2>Chat</h2>
      </header>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${
              msg.sender === user._id ? "own" : ""
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatScreen;