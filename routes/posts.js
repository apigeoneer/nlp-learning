const router = require("express").Router();

router.get("/", (req,res)=> {
    res.send("Welcome to posts page!")
});

module.exports = router;