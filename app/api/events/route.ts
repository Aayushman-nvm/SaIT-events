import { NextResponse } from "next/server";
import {createPost} from "../lib/post";
// event get post etc routes
export async function POST(req:Request) {
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