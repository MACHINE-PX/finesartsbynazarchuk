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
  source?: "site" | "upload";
};

const SESSION_COOKIE = "artist_admin_session";
const isVercel = Boolean(process.env.VERCEL);
const runtimeRoot = isVercel
  ? path.join("/tmp", "artist-admin")
  : process.cwd();
const uploadRoot = isVercel
  ? path.join(runtimeRoot, "uploads", "artist-media")
  : path.join(process.cwd(), "public", "uploads", "artist-media");
const dataRoot = isVercel ? path.join(runtimeRoot, "data") : path.join(process.cwd(), "data");
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

function publicImage(...parts: string[]) {
  return `/images/${parts.map(encodeURIComponent).join("/")}`;
}

function eventImage(folder: string, file: string) {
  return publicImage("fineart", "EVENTS", folder, file);
}

function propsImage(folder: string, file: string) {
  return publicImage(
    "Props & Scenic -20260619T114546Z-3-001",
    "Props & Scenic",
    folder,
    file,
  );
}

function seededItem(
  section: string,
  title: string,
  src: string,
  order: number,
  kind: AdminMediaKind = "image",
): AdminMediaItem {
  const sectionSlug = section.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const filename = src.split("/").pop() || title;

  return {
    id: `site-${sectionSlug}-${order}`,
    section,
    title,
    kind,
    src,
    filename,
    order,
    createdAt: "2026-01-01T00:00:00.000Z",
    source: "site",
  };
}

type SeedEntry = [title: string, src: string, kind?: AdminMediaKind];

