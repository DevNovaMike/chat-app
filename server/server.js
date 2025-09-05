import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./src/routes/authRoutes.js";
import friendRoutes from "./src/routes/friendRoutes.js";
import chatRoutes from "./src/routes/chatRoutes.js";

dotenv.config();

const app = express(); // ✅ create app BEFORE using routes

app.use(cors());
app.use(express.json());

// ✅ Mount routes AFTER initializing app
app.use("/api/auth", authRoutes);
app.use("/api/friends", friendRoutes);
app.use("/api/chats", chatRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));