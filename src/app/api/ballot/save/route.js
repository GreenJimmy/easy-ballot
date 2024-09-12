import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req) {
  try {
    const headersList = headers();
    // const sessionId = headersList.get("X-WF-SESSION-ID");

    const { subdomain, address } = await req.json();

    return await fetch(`process.env.`);
  } catch (error) {
    console.error("ERROR", error);
    return NextResponse.json({ error }, { status: error.status || 500 });
  }
}
