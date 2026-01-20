import Link from "next/link";
import Container from "./Container";
import { footerNav, mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "./icons";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1322]">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.4fr_2fr_1.2fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/40">
              <span className="text-base font-semibold text-emerald-200">
                CR
              </span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-400">
            Consent-first identification for modern teams. Learn who your best
            visitors are without compromising privacy.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-emerald-300/40 hover:text-emerald-200"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Main Navigation
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-emerald-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {footerNav
                .filter(
                  (item) =>
                    !mainNav.some((mainItem) => mainItem.href === item.href)
                )
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition hover:text-emerald-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0b1b30] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Newsletter
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Get privacy-first growth tactics delivered monthly.
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className="h-11 flex-1 rounded-full border border-white/10 bg-[#0a1322] px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-emerald-300 px-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-emerald-200"
            >
              Join
            </button>
          </form>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Privacy-first identification. No cookies. No compromise.</p>
        </Container>
      </div>
    </footer>
  );
}
