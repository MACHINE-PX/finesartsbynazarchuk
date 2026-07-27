import "server-only";

import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type AdminMediaKind = "image" | "video";

export type AdminMediaItem = {
  id: string;
  section: string;
  title: string;
  kind: AdminMediaKind;
  src: string;
  filename: string;
  order: number;
  createdAt: string;
};

const SESSION_COOKIE = "artist_admin_session";
const uploadRoot = path.join(process.cwd(), "public", "uploads", "artist-media");
const dataRoot = path.join(process.cwd(), "data");
const mediaDataFile = path.join(dataRoot, "artist-media.json");

export const adminSections = [
  "Paintings",
  "Murals",
  "Plein Air",
  "Events",
  "Scenic Art, Faux Finishes & Props",
  "Sculptures",
  "Wearable Props",
  "About",
];

function adminUser() {
  return process.env.ARTIST_ADMIN_USER || "artist";
}

function adminPassword() {
  return process.env.ARTIST_ADMIN_PASSWORD || "Nazarchuk2026!";
}

function sessionSecret() {
  return process.env.ARTIST_ADMIN_SECRET || "change-this-secret-before-publishing";
}

function sign(value: string) {
  return createHmac("sha256", sessionSecret()).update(value).digest("hex");
}

function sessionValue() {
  const user = adminUser();
  return `${user}.${sign(user)}`;
}

function constantTimeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function verifyAdminCredentials(username: string, password: string) {
  return (
    constantTimeEqual(username, adminUser()) &&
    constantTimeEqual(password, adminPassword())
  );
}

export async function createAdminSession() {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, sessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const value = cookieStore.get(SESSION_COOKIE)?.value;

  return Boolean(value && constantTimeEqual(value, sessionValue()));
}

async function ensureStorage() {
  await mkdir(uploadRoot, { recursive: true });
  await mkdir(dataRoot, { recursive: true });
}

export async function readAdminMedia(): Promise<AdminMediaItem[]> {
  await ensureStorage();

  try {
    const file = await readFile(mediaDataFile, "utf8");
    return JSON.parse(file) as AdminMediaItem[];
  } catch {
    return [];
  }
}

export async function writeAdminMedia(items: AdminMediaItem[]) {
  await ensureStorage();
  await writeFile(mediaDataFile, JSON.stringify(items, null, 2), "utf8");
}

export async function saveUploadedMedia(file: File, section: string) {
  await ensureStorage();

  const originalName = file.name || "upload";
  const extension = path.extname(originalName).toLowerCase();
  const baseName = path
    .basename(originalName, extension)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const sectionSlug = section
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const filename = `${Date.now()}-${baseName || "media"}${extension}`;
  const folder = path.join(uploadRoot, sectionSlug || "general");

  await mkdir(folder, { recursive: true });
  await writeFile(path.join(folder, filename), Buffer.from(await file.arrayBuffer()));

  return {
    filename,
    src: `/uploads/artist-media/${sectionSlug || "general"}/${filename}`,
  };
}
