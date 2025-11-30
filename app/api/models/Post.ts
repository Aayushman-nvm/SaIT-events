/**
 * Mongoose model for Event posts.
 * Defines the schema for storing event data in MongoDB.
 */
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    info: String,
    status: String,
    poster: String,
    registrationLink: String,
    socialLink: String,
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;