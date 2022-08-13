const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// router.get("/", (req,res)=> {
//    res.send("Welcome to users page!!"); 
// });

// update
router.put("/:id", async (req,res)=>{
   const reqUserId = req.body.userId;   // <= the user who wants to make an update
   const paramUserId = req.params.id;   // <= /:id, the user whose page the current user is on

   console.log("paramUserId " + paramUserId);
   console.log("reqUserId " + reqUserId);

   if(reqUserId === paramUserId || req.body.isAdmin) {
      // update the password
      if(req.body.password) {
         try {
            // create a new hashed password & replace the old password with it
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);

            res.status(200).json("Password has been updated!");
         } catch(err) {
            return res.send(500).json(err);
         }
      }

      // update any other field
      try {
         const user = await User.findByIdAndUpdate(paramUserId, {
            $set: req.body
         });
         
         res.status(200).json("Account has been updated!");
      } catch(err) {
         return res.status(500).json(err);
      }

   } else {
      return res.status(403).json("You can only update your own account!");
   }
});


// delete
router.delete("/:id", async (req,res)=>{
   if(req.body.userId === req.params.id || req.body.isAdmin) {
      try {
         await User.findByIdAndDelete(req.params.id);
         res.status(200).json("Your account has been deleted!");
      } catch(err) {
         return res.status(500).json(err);
      }
   } else {
      return res.status(403).json("You can only delete your own account!");
   }
});


// get a user
router.get("/:id", async (req,res)=>{
   try {
      const user = await User.findById(req.params.id);
      // rather rhan sending the whole user, we're just sending some prop.s
      const {createdAt, updatedAt, __v, ...other} = user._doc;
      
      return res.status(200).json(other);
   } catch(err) {
      return res.status(500).json(err);
   }
});


// follow a user
router.put("/:id/follow", async (req,res)=>{
   if(req.body.userId !== req.params.id) {
      try {
         const userToBeFollowed = await User.findById(req.params.id);
         const currentUser = await User.findById(req.body.userId);

         if(!userToBeFollowed.followers.includes(req.body.userId)) {
            await userToBeFollowed.updateOne({ $push: { followers: req.body.userId } });
            await currentUser.updateOne({ $push: { following: req.params.id } });

            return res.status(200).json("You are now following this user!")
            // json("Hi " + req.body.userId + "! You're now following " + req.params.id);
         } else {
            return res.status(403).json("You already are following this user!");
         }
      } catch(err) {
         return res.status(500).json(err);
      }
   } else {
      return res.status(403).json("You can't follow yourself!");
   }
});


// unfollow a user
router.put("/:id/unfollow", async (req,res)=>{
   if(req.body.userId !== req.params.id) {
      try {
         const userToBeUnfollowed = await User.findById(req.params.id);
         const currentUser = await User.findById(req.body.userId);

         if(userToBeUnfollowed.followers.includes(req.body.userId)) {
            await userToBeUnfollowed.updateOne({ $pull: { followers: req.body.userId } });
            await currentUser.updateOne({ $pull: { following: req.params.id } });

            res.status(200).json("You unfollowed this user.")
         } else {
            res.status(403).json("You are already not following this user!");
         }
      } catch(err) {
         res.status(500).json(err);
      }
   } else {
      res.status(403).json("You can't unfollow yourself!");
   }
});

module.exports = router;