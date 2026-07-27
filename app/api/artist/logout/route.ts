import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/artist-admin";

export async function POST() {
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}
