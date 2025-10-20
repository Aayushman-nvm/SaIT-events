import Post from "../models/Post";
import { NextResponse } from 'next/server';
import { Types } from 'mongoose';
//create, delete, update post functions
//create
interface createPostProps{
    title:string;
    description:string;
    info: string;
    status:string;
    poster:string;
    registrationLink:string;
    socialLink:string;
}

interface updatePostProps{
    title?:string;
    description?:string;
    info?: string;
    status?:string;
    poster?:string;
    registrationLink?:string;
    socialLink?:string;
}

export async function createPost({title, description, info, poster, registrationLink, status, socialLink}:createPostProps) {
    console.log(`title=${title}\n description=${description}\n status=${status}\n imgUrl=${poster}\n socialLink=${socialLink}`);
    try {
        const newPost=new Post({
            title:title,
            description:description,
            info:info,
            status:status,
            poster:poster,
            registrationLink:registrationLink,
            socialLink:socialLink,
        });
        await newPost.save();
        const post = await Post.find();
        console.log("All Posts: ",post);
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
    }
    return ("received");
}

// Get single post by ID
export async function getPostById(id: string) {
    console.log("Get post by ID hit: ", id);
    try {
        if (!Types.ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
        }
        
        const post = await Post.findById(id);
        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }
        
        console.log("Post found: ", post);
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
    }
}

// Update post by ID
export async function updatePost(id: string, updateData: updatePostProps) {
    console.log("Update post hit: ", id, updateData);
    try {
        if (!Types.ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedPost) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        console.log("Post updated: ", updatedPost);
        return NextResponse.json({ 
            success: true, 
            message: "Post updated successfully",
            post: updatedPost 
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
    }
}

// Delete post by ID
export async function deletePost(id: string) {
    console.log("Delete post hit: ", id);
    try {
        if (!Types.ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
        }

        const deletedPost = await Post.findByIdAndDelete(id);
        
        if (!deletedPost) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        console.log("Post deleted: ", deletedPost);
        return NextResponse.json({ 
            success: true, 
            message: "Post deleted successfully",
            deletedPost: deletedPost 
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
    }
}

//fetching all posts
export async function allPosts() {
    console.log("All post hit");
    try {
        const posts = await Post.find();
        console.log("All posts in all posts fn: ", posts);
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}