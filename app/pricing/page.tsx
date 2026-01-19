import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for privacy-first identification and consent capture.",
};

export default function PricingPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Pricing"
        description="Transparent pricing for privacy-first identification and consent capture."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Pricing tiers and plan comparisons will appear here. Add plan cards,
            FAQs, and feature grids when ready.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            Request a custom quote
          </Link>
        </div>
      </Container>
    </div>
  );
}
