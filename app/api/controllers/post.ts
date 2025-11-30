/**
 * Controller functions for managing event posts.
 * Includes create, update, delete, and retrieval operations.
 */
import Post from "../models/Post";
import { NextResponse } from 'next/server';

/**
 * Interface for createPost function parameters.
 */
interface createPostProps{
    title:string;
    description:string;
    info: string;
    status:string;
    poster:string;
    registrationLink:string;
    socialLink:string;
}

/**
 * Creates a new event post and returns all posts.
 */
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

/**
 * Retrieves all event posts from the database.
 */
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