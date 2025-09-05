import express from "express";
import Message from "../models/Message.js";
import User from "../models/User.js";

const router = express.Router();

// ✅ Get all messages between two users
router.get("/:userId/:friendId", async (req, res) => {
  try {
    const { userId, friendId } = req.params;
    const messages = await Message.find({
      $or: [
        { sender: userId, recipient: friendId },
        { sender: friendId, recipient: userId }
      ]
    }).populate("sender", "username");

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Send a message
router.post("/send", async (req, res) => {
  try {
    const { senderId, recipientId, text } = req.body;

    const message = new Message({ sender: senderId, recipient: recipientId, text });
    await message.save();

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;