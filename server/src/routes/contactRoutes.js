// src/routes/contactRoutes.js
import express from "express";
const router = express.Router();

// Example contact endpoint
router.post("/", (req, res) => {
  res.json({ message: "Contact message received" });
});

export default router;