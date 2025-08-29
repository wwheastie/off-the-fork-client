import { setCorsHeaders } from "../custommiddleware";

// GET /api/leagues (proxied to meals endpoint)
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const upstream = await fetch(
      "https://off-the-fork-server.onrender.com/api/v1/meals/current",
      { cache: "no-store" }
    );

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${upstream.status}` },
        { status: upstream.status }
      );
    }

    const data = await upstream.json();
    return NextResponse.json(data); // ✅ returns JSON to your client
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
