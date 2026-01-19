import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Consent Resolve team for demos and support.",
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Contact"
        description="Get in touch with the Consent Resolve team for demos and support."
      />
      <Container>
        <div className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 text-sm text-slate-300">
          <p>
            Contact forms, scheduling links, and support channels will be added
            here. Include your preferred email and phone details when ready.
          </p>
        </div>
      </Container>
    </div>
  );
}
