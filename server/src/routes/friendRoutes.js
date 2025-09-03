import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ Add a friend by username
router.post("/add", async (req, res) => {
  try {
    const { currentUserId, friendUsername } = req.body;

    const user = await User.findById(currentUserId);
    const friend = await User.findOne({ username: friendUsername });

    if (!user || !friend) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.friends.includes(friend._id)) {
      return res.status(400).json({ message: "Already friends" });
    }

    user.friends.push(friend._id);
    friend.friends.push(user._id);

    await user.save();
    await friend.save();

    res.json({ message: "Friend added successfully", friend });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get a user's friends
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("friends", "username");
    res.json(user.friends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;