"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { ArrowRightIcon, CloseIcon, MenuIcon, ShieldIcon } from "./icons";

const cta = { label: "Start your $10 trial", href: "/pricing" };

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1424]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/40">
            <ShieldIcon className="h-5 w-5 text-emerald-300" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-300/20 transition hover:-translate-y-0.5 hover:bg-emerald-200"
          >
            {cta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </Container>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0b1424]/95 backdrop-blur lg:hidden"
        >
          <Container className="flex flex-col gap-6 py-6">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-200">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-emerald-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-300/20 transition hover:-translate-y-0.5 hover:bg-emerald-200"
              onClick={() => setIsOpen(false)}
            >
              {cta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
