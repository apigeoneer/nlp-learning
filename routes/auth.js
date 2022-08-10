const router = require("express").Router();
const User = require("../models/User");

// Register
router.post("/register", async (req,res)=> {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        console.log(err);
    }

    // res.send("registered user!!"); <- for GET (to see on localhost://5000/api/auth/register)
});

module.exports = router;

