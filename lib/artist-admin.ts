import "server-only";

import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { Dirent } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

export type AdminMediaKind = "image" | "video";

export type AdminMediaItem = {
  id: string;
  section: string;
  collection: string;
  title: string;
  kind: AdminMediaKind;
  src: string;
  filename: string;
  order: number;
  createdAt: string;
  source?: "site" | "upload";
};

const SESSION_COOKIE = "artist_admin_session";
const DEFAULT_COLLECTION = "General";
const MEDIA_EXTENSIONS = /\.(jpe?g|png|webp|gif|mp4|mov|m4v)$/i;
const isVercel = Boolean(process.env.VERCEL);
const runtimeRoot = isVercel
  ? path.join("/tmp", "artist-admin")
  : process.cwd();
const uploadRoot = isVercel
  ? path.join(runtimeRoot, "uploads", "artist-media")
  : path.join(process.cwd(), "public", "uploads", "artist-media");
const dataRoot = isVercel
  ? path.join(runtimeRoot, "data")
  : path.join(process.cwd(), "data");
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

function titleFromFilename(file: string) {
  return decodeURIComponent(file)
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function mediaKindFromFilename(file: string): AdminMediaKind {
  return /\.(mp4|mov|m4v)$/i.test(file) ? "video" : "image";
}

function collectionFromEventFolder(folder: string) {
  const names: Record<string, string> = {
    "Art Competition  - The Spirit of Sharjah": "The Spirit of Sharjah",
    "ART OF MOTOCYCLE (AOM) - EVENT": "Art of Motorcycle",
    "Helmet Copetition": "Helmet Competition",
    "MasterClass UAS": "MasterClass University Of Arts Sharjah",
    "World Stage Design": "World Stage Design",
    "AWARD - CREATIVE GENIUS AWARD": "Creative Genius Award",
    Exhibitions: "Exhibitions",
  };

  return names[folder] || titleFromFilename(folder);
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function seededItem(
  section: string,
  title: string,
  src: string,
  order: number,
  kind: AdminMediaKind = "image",
  collection = DEFAULT_COLLECTION,
): AdminMediaItem {
  const filename = src.split("/").pop() || title;

  return {
    id: `site-${slug(section)}-${slug(collection)}-${order}`,
    section,
    collection,
    title,
    kind,
    src,
    filename,
    order,
    createdAt: "2026-01-01T00:00:00.000Z",
    source: "site",
  };
}

type SeedEntry = [
  title: string,
  src: string,
  kind?: AdminMediaKind,
  collection?: string,
];

async function listPublicMedia(
  section: string,
  collection: string,
  publicParts: string[],
  startOrder: number,
) {
  const root = path.join(process.cwd(), "public", ...publicParts);
  const media: AdminMediaItem[] = [];

  async function walk(current: string, relativeParts: string[] = []) {
    let entries: Dirent[];

    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries.sort((left, right) =>
      left.name.localeCompare(right.name),
    )) {
      const absolute = path.join(current, entry.name);
      const nextRelativeParts = [...relativeParts, entry.name];

      if (entry.isDirectory()) {
        await walk(absolute, nextRelativeParts);
        continue;
      }

      if (!MEDIA_EXTENSIONS.test(entry.name)) {
        continue;
      }

      const itemCollection =
        publicParts.at(-1) === "EVENTS" && nextRelativeParts.length > 1
          ? collectionFromEventFolder(nextRelativeParts[0])
          : collection;
      const src = `/${["images", ...publicParts.slice(1), ...nextRelativeParts]
        .map(encodeURIComponent)
        .join("/")}`;
      const order = startOrder + media.length;

      media.push(
        seededItem(
          section,
          titleFromFilename(entry.name),
          src,
          order,
          mediaKindFromFilename(entry.name),
          itemCollection,
        ),
      );
    }
  }

  await walk(root);
  return media;
}

async function seededMedia() {
  const sections: Record<string, SeedEntry[]> = {
    Paintings: [
      [
        "Motorcycle Study",
        publicImage("fineart", "Paintings", "IMG_4681.jpg"),
        "image",
        "Selected paintings",
      ],
      [
        "Merchants Weighing Pearl",
        publicImage("fineart", "Paintings", "IMG_2436.jpg"),
        "image",
        "Selected paintings",
      ],
      [
        "Stage Composition",
        publicImage("fineart", "Paintings", "IMG_3260.jpg"),
        "image",
        "Selected paintings",
      ],
      [
        "Musician Study",
        publicImage("fineart", "Paintings", "IMG_4537.jpg"),
        "image",
        "Selected paintings",
      ],
      [
        "Elder Portrait",
        publicImage("fineart", "Paintings", "FullSizeRender 2.jpg"),
        "image",
        "Portraits",
      ],
      [
        "Bridge and Sky",
        publicImage("fineart", "Paintings", "IMG_1397.jpg"),
        "image",
        "Portraits",
      ],
      [
        "Elder Portrait Process",
        publicImage("fineart", "Paintings", "FullSizeRender.JPG"),
        "image",
        "Portraits",
      ],
      [
        "Sunset Water Study",
        publicImage("fineart", "Paintings", "IMG_0426.jpg"),
        "image",
        "Landscapes",
      ],
      [
        "Distant City",
        publicImage("fineart", "Paintings", "IMG_0622.jpg"),
        "image",
        "Landscapes",
      ],
      [
        "Studio Easel",
        publicImage("fineart", "Paintings", "IMG_1101.JPG"),
        "image",
        "Framed & in progress",
      ],
      [
        "Galaxy Painting",
        publicImage("fineart", "Paintings", "img-2858-web.jpg"),
        "image",
        "Framed & in progress",
      ],
      [
        "Courtyard Video",
        publicImage("fineart", "Paintings", "sashko-courtyard-web.m4v"),
        "video",
        "Framed & in progress",
      ],
    ],
    Murals: [
      ["Art Nouveau Mural", "/images/MURALS-ART%20NUVOU2.png", "image", "Selected murals"],
      ["Artists' Gym Mural", "/images/mural1.png", "image", "Selected murals"],
      ["God of War Mural", "/images/mural2.png", "image", "Selected murals"],
      [
        "Japanese Hannya Mask Mural",
        publicImage("fineart", "Murals", "img-8630-web.jpg"),
        "image",
        "Selected murals",
      ],
      ["Sky Inspired Mural", "/images/mural4.png", "image", "Selected murals"],
      ["Tool Inspired Mural", "/images/mural3.png", "image", "Selected murals"],
      ["Natural Dye Triptych", "/images/MURALS-ART%20NUVOU1.png", "image", "Selected murals"],
    ],
    "Plein Air": [
      ["Plein Air Video", "/video-plein-air.mp4", "video", "Field archive"],
      ["Plein Air 01", "/images/PLEINAIR/img-4197-web.jpg", "image", "Field archive"],
      ["Plein Air 02", "/images/PLEINAIR/img-4198-web.jpg", "image", "Field archive"],
      ["Plein Air 03", "/images/PLEINAIR/img-4200-web.jpg", "image", "Field archive"],
      ["Plein Air 04", "/images/PLEINAIR/img-4206-web.jpg", "image", "Field archive"],
      ["Plein Air 05", "/images/PLEINAIR/img-4400-web.jpg", "image", "Field archive"],
    ],
    Events: [
      [
        "Helmet Competition",
        eventImage("Helmet Copetition", "ea3cf8d3-7d31-4bb9-9337-dccb17b81b31-3-web.jpg"),
        "image",
        "Helmet Competition",
      ],
      [
        "Spirit of Sharjah",
        eventImage("Art Competition  - The Spirit of Sharjah", "img-2436-web.jpg"),
        "image",
        "The Spirit of Sharjah",
      ],
      [
        "Art of Motorcycle",
        eventImage("ART OF MOTOCYCLE (AOM) - EVENT", "img-2018-2-web.jpg"),
        "image",
        "Art of Motorcycle",
      ],
      ["Exhibitions", eventImage("Exhibitions", "img-4378-web.jpg"), "image", "Exhibitions"],
      [
        "MasterClass University Of Arts Sharjah",
        eventImage("MasterClass UAS", "MasterClass - Fairytale Mural UAS Second year Students.png"),
        "image",
        "MasterClass University Of Arts Sharjah",
      ],
      [
        "World Stage Design",
        eventImage("World Stage Design", "91058fbf-2ede-4bff-ae6a-ec7620d59897-web.jpg"),
        "image",
        "World Stage Design",
      ],
      [
        "Creative Genius Award",
        eventImage("AWARD - CREATIVE GENIUS AWARD", "Captura de pantalla 2026-07-27 140657.png"),
        "image",
        "Creative Genius Award",
      ],
      ["Helmet Video", eventImage("Helmet Copetition", "IMG_1600.MOV"), "video", "Helmet Competition"],
    ],
    "Scenic Art, Faux Finishes & Props": [
      ["Banana Food Prop", propsImage("Scenic Art & Faux finishes", "food-props-banana-web.jpg"), "image", "Scenic props"],
      ["Cabaret Mask", propsImage("Scenic Art & Faux finishes", "cabaret-mask-1-web.jpg"), "image", "Scenic props"],
      ["Magic Book", propsImage("Scenic Art & Faux finishes", "magic-book-988-web.jpg"), "image", "Scenic props"],
      ["Antique Key", propsImage("Scenic Art & Faux finishes", "antique-key-web.jpg"), "image", "Scenic props"],
      ["Fantasy Axe", propsImage("Scenic Art & Faux finishes", "props1.jpeg"), "image", "Scenic props"],
      ["Aged Revolver", propsImage("Scenic Art & Faux finishes", "props5.jpeg"), "image", "Scenic props"],
    ],
    Sculptures: [
      ["Decorating the Sculpture", propsImage("Sculptures", "decorating-sculpture-1-web.jpg"), "image", "Sculpture studies"],
      ["Graveyard Mask", propsImage("Sculptures", "graveyard-mask-web.jpg"), "image", "Sculpture studies"],
      ["Spirit in a Mirror", propsImage("Sculptures", "spirit-in-a-mirror-web.jpg"), "image", "Sculpture studies"],
      ["Space Explorer Patina", propsImage("Sculptures", "space-explorer-patina-web.jpg"), "image", "Sculpture studies"],
      ["Sculpture Detail Video", propsImage("Sculptures", "sculpture-detail-web.mp4"), "video", "Sculpture studies"],
    ],
    "Wearable Props": [
      ["Cyborg Headpiece", propsImage("Wearable props", "cyborg headpiece.JPG"), "image", "Wearable archive"],
      ["Bungee Headpiece", propsImage("Wearable props", "Bungee Headpiece 2.PNG"), "image", "Wearable archive"],
      ["Headpiece for the King", propsImage("Wearable props", "headpiece for King.jpg"), "image", "Wearable archive"],
      ["Guard Headpiece", propsImage("Wearable props", "Guard headpiece.JPG"), "image", "Wearable archive"],
      ["Ritual Zombie Mask", propsImage("Wearable props", "ritual zombie mask.jpg"), "image", "Wearable archive"],
      ["Cyborg Headpiece Video", propsImage("Wearable props", "cyborg-headpiece-male-1-web.mp4"), "video", "Wearable archive"],
    ],
    About: [
      ["Artist Portrait", "/images/aboutme-web.jpg", "image", "About imagery"],
      ["Home Portrait", "/images/who-i-am-home-web.jpg", "image", "About imagery"],
    ],
  };

  const manual = Object.entries(sections).flatMap(([section, items]) =>
    items.map(([title, src, kind, collection], order) =>
      seededItem(section, title, src, order, kind, collection),
    ),
  );

  const scanned = (
    await Promise.all([
      listPublicMedia("Paintings", "Additional paintings", ["images", "fineart", "Paintings"], 1000),
      listPublicMedia("Murals", "Additional murals", ["images", "fineart", "Murals"], 1000),
      listPublicMedia("Plein Air", "Field archive", ["images", "PLEINAIR"], 1000),
      listPublicMedia("Plein Air", "Additional plein air", ["images", "fineart", "PLEIN AIR"], 2000),
      listPublicMedia("Events", "Events", ["images", "fineart", "EVENTS"], 1000),
      listPublicMedia(
        "Scenic Art, Faux Finishes & Props",
        "Scenic props",
        [
          "images",
          "Props & Scenic -20260619T114546Z-3-001",
          "Props & Scenic",
          "Scenic Art & Faux finishes",
        ],
        1000,
      ),
      listPublicMedia(
        "Sculptures",
        "Sculpture studies",
        [
          "images",
          "Props & Scenic -20260619T114546Z-3-001",
          "Props & Scenic",
          "Sculptures",
        ],
        1000,
      ),
      listPublicMedia(
        "Wearable Props",
        "Wearable archive",
        [
          "images",
          "Props & Scenic -20260619T114546Z-3-001",
          "Props & Scenic",
          "Wearable props",
        ],
        1000,
      ),
    ])
  ).flat();

  return mergeMedia(manual, scanned);
}

function normalizeMediaItem(item: AdminMediaItem): AdminMediaItem {
  return {
    ...item,
    collection: item.collection || DEFAULT_COLLECTION,
    source: item.source || "upload",
  };
}

function mergeMedia(...groups: AdminMediaItem[][]) {
  const byKey = new Map<string, AdminMediaItem>();

  for (const item of groups.flat().map(normalizeMediaItem)) {
    const key = item.src || item.id;

    if (!byKey.has(key)) {
      byKey.set(key, item);
      continue;
    }

    const current = byKey.get(key);
    if (current?.source === "site" && item.source === "upload") {
      byKey.set(key, item);
    }
  }

  return Array.from(byKey.values());
}

function mergeStoredMedia(seed: AdminMediaItem[], stored: AdminMediaItem[]) {
  const byKey = new Map<string, AdminMediaItem>();

  for (const item of seed.map(normalizeMediaItem)) {
    byKey.set(item.src || item.id, item);
  }

  for (const item of stored.map(normalizeMediaItem)) {
    byKey.set(item.src || item.id, item);
  }

  return Array.from(byKey.values());
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
  const seed = await seededMedia();

  try {
    const file = await readFile(mediaDataFile, "utf8");
    const items = (JSON.parse(file) as AdminMediaItem[]).map(normalizeMediaItem);
    return items.length > 0 ? mergeStoredMedia(seed, items) : seed;
  } catch {
    return seed;
  }
}

export async function writeAdminMedia(items: AdminMediaItem[]) {
  await ensureStorage();
  await writeFile(
    mediaDataFile,
    JSON.stringify(items.map(normalizeMediaItem), null, 2),
    "utf8",
  );
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
  const sectionSlug = slug(section);
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