function seededMedia() {
  const sections: Record<string, SeedEntry[]> = {
    Paintings: [
      ["Motorcycle Study", publicImage("fineart", "Paintings", "IMG_4681.jpg")],
      ["Merchants Weighing Pearl", publicImage("fineart", "Paintings", "IMG_2436.jpg")],
      ["Stage Composition", publicImage("fineart", "Paintings", "IMG_3260.jpg")],
      ["Musician Study", publicImage("fineart", "Paintings", "IMG_4537.jpg")],
      ["Elder Portrait", publicImage("fineart", "Paintings", "FullSizeRender 2.jpg")],
      ["Bridge and Sky", publicImage("fineart", "Paintings", "IMG_1397.jpg")],
      ["Elder Portrait Process", publicImage("fineart", "Paintings", "FullSizeRender.JPG")],
      ["Sunset Water Study", publicImage("fineart", "Paintings", "IMG_0426.jpg")],
      ["Distant City", publicImage("fineart", "Paintings", "IMG_0622.jpg")],
      ["Studio Easel", publicImage("fineart", "Paintings", "IMG_1101.JPG")],
      ["Galaxy Painting", publicImage("fineart", "Paintings", "img-2858-web.jpg")],
      ["Courtyard Video", publicImage("fineart", "Paintings", "sashko-courtyard-web.m4v"), "video"],
    ],
    Murals: [
      ["Art Nouveau Mural", "/images/MURALS-ART%20NUVOU2.png"],
      ["Artists' Gym Mural", "/images/mural1.png"],
      ["God of War Mural", "/images/mural2.png"],
      ["Japanese Hannya Mask Mural", publicImage("fineart", "Murals", "img-8630-web.jpg")],
      ["Sky Inspired Mural", "/images/mural4.png"],
      ["Tool Inspired Mural", "/images/mural3.png"],
    ],
    "Plein Air": [
      ["Plein Air Video", "/video-plein-air.mp4", "video"],
      ["Plein Air 01", "/images/PLEINAIR/img-4197-web.jpg"],
      ["Plein Air 02", "/images/PLEINAIR/img-4198-web.jpg"],
      ["Plein Air 03", "/images/PLEINAIR/img-4200-web.jpg"],
      ["Plein Air 04", "/images/PLEINAIR/img-4206-web.jpg"],
      ["Plein Air 05", "/images/PLEINAIR/img-4400-web.jpg"],
    ],
    Events: [
      ["Helmet Competition", eventImage("Helmet Copetition", "ea3cf8d3-7d31-4bb9-9337-dccb17b81b31-3-web.jpg")],
      ["Spirit of Sharjah", eventImage("Art Competition  - The Spirit of Sharjah", "img-2436-web.jpg")],
      ["Art of Motorcycle", eventImage("ART OF MOTOCYCLE (AOM) - EVENT", "img-2018-2-web.jpg")],
      ["Exhibitions", eventImage("Exhibitions", "img-4378-web.jpg")],
      ["MasterClass University Of Arts Sharjah", eventImage("MasterClass UAS", "MasterClass - Fairytale Mural UAS Second year Students.png")],
      ["World Stage Design", eventImage("World Stage Design", "91058fbf-2ede-4bff-ae6a-ec7620d59897-web.jpg")],
      ["Creative Genius Award", eventImage("AWARD - CREATIVE GENIUS AWARD", "Captura de pantalla 2026-07-27 140657.png")],
      ["Helmet Video", eventImage("Helmet Copetition", "IMG_1600.MOV"), "video"],
    ],
    "Scenic Art, Faux Finishes & Props": [
      ["Banana Food Prop", propsImage("Scenic Art & Faux finishes", "food-props-banana-web.jpg")],
      ["Cabaret Mask", propsImage("Scenic Art & Faux finishes", "cabaret-mask-1-web.jpg")],
      ["Magic Book", propsImage("Scenic Art & Faux finishes", "magic-book-988-web.jpg")],
      ["Antique Key", propsImage("Scenic Art & Faux finishes", "antique-key-web.jpg")],
      ["Fantasy Axe", propsImage("Scenic Art & Faux finishes", "props1.jpeg")],
      ["Aged Revolver", propsImage("Scenic Art & Faux finishes", "props5.jpeg")],
    ],
    Sculptures: [
      ["Decorating the Sculpture", propsImage("Sculptures", "decorating-sculpture-1-web.jpg")],
      ["Graveyard Mask", propsImage("Sculptures", "graveyard-mask-web.jpg")],
      ["Spirit in a Mirror", propsImage("Sculptures", "spirit-in-a-mirror-web.jpg")],
      ["Space Explorer Patina", propsImage("Sculptures", "space-explorer-patina-web.jpg")],
      ["Sculpture Detail Video", propsImage("Sculptures", "sculpture-detail-web.mp4"), "video"],
    ],
    "Wearable Props": [
      ["Cyborg Headpiece", propsImage("Wearable props", "cyborg headpiece.JPG")],
      ["Bungee Headpiece", propsImage("Wearable props", "Bungee Headpiece 2.PNG")],
      ["Headpiece for the King", propsImage("Wearable props", "headpiece for King.jpg")],
      ["Guard Headpiece", propsImage("Wearable props", "Guard headpiece.JPG")],
      ["Ritual Zombie Mask", propsImage("Wearable props", "ritual zombie mask.jpg")],
      ["Cyborg Headpiece Video", propsImage("Wearable props", "cyborg-headpiece-male-1-web.mp4"), "video"],
    ],
    About: [
      ["Artist Portrait", "/images/aboutme-web.jpg"],
      ["Home Portrait", "/images/who-i-am-home-web.jpg"],
    ],
  };

  return Object.entries(sections).flatMap(([section, items]) =>
    items.map(([title, src, kind], order) =>
      seededItem(section, title, src, order, kind),
    ),
  );
}

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
  try {
    const file = await readFile(mediaDataFile, "utf8");
    const items = JSON.parse(file) as AdminMediaItem[];
    return items.length > 0 ? items : seededMedia();
  } catch {
    return seededMedia();
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
    src: isVercel
      ? `/api/artist/uploaded/${sectionSlug || "general"}/${filename}`
      : `/uploads/artist-media/${sectionSlug || "general"}/${filename}`,
  };
}

export function uploadedMediaPath(section: string, filename: string) {
  return path.join(uploadRoot, section, filename);
}
