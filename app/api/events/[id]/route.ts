import { NextResponse } from "next/server";
import { updatePost, deletePost, getPostById } from "../../controllers/post";
import connectDB from "../../lib/dbConnection";

// GET single event by ID
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    await connectDB();
    const { id } = await params;
    
    try {
        const result = await getPostById(id);
        return result;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
    }
}

// UPDATE event by ID
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    
    try {
        const result = await updatePost(id, body);
        return result;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
    }
}

// DELETE event by ID
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    await connectDB();
    const { id } = await params;
    
    try {
        const result = await deletePost(id);
        return result;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
    }
}