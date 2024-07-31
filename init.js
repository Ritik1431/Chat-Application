const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    console.log("Connection Successful");

    const existingChats = await Chat.find();
    if (existingChats.length === 0) {
      const chats = [
        { from: "Rajput", to: "jaggi", msg: "Send me pics", created_at: new Date() },
        { from: "Akshay", to: "Kumar", msg: "Hello g", created_at: new Date() },
        { from: "Neha", to: "Sanjay", msg: "Are you coming to the party?", created_at: new Date() },
        { from: "Vikram", to: "Sonia", msg: "Let's meet tomorrow", created_at: new Date() },
        { from: "Pooja", to: "Rahul", msg: "Don't forget to bring the documents", created_at: new Date() },
        { from: "Arjun", to: "Meera", msg: "Happy Birthday!", created_at: new Date() },
        { from: "Rohit", to: "Priya", msg: "How was your trip?", created_at: new Date() },
      ];

      await Chat.insertMany(chats);
      console.log("Initial data inserted");
    } else {
      console.log("Data already exists, skipping insertion");
    }
  } catch (err) {
    console.error(err);
  }
}

main();
