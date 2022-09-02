const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 30
        },
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 10
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6
        },
        profPic: {
            type: String,
            default: ""
        },
        followers: {
            type: Array,
            default: []
        },
        following: {
            type: Array,
            default: []
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            max: 50
        },
        company: {
            type: String,
            max: 50
        },
        gender: {
            type: Number,
            enum: [1,2,3]
        },
        location: {
            type: String,
            max: 50
        },
        website: {
            type: String
        },
        linkedin: {
            type: String
        },
        twitter: {
            type: String
        },
        views: {
            type: Number
        },
        upvotes: {
            type: Number
        },
        downvotes: {
            type: Number
        },
        bookmarks: {
            type: Number
        },
        posts: {
            type: Number
        },
        comments: {
            type: Number
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);