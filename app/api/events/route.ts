import { NextResponse } from "next/server";
import {createPost} from "../controllers/post";
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

export async function GET(req:Request) {
    //getting events in frontend
}