import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ChatsListScreen from "./screens/ChatsListScreen";
import ChatScreen from "./screens/ChatScreen";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/chats" element={<ChatsListScreen />} />
          <Route path="/chat/:chatId" element={<ChatScreen />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;