import { NextResponse } from "next/server"

const dummyMessage = {
    1: "Hello from the server!",
    2: "This is a dummy API endpoint.",
    3: "You can use this to test your API calls.",
}

export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id")  
     // Validate the id parameter
    if (!id || isNaN(id)) {
        return NextResponse.json({ error: "Invalid or missing 'id' parameter" }, { status: 400 });
    }
  return NextResponse.json({message: dummyMessage[id] || "No message found!"})
 
}