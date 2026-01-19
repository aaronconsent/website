import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Discover the industries and teams that benefit from consent-first identification.",
};

export default function WhoWeServePage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Who We Serve"
        description="Discover the industries and teams that benefit from consent-first identification."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Highlight vertical-specific outcomes, compliance stories, and
            customer wins here. Add logos and testimonials as you gather them.
          </p>
          <Link
            href="/resources"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            View case studies
          </Link>
        </div>
      </Container>
    </div>
  );
}
