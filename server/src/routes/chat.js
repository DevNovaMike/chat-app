// src/routes/chat.js
import express from "express";
import { getChats } from "../controllers/chatController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getChats);

export default router;