// app/api/admin/login/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authCheck } from "../../lib/auth";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Body: ", body);

  try {
    const result = await authCheck(body);

    if (result.authenticated && result.isAdmin) {
      const cookieStore = await cookies();
      cookieStore.set("admin-auth", "true", {
        httpOnly: true,
        path: "/admin",
        maxAge: 60 * 60 * 8,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
