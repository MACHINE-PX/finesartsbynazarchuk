import { NextResponse } from "next/server";
import {
  type AdminMediaItem,
  adminSections,
  isAdminAuthenticated,
  readAdminMedia,
  saveUploadedMedia,
  writeAdminMedia,
} from "@/lib/artist-admin";

function mediaKind(file: File) {
  if (file.type.startsWith("video/")) {
    return "video" as const;
  }

  return "image" as const;
}

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  return null;
}

export async function GET() {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  return NextResponse.json({
    sections: adminSections,
    items: await readAdminMedia(),
  });
}

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const formData = await request.formData();
  const file = formData.get("file");
  const section = String(formData.get("section") || "Events");
  const collection = String(formData.get("collection") || "General").trim() || "General";
  const title = String(formData.get("title") || "").trim();

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required." }, { status: 400 });
  }

  if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
    return NextResponse.json(
      { error: "Only images and videos are supported." },
      { status: 400 },
    );
  }

  const items = await readAdminMedia();
  const saved = await saveUploadedMedia(file, section);
  const nextOrder =
    Math.max(
      -1,
      ...items
        .filter((item) => item.section === section)
        .filter((item) => item.collection === collection)
        .map((item) => item.order),
    ) + 1;

  const item: AdminMediaItem = {
    id: crypto.randomUUID(),
    section,
    collection,
    title: title || file.name.replace(/\.[^.]+$/, ""),
    kind: mediaKind(file),
    src: saved.src,
    filename: saved.filename,
    order: nextOrder,
    createdAt: new Date().toISOString(),
    source: "upload",
  };

  await writeAdminMedia([...items, item]);

  return NextResponse.json({ item }, { status: 201 });
}

export async function PATCH(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const body = (await request.json().catch(() => null)) as
    | {
        id?: string;
        title?: string;
        section?: string;
        collection?: string;
        order?: number;
        items?: { id: string; order: number }[];
        renameCollection?: {
          section: string;
          from: string;
          to: string;
        };
      }
    | null;

  if (!body) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const items = await readAdminMedia();

  if (body.renameCollection) {
    const from = body.renameCollection.from.trim();
    const to = body.renameCollection.to.trim();

    if (!from || !to) {
      return NextResponse.json(
        { error: "Collection names are required." },
        { status: 400 },
      );
    }

    const nextItems = items.map((item) =>
      item.section === body.renameCollection?.section && item.collection === from
        ? { ...item, collection: to }
        : item,
    );

    await writeAdminMedia(nextItems);
    return NextResponse.json({ items: nextItems });
  }

  const orderUpdates = new Map(
    body.items?.map((item) => [item.id, item.order]) ?? [],
  );

  const nextItems = items.map((item) => {
    if (orderUpdates.has(item.id)) {
      return { ...item, order: orderUpdates.get(item.id) ?? item.order };
    }

    if (body.id !== item.id) {
      return item;
    }

    return {
      ...item,
      title: body.title?.trim() || item.title,
      section: body.section || item.section,
      collection: body.collection?.trim() || item.collection,
      order: typeof body.order === "number" ? body.order : item.order,
    };
  });

  await writeAdminMedia(nextItems);

  return NextResponse.json({ items: nextItems });
}

export async function DELETE(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) return unauthorized;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing id." }, { status: 400 });
  }

  const items = await readAdminMedia();
  const nextItems = items.filter((item) => item.id !== id);

  await writeAdminMedia(nextItems);

  return NextResponse.json({ items: nextItems });
}
