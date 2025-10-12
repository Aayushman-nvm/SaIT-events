import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:String,
    description:String,
    posterUrl:String,
    status:String,
    socialLink:String,
});

const Post= mongoose.model("Post", postSchema);
export default Post;