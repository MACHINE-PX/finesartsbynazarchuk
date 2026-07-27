"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export function ArtistLoginForm() {
  const [username, setUsername] = useState("artist");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/artist/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (!response.ok) {
      setError("Usuario o contrasena incorrectos.");
      return;
    }

    window.location.href = "/artist-admin";
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md border border-white/12 bg-[#11100e] p-6 shadow-2xl shadow-black/40"
    >
      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-[#c99762]/55 text-[#c99762]">
        <Lock size={18} />
      </div>
      <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#c99762]">
        Artist access
      </p>
      <h1 className="mt-4 font-serif text-[clamp(3rem,8vw,5rem)] font-light leading-[0.85]">
        Studio login
      </h1>

      <label className="mt-9 block">
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/45">
          Usuario
        </span>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="mt-3 w-full border border-white/12 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c99762]"
          autoComplete="username"
        />
      </label>

      <label className="mt-5 block">
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/45">
          Contrasena
        </span>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-3 w-full border border-white/12 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c99762]"
          type="password"
          autoComplete="current-password"
        />
      </label>

      {error ? <p className="mt-4 text-sm text-[#d9a36b]">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full bg-[#c99762] px-5 py-4 font-mono text-[9px] uppercase tracking-[0.24em] text-black transition-opacity hover:opacity-85 disabled:opacity-45"
      >
        {loading ? "Entering..." : "Enter admin"}
      </button>
    </form>
  );
}
