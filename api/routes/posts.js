const router = require("express").Router();
const Post = require("../models/Post");

// router.get("/", (req,res)=> {
//     res.send("Welcome to posts page!")
// });

// create
router.post("/", async (req,res)=> {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();

        res.status(200).json(savedPost);
    } catch(err) {
        res.status(500).json(err);
    }
});


// update
router.put("/:id", async (req,res)=> {
    try {
        const post = Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });

            res.status(200).json("The post has been updated!");
        } else {
            res.status(403).json("You can only update your own post!");
        }
    } catch(err) {
        res.status(500).json(err);
    }
});


// delete
router.put("/:id", async (req,res)=> {
    try {
        const post = Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.deleteOne();

            res.status(200).json("The post has been deleted!");
        } else {
            res.status(403).json("You can only delete your own post!");
        }
    } catch(err) {
        res.status(500).json(err);
    }
});


// like/dislike a post
router.put("/:id", async (req,res)=> {
    try {
        const post = await Post.findById(req.body.id);
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });

            res.status(200).json("You've liked this post!")
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });

            res.status(200).json("You've disliked this post!");
        }
    } catch(err) {
        res.status(500).json(err);
    }
});


// get a post
router.get("/:id", async (req,res)=> {
    try {
        const post = await Post.findById(req.body.id);

        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});


// get timeline posts
router.get("/timeline/:userId", async (req,res)=> {
    let timelinePosts = [];
    try {
        // since we'll have multiple promises
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });

        // if you're using ,you should use promise. if you use await, it's not going to fetch all
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId)=> {
                return Post.find({ userId: friendId });
            })
        );
        timelinePosts = userPosts.concat(...friendPosts);

        res.json(timelinePosts);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router; 