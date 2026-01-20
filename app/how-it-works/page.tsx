import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it Works",
  description:
    "See how Consent Resolve captures consent and matches visitors safely.",
};

export default function HowItWorksPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="How it Works"
        description="See how Consent Resolve captures consent and matches visitors safely."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Replace this placeholder with a step-by-step walkthrough, diagrams,
            and product screenshots as they become available.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            Book a demo
          </Link>
        </div>
      </Container>
    </div>
  );
}
