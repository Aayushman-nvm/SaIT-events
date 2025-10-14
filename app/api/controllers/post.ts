import Post from "../models/Post";
import { NextResponse } from 'next/server';
//create, delete, update post fucntions
//create
interface createPostProps{
    title:String;
    description:String;
    status:String;
    poster:String;
    socialLink:String;
}

export async function createPost({title, description, poster, status, socialLink}:createPostProps) {
    console.log(`title=${title}\n description=${description}\n status=${status}\n imgUrl=${poster}\n socialLink=${socialLink}`);
    try {
        const newPost=new Post({
            title:title,
            description:description,
            status:status,
            posterUrl:poster,
            socialLink:socialLink,
        });
        await newPost.save();
        const post = await Post.find();
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
    }
    return ("received");
}
//delete
//update

export async function allPosts() {
    console.log("All post hit");
    try {
        const posts = await Post.find();
        console.log("All posts in all posts fn: ", posts);
        return NextResponse.json(posts); // Use NextResponse.json() here
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}