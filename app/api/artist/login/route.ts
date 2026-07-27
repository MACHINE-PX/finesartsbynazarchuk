import { NextResponse } from "next/server";
import { createAdminSession, verifyAdminCredentials } from "@/lib/artist-admin";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { username?: string; password?: string }
    | null;

  if (!body?.username || !body?.password) {
    return NextResponse.json(
      { error: "Username and password are required." },
      { status: 400 },
    );
  }

  if (!verifyAdminCredentials(body.username, body.password)) {
    return NextResponse.json(
      { error: "Invalid username or password." },
      { status: 401 },
    );
  }

  await createAdminSession();

  return NextResponse.json({ ok: true });
}
