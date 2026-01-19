import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, playbooks, and compliance resources for privacy-first teams.",
};

export default function ResourcesPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Resources"
        description="Guides, playbooks, and compliance resources for privacy-first teams."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Add downloads, whitepapers, and webinars here. Organize by category
            and add filters as you grow the library.
          </p>
          <Link
            href="/blog"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-200 transition hover:text-emerald-100"
          >
            Visit the blog
          </Link>
        </div>
      </Container>
    </div>
  );
}
