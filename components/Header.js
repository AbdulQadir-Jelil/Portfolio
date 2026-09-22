"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Braces, Close, Mail, Menu } from "@/components/icons";
import { contact, nav, socials } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Close the mobile sheet whenever the route changes. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Lock scrolling and allow Escape while the sheet is open. */
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function isActive(href) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const externalLinks = socials.filter((item) => item.label !== "Email");

  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-bg">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={`${contact.name} — home`}
          className="flex items-center gap-2.5 rounded-lg"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
          >
            <Braces size={16} />
          </span>
          <span className="font-display text-[0.98rem] font-bold leading-tight tracking-[-0.01em] text-ink">
            {contact.name}
            <span className="mt-0.5 block font-body text-[0.78rem] font-normal text-muted">
              Frontend developer
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex min-h-[40px] items-center rounded-lg px-3 text-[0.9rem] font-medium transition-colors duration-200 ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-1.5 h-0.5 rounded-full bg-accent transition-opacity duration-200 ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden min-h-[40px] items-center rounded-lg bg-accent px-4 text-[0.88rem] font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-strong sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-line-strong hover:text-accent lg:hidden"
          >
            {open ? <Close size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/40 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-50 animate-panel-in border-b border-line bg-surface-strong lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page py-5">
              <ul className="grid gap-1">
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-[48px] items-center justify-between rounded-lg px-3 text-[0.98rem] font-medium transition-colors duration-200 ${
                          active
                            ? "bg-accent-soft text-accent"
                            : "text-ink hover:bg-surface"
                        }`}
                      >
                        {item.label}
                        {active ? (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 border-t border-line pt-5">
                <a
                  href={`mailto:${contact.email}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 break-all text-[0.88rem] font-medium text-muted transition-colors duration-200 hover:text-accent"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  {contact.email}
                </a>

                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {externalLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[0.86rem] font-medium text-muted transition-colors duration-200 hover:text-accent"
                      >
                        <item.Icon size={16} />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
