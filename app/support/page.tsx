import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support / FAQ",
  description:
    "Find answers to common questions about Consent Resolve and privacy-first identification.",
};

export default function SupportPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Support / FAQ"
        description="Find answers to common questions about Consent Resolve and privacy-first identification."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Provide your FAQ list, onboarding guides, and support SLAs here. Add
            a support portal link when available.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            Contact support
          </Link>
        </div>
      </Container>
    </div>
  );
}
