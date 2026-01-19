interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({
  title,
  subtitle = "Consent Resolve",
  description = "This page is ready for your next screenshot and content drop.",
}: PageHeroProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
          {subtitle}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
