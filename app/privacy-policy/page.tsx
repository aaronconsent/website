import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Review how Consent Resolve handles data and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Privacy Policy"
        description="Review how Consent Resolve handles data and privacy."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Add your formal privacy policy here. Include data handling,
            retention, and user rights information once legal review is
            complete.
          </p>
        </div>
      </Container>
    </div>
  );
}
