import { NextResponse } from "next/server";

export async function POST(request) {
    const { username, password } = await request.json();
    // Simulate a login process
    if (username === "admin" && password === "password") {
        return NextResponse.json({ message: "Login successful!" });
    } else {
        return NextResponse.json({ message: "Invalid credentials!" }, { status: 401 });
    }
}