"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Image as ImageIcon,
  LogOut,
  Save,
  Trash2,
  Upload,
  Video,
} from "lucide-react";
import type { AdminMediaItem } from "@/lib/artist-admin";

type Props = {
  initialItems: AdminMediaItem[];
  sections: string[];
};

export function ArtistAdminDashboard({ initialItems, sections }: Props) {
  const [items, setItems] = useState(initialItems);
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const visibleItems = useMemo(
    () =>
      items
        .filter((item) => item.section === activeSection)
        .sort((left, right) => left.order - right.order),
    [activeSection, items],
  );

  async function uploadMedia(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      setMessage("Selecciona una imagen o video primero.");
      return;
    }

    const formData = new FormData();
    formData.set("file", file);
    formData.set("section", activeSection);
    formData.set("title", title);

    setLoading(true);
    setMessage("");

    const response = await fetch("/api/artist/media", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    setLoading(false);

    if (!response.ok) {
      setMessage(data.error || "No se pudo subir el archivo.");
      return;
    }

    setItems((current) => [...current, data.item]);
    setTitle("");
    setFile(null);
    event.currentTarget.reset();
    setMessage("Archivo agregado correctamente.");
  }

  async function updateItem(item: AdminMediaItem, patch: Partial<AdminMediaItem>) {
    const nextItem = { ...item, ...patch };

    setItems((current) =>
      current.map((entry) => (entry.id === item.id ? nextItem : entry)),
    );

    await fetch("/api/artist/media", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: item.id,
        title: nextItem.title,
        section: nextItem.section,
        order: nextItem.order,
      }),
    });
  }

  async function moveItem(item: AdminMediaItem, direction: -1 | 1) {
    const ordered = [...visibleItems];
    const index = ordered.findIndex((entry) => entry.id === item.id);
    const target = index + direction;

    if (target < 0 || target >= ordered.length) {
      return;
    }

    const swapped = [...ordered];
    [swapped[index], swapped[target]] = [swapped[target], swapped[index]];
    const updates = swapped.map((entry, order) => ({ id: entry.id, order }));

    setItems((current) =>
      current.map((entry) => {
        const update = updates.find((candidate) => candidate.id === entry.id);
        return update ? { ...entry, order: update.order } : entry;
      }),
    );

    await fetch("/api/artist/media", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: updates }),
    });
  }

  async function deleteItem(id: string) {
    const confirmed = window.confirm("Quieres eliminar este item del panel?");
    if (!confirmed) return;

    setItems((current) => current.filter((item) => item.id !== id));
    await fetch(`/api/artist/media?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
  }

  async function logout() {
    await fetch("/api/artist/logout", { method: "POST" });
    window.location.href = "/artist-login";
  }

  return (
    <div className="min-h-screen bg-[#090908] text-[#f2eee5]">
      <header className="border-b border-white/10 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#c99762]">
              Artist admin
            </p>
            <h1 className="mt-2 font-serif text-4xl font-light">
              Content manager
            </h1>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/65 hover:border-[#c99762] hover:text-[#c99762]"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1500px] gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[280px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="grid gap-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`border px-4 py-3 text-left font-mono text-[8px] uppercase tracking-[0.2em] transition-colors ${
                  activeSection === section
                    ? "border-[#c99762] bg-[#c99762] text-black"
                    : "border-white/12 text-white/52 hover:border-[#c99762]"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </aside>

        <section>
          <form
            onSubmit={uploadMedia}
            className="grid gap-4 border border-white/12 bg-[#11100e] p-5 md:grid-cols-[1fr_1fr_auto] md:items-end"
          >
            <label>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/42">
                Nombre / titulo
              </span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-3 w-full border border-white/12 bg-black/25 px-4 py-3 text-sm outline-none focus:border-[#c99762]"
                placeholder="Example: Sunset study"
              />
            </label>

            <label>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/42">
                Imagen o video
              </span>
              <input
                onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                className="mt-3 w-full border border-white/12 bg-black/25 px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-[#c99762] file:px-3 file:py-2 file:text-black"
                type="file"
                accept="image/*,video/*"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-3 bg-[#c99762] px-5 py-4 font-mono text-[8px] uppercase tracking-[0.2em] text-black hover:opacity-85 disabled:opacity-45"
            >
              <Upload size={14} />
              {loading ? "Uploading" : "Add"}
            </button>
          </form>

          {message ? <p className="mt-4 text-sm text-[#c99762]">{message}</p> : null}

          <div className="mt-8 grid gap-4">
            {visibleItems.length === 0 ? (
              <div className="border border-dashed border-white/15 p-10 text-center text-white/42">
                No hay contenido agregado en esta seccion todavia.
              </div>
            ) : (
              visibleItems.map((item, index) => (
                <article
                  key={item.id}
                  className="grid gap-4 border border-white/12 bg-[#11100e] p-4 md:grid-cols-[180px_1fr_auto]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/35">
                    {item.kind === "video" ? (
                      <video
                        src={item.src}
                        className="h-full w-full object-cover"
                        muted
                        playsInline
                        controls
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                    <span className="absolute left-2 top-2 inline-flex items-center gap-1 bg-black/65 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/72">
                      {item.kind === "video" ? <Video size={11} /> : <ImageIcon size={11} />}
                      {item.kind}
                    </span>
                    <span className="absolute bottom-2 left-2 bg-black/65 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/72">
                      {item.source === "site" ? "site" : "upload"}
                    </span>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                        Titulo
                      </span>
                      <input
                        value={item.title}
                        onChange={(event) =>
                          setItems((current) =>
                            current.map((entry) =>
                              entry.id === item.id
                                ? { ...entry, title: event.target.value }
                                : entry,
                            ),
                          )
                        }
                        onBlur={(event) => updateItem(item, { title: event.target.value })}
                        className="mt-2 w-full border border-white/12 bg-black/25 px-3 py-2 text-sm outline-none focus:border-[#c99762]"
                      />
                    </label>
                    <label>
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                        Seccion
                      </span>
                      <select
                        value={item.section}
                        onChange={(event) =>
                          updateItem(item, { section: event.target.value })
                        }
                        className="mt-2 w-full border border-white/12 bg-black/25 px-3 py-2 text-sm outline-none focus:border-[#c99762]"
                      >
                        {sections.map((section) => (
                          <option key={section} value={section}>
                            {section}
                          </option>
                        ))}
                      </select>
                    </label>
                    <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/30 md:col-span-2">
                      Order {index + 1} / {item.filename}
                    </p>
                  </div>

                  <div className="flex gap-2 md:flex-col">
                    <button
                      onClick={() => moveItem(item, -1)}
                      className="flex h-10 w-10 items-center justify-center border border-white/12 hover:border-[#c99762] hover:text-[#c99762]"
                      title="Move up"
                    >
                      <ArrowUp size={15} />
                    </button>
                    <button
                      onClick={() => moveItem(item, 1)}
                      className="flex h-10 w-10 items-center justify-center border border-white/12 hover:border-[#c99762] hover:text-[#c99762]"
                      title="Move down"
                    >
                      <ArrowDown size={15} />
                    </button>
                    <button
                      onClick={() => updateItem(item, item)}
                      className="flex h-10 w-10 items-center justify-center border border-white/12 hover:border-[#c99762] hover:text-[#c99762]"
                      title="Save"
                    >
                      <Save size={15} />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="flex h-10 w-10 items-center justify-center border border-white/12 hover:border-[#c99762] hover:text-[#c99762]"
                      title="Delete"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
