import { NextResponse } from "next/server";
import {createPost, allPosts} from "../controllers/post";
import connectDB from "../lib/dbConnection";
// event get post etc routes
export async function POST(req:Request) {
    await connectDB();
    const body = await req.json();
    console.log("Body: ", body);
    try {
        const result=await createPost(body);
        console.log("Result: ",result);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
    }
    //posting events
}

export async function GET(req: Request) {
    await connectDB(); // Assuming this works as expected
    try {
        const result = await allPosts();
        console.log("All posts: ", result);
        return result; // Make sure you're returning the result of allPosts
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}
