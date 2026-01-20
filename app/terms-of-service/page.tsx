import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Consent Resolve terms of service and usage policies.",
};

export default function TermsOfServicePage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Terms of Service"
        description="Read the Consent Resolve terms of service and usage policies."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Include your legal terms, acceptable use policies, and billing terms
            here. Replace this copy once legal has approved the final language.
          </p>
        </div>
      </Container>
    </div>
  );
}
