const express = require("express");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
require("./init.js"); // Ensure initialization and connection

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Index Route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs" , {chats});
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/", (req, res) => {
    res.send("Root is working");
});

// new chat Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

// Create route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    })
    newChat
        .save()
        .then(res => {
            console.log("Chat was saved");
        })
        .catch((err) => {
            console.log(err);
        })
    res.redirect("/chats");
})

// Edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
})

// Update Route

app.put("/chats/:id", async (req, res) => {
    try
    {
        let { id } = req.params;
        let { msg : newMsg } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true }, { new: true });
        
        console.log(updatedChat);
        res.redirect("/chats");
    }
    catch (err) {
        console.log(err);
    }
})

// Delete Route

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let DeletedChat = await Chat.findByIdAndDelete(id);
    console.log(DeletedChat);
    res.redirect("/chats");
})

app.listen(8080, () => {
    console.log("Listening to port 8080");
});
