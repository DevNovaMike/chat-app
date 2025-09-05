import Message from "../models/Message.js";

export const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("sendMessage", async (data) => {
      const newMsg = new Message(data);
      await newMsg.save();
      io.emit("message", await newMsg.populate("sender", "username"));
    });

    socket.on("disconnect", () => console.log("User disconnected:", socket.id));
  });
};