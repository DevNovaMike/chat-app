import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find().populate("sender", "username");
  res.json(messages);
});

router.post("/", async (req, res) => {
  const { sender, text } = req.body;
  const message = new Message({ sender, text });
  await message.save();
  res.json(message);
});

export default router;