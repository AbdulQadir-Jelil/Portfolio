import Link from "next/link";
import { Braces } from "@/components/icons";
import { contact, nav, siteName, socials } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-16 border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-lg"
            aria-label={`${contact.name} — home`}
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
            >
              <Braces size={15} />
            </span>
            <span className="font-display text-[0.98rem] font-bold tracking-[-0.01em] text-ink">
              {contact.name}
            </span>
          </Link>
          <p className="mt-4 max-w-[42ch] text-[0.92rem] leading-[1.7] text-muted">
            Frontend developer building responsive web and mobile interfaces
            with React, Next.js, TypeScript, Tailwind CSS, and React Native.
          </p>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink">
            Pages
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.92rem] text-muted transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink">
            Elsewhere
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 text-[0.92rem] text-muted transition-colors duration-200 hover:text-accent"
                >
                  <item.Icon size={16} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-5 text-[0.84rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteName}. All rights reserved.
          </p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
