// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.js";
import { authRequired } from "./middleware/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// health
app.get("/", (_req, res) => res.json({ ok: true, service: "chat-server" }));

// auth (signup, login)
app.use("/api/auth", authRoutes);

// messages: GET (public) and POST (authenticated)
app.use("/api/messages", messageRoutes);

// a protected example route (optional)
app.get("/api/me", authRequired, (req, res) => {
  res.json({ id: req.user.id, username: req.user.username });
});

export default app;