import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { uploadedMediaPath } from "@/lib/artist-admin";

const contentTypes: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ section: string; filename: string }> },
) {
  const { section, filename } = await params;

  try {
    const file = await readFile(uploadedMediaPath(section, filename));
    const extension = path.extname(filename).toLowerCase();

    return new NextResponse(file, {
      headers: {
        "Content-Type": contentTypes[extension] || "application/octet-stream",
        "Cache-Control": "private, max-age=0, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }
}
