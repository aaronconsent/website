import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about the team building consent-first visitor identification.",
};

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="About Us"
        description="Learn more about the team building consent-first visitor identification."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Share your mission, values, and leadership story here. Add timeline
            milestones and team highlights as they are approved.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            Connect with our team
          </Link>
        </div>
      </Container>
    </div>
  );
}
