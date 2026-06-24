"use client";

import {
  ArrowUp,
  ArrowUpRight,
  Instagram,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/portfolio-data";

export function SiteFooter() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = "Portfolio inquiry";
    const body = [
      message.trim() || "Hello, I would like to discuss a project with you.",
      "",
      email.trim() ? `My email: ${email.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer
      id="contact"
      className="border-t border-white/8 bg-[#090a0c] px-4 py-5 text-[#f0ece4] sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="mx-auto max-w-[1600px] rounded-[1.8rem] border border-white/75 bg-[#111318] px-5 py-7 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:rounded-[2.4rem] sm:px-9 sm:py-10 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="flex flex-col">
            <p className="font-mono text-[8px] uppercase tracking-[0.34em] text-accent">
              Contact · Commissions · Collaborations
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-[clamp(2.5rem,5vw,5.2rem)] font-light leading-[0.88] tracking-[-0.025em]">
              If the work resonates,
              <br />
              <span className="italic text-white/62">let&apos;s begin a conversation.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[0.86rem] leading-7 text-white/42">
              Available for fine art commissions, murals, plein air painting,
              scenic work, exhibitions, and creative collaborations.
            </p>

            <address className="mt-10 grid gap-3 not-italic sm:grid-cols-2">
              <ContactLink
                href={siteConfig.instagramUrl}
                icon={<Instagram size={17} />}
                eyebrow="Instagram"
                label={siteConfig.instagramHandle}
                external
              />
              <ContactLink
                href={siteConfig.whatsappUrl}
                icon={<MessageCircle size={17} />}
                eyebrow="WhatsApp"
                label={siteConfig.phone}
                external
              />
              <ContactLink
                href={`mailto:${siteConfig.email}`}
                icon={<Mail size={17} />}
                eyebrow="Email"
                label={siteConfig.email}
                wide
              />
            </address>
          </div>

          <form
            onSubmit={openEmail}
            className="border-t border-white/12 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
          >
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-accent">
                  Start a project
                </p>
                <h3 className="mt-3 font-serif text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-none">
                  What&apos;s on your mind?
                </h3>
              </div>
              <span className="hidden font-mono text-[8px] tracking-[0.2em] text-white/22 sm:block">
                01 — 02
              </span>
            </div>

            <label className="mt-8 block">
              <span className="mb-3 block font-mono text-[8px] uppercase tracking-[0.25em] text-white/38">
                Your message
              </span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about the idea, place, or artwork..."
                rows={5}
                className="w-full resize-none rounded-[1.4rem] border border-white/18 bg-white/[0.025] px-5 py-4 text-sm leading-7 text-white outline-none transition-colors placeholder:text-white/22 focus:border-accent/75"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-3 block font-mono text-[8px] uppercase tracking-[0.25em] text-white/38">
                Your email
              </span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="h-14 w-full rounded-full border border-white/18 bg-white/[0.025] px-5 text-sm text-white outline-none transition-colors placeholder:text-white/22 focus:border-accent/75"
              />
            </label>

            <button
              type="submit"
              className="group mt-6 flex min-h-14 w-full items-center justify-between rounded-full bg-[#f0ece4] px-6 font-mono text-[9px] uppercase tracking-[0.24em] text-[#111318] transition-colors hover:bg-accent"
            >
              Open email & send inquiry
              <Send
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            <p className="mt-4 text-[0.7rem] leading-5 text-white/25">
              The button opens your email application with the message already
              prepared. You remain in control before sending it.
            </p>
          </form>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/12 pt-6 sm:flex-row sm:items-center">
          <span className="font-serif text-[1rem] uppercase tracking-[0.2em] text-white/28">
            {siteConfig.shortName}
          </span>
          <div className="flex flex-wrap items-center gap-5">
            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
              Portfolio · Fine Art / Props & Scenic
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex min-h-11 items-center gap-3 rounded-full border border-accent bg-accent px-5 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[#111318] transition-colors hover:border-white hover:bg-white"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactLink({
  href,
  icon,
  eyebrow,
  label,
  external = false,
  wide = false,
}: {
  href: string;
  icon: React.ReactNode;
  eyebrow: string;
  label: string;
  external?: boolean;
  wide?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-accent/55 hover:bg-white/[0.045] ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/55 transition-colors group-hover:border-accent/55 group-hover:text-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[7px] uppercase tracking-[0.24em] text-white/28">
          {eyebrow}
        </span>
        <span className="mt-1 block truncate text-[0.78rem] text-white/65 sm:text-[0.84rem]">
          {label}
        </span>
      </span>
      <ArrowUpRight
        size={12}
        className="ml-auto shrink-0 text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </a>
  );
}
