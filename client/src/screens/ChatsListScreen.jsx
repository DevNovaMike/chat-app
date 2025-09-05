import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./ChatsListScreen.css";

const ChatsListScreen = () => {
  const navigate = useNavigate();
  const [friendUsername, setFriendUsername] = useState("");
  const [error, setError] = useState("");

  const handleAddFriend = async () => {
    try {
      const username = localStorage.getItem("username"); // store username on login
      const res = await API.post("/friends/add", {
        username,
        friendUsername,
      });
      alert(res.data.message);
      setFriendUsername("");
    } catch (err) {
      setError(err.response?.data?.message || "Error adding friend");
    }
  };

  return (
    <div className="chats-container">
      <header className="chats-header">
        <h1>Chats</h1>
        <button
          className="add-btn"
          onClick={() => {
            const friend = prompt("Enter friend's username:");
            if (friend) {
              setFriendUsername(friend);
              handleAddFriend();
            }
          }}
        >
          +
        </button>
      </header>

      {error && <p className="error">{error}</p>}

      <div className="chat-list">
        {/* Placeholder for chat list */}
        <p>No chats yet</p>
      </div>
    </div>
  );
};

export default ChatsListScreen;