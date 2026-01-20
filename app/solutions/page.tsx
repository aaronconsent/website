import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore privacy-first identification solutions tailored for regulated teams.",
};

export default function SolutionsPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Solutions"
        description="Explore privacy-first identification solutions tailored for regulated teams."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Solution briefs, product flows, and integration diagrams will live
            here. Add screenshots and feature highlights as you iterate.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            Talk to our team
          </Link>
        </div>
      </Container>
    </div>
  );
}
