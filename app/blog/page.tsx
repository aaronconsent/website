import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on privacy, consent, and revenue growth for regulated industries.",
};

export default function BlogPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Blog"
        description="Insights on privacy, consent, and revenue growth for regulated industries."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Publish thought leadership, product updates, and customer stories
            here. Add article cards with tags once available.
          </p>
        </div>
      </Container>
    </div>
  );
}
