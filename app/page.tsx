import Link from "next/link";
import Container from "@/components/Container";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldIcon,
} from "@/components/icons";

const stats = [
  { label: "Anonymous", value: "95%" },
  { label: "Monthly waste", value: "$42k" },
  { label: "Consent rate", value: "0%" },
];

const riskItems = [
  "Fingerprinting without consent",
  "Shadow profiles and hidden tracking",
  "Exposure to $50k+ privacy lawsuits",
];

const safeItems = [
  "Explicit opt-in visitor matching",
  "Real-time privacy firewall",
  "Zero legal liability. No lawsuits.",
];

const steps = [
  {
    title: "Install script",
    description:
      "Add our lightweight, privacy-hardened snippet to your header in 2 minutes.",
  },
  {
    title: "Give consent",
    description:
      "Our AI-driven banner ensures visitors understand and agree before any ID.",
  },
  {
    title: "See visitors",
    description:
      "Resolve contact details and CRM profiles for visitors who say yes.",
  },
];

const industries = ["Banking", "Healthcare", "Legal", "Real Estate", "SaaS"];

export default function Home() {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 sm:pt-20">
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[140px]" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/90">
              Privacy-first identification
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your website gets visitors.{" "}
              <span className="text-emerald-300">
                You don&apos;t know who they are.
              </span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              95% of your traffic is anonymous. Identify them the safe way with
              privacy-first tools that respect compliance and boost revenue.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-300/20 transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                Start $10 trial
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-200 hover:text-emerald-200"
              >
                See how it works
              </Link>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Consent Resolve
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-10 hidden h-40 w-40 rounded-full border border-emerald-300/30 bg-emerald-300/5 blur-3xl lg:block" />
            <div className="rounded-3xl border border-white/10 bg-[#0f1d32]/90 p-8 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/30" />
              </div>
              <div className="mt-10 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-300/15 ring-1 ring-emerald-300/40">
                  <ShieldIcon className="h-10 w-10 text-emerald-200" />
                </div>
              </div>
              <div className="mt-10 grid gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b182b] px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/15">
                    <CheckIcon className="h-5 w-5 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Matched visitor
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Sarah Miller
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-emerald-200">
                    Banking
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b182b] px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/15">
                    <ShieldIcon className="h-5 w-5 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Consent logged
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Verified &amp; stored
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-emerald-200">
                    Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem statement */}
      <section className="py-6">
        <Container className="text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Anonymous traffic is silent waste
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            Every unaptured visitor is a lost opportunity. Traditional tracking
            is dead, and privacy laws are tightening. You need a way to identify
            high-intent leads without risking your brand&apos;s reputation or
            legal standing.
          </p>
        </Container>
      </section>

      {/* Revenue leak stats */}
      <section>
        <Container>
          <div className="rounded-3xl border border-white/10 bg-[#0f1d32] px-8 py-10 shadow-xl shadow-black/30">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-300/80">
                  Stop the revenue leak
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Your pipeline is leaking by the hour.
                </h3>
              </div>
              <ArrowRightIcon className="h-8 w-8 rotate-90 text-rose-400" />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/5 bg-[#0b182b] px-6 py-6 text-center"
                >
                  <p className="text-2xl font-semibold text-rose-300">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Risk comparison */}
      <section>
        <Container>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              The Risk of Getting It Wrong
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Choose consent-first identification
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-rose-300/30 bg-[#111a2c] p-6 shadow-xl shadow-black/30">
              <div className="flex items-center gap-3 text-rose-300">
                <AlertTriangleIcon className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                  Most visitor ID tools
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {riskItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-rose-300">
                Legal risk: HIPAA, GDPR, CCPA, complaints
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-300/40 bg-[#0f2033] p-6 shadow-xl shadow-black/30">
              <div className="flex items-center gap-3 text-emerald-200">
                <ShieldIcon className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                  Consent-first identification
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {safeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 text-emerald-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/how-it-works"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                See the safe way
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Compliant growth steps */}
      <section>
        <Container>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Three steps to compliant growth
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Turn anonymous visitors into qualified leads
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-[#0f1d32] p-6 shadow-lg shadow-black/30"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing math */}
      <section>
        <Container>
          <div className="rounded-3xl border border-white/10 bg-[#0f1d32] p-8 shadow-xl shadow-black/30">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  The math is simple.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  One lead can end a business. One subscription can build it.
                  Which side of the equation are you on?
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="rounded-2xl border border-emerald-300/30 bg-[#0b182b] px-6 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Your trial
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-emerald-200">
                    $10
                  </p>
                </div>
                <div className="rounded-2xl border border-rose-300/30 bg-[#0b182b] px-6 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Risk of loss
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-rose-300">
                    $50k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industry focus */}
      <section>
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Purpose-built for regulated industries
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-white/10 bg-[#0f1d32] px-4 py-4 text-center text-sm font-semibold text-slate-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section>
        <Container>
          <div className="rounded-3xl bg-emerald-300 px-8 py-12 text-center text-slate-900 shadow-2xl shadow-emerald-300/30">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Stop losing visitors. Start growing safely.
            </h2>
            <p className="mt-3 text-sm text-emerald-950/80">
              Join 500+ companies identifying leads without the legal headache.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Start your $10 trial now
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
