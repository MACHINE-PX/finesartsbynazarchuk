import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-foreground/10 bg-[#080808] px-5 text-foreground sm:px-8"
    >
      <div className="mx-auto max-w-[1450px] pb-8 pt-24 md:pt-32">
        <header className="border-b border-foreground/15 pb-10 md:pb-12">
          <span className="block font-mono text-[9px] tracking-[0.32em] text-accent">
            05
          </span>
          <h2
            className="mt-5"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(4.5rem, 8vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 0.78,
              letterSpacing: "-0.025em",
            }}
          >
            Contact
          </h2>
        </header>

        <div className="grid gap-16 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-end md:gap-24 md:py-24">
          <div>
            <blockquote
              className="max-w-3xl text-foreground/82"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(1.7rem, 3vw, 2.65rem)",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.45,
              }}
            >
              &ldquo;{siteConfig.quote}&rdquo;
            </blockquote>

            <address className="mt-12 flex flex-col items-start gap-5 not-italic">
              <ContactLink
                href={`mailto:${siteConfig.email}`}
                icon={<Mail size={13} />}
                label={siteConfig.email}
              />
              <ContactLink
                href={siteConfig.whatsappUrl}
                icon={<Phone size={13} />}
                label={siteConfig.phone}
                external
              />
              <ContactLink
                href={siteConfig.instagramUrl}
                icon={<Instagram size={13} />}
                label={siteConfig.instagramHandle}
                external
              />
            </address>
          </div>

          <div className="md:pb-1">
            <p className="max-w-xl text-sm leading-7 text-foreground/45 md:leading-8">
              Available for murals, plein air painting, fine art commissions,
              live painting workshops, exhibitions, and collaborative cultural
              projects.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-8 inline-flex min-h-14 items-center gap-8 border border-foreground/20 px-8 font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/80 transition-all hover:border-accent hover:bg-accent hover:text-background"
            >
              Get in touch
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-foreground/15 pt-7 sm:flex-row sm:items-center">
          <span
            className="uppercase text-foreground/22"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
            }}
          >
            {siteConfig.shortName}
          </span>
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-foreground/20">
            Portfolio — Murals / Painting / Events / Plein Air
          </span>
        </div>
      </div>
    </footer>
  );
}

function ContactLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex max-w-full items-center gap-4 font-mono text-[9px] tracking-[0.18em] text-foreground/58 transition-colors hover:text-accent sm:text-[10px]"
    >
      <span className="shrink-0 text-foreground/50 transition-colors group-hover:text-accent">
        {icon}
      </span>
      <span className="break-all">{label}</span>
    </a>
  );
}
