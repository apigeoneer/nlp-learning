const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            max: 50,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        img: {
            type: String
        },
        views: {
            type: Array,
            default: []
        },
        upvotes: {
            type: Array,
            default: []
        },
        downvotes: {
            type: Array,
            default: []
        },
        tags: {
            type: Array,
            default: []
        },
        comments: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", PostSchema);