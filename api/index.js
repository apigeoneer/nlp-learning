const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, ()=>{
    try {
        console.log("Connected to MongoDB!!")
    } catch(err) {
        console.log(err);
    }
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(
    cookieSession({ name: "session", keys: ["chixt"], maxAge: 24*60*60*100})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:5000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true
    })
);

app.get("/", (req, res)=>{
    res.send("Welcome to homepage!!")
    // res.sendFile(__dirname + "/package-lock.json");
})

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.listen(5000, ()=>{
    console.log("Backend server is running!!");
});