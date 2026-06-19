import { hero, gallery } from "../content";

export function Hero() {
  return (
    <section id="top" className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight">
            {hero.heading}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-ink/70 leading-relaxed">
            {hero.subheading}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="inline-block px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-block px-6 py-3 border border-ink/15 rounded-full font-medium hover:bg-ink/5 transition"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
        <img
          src={gallery.heroImage.src}
          alt={gallery.heroImage.alt}
          className="rounded-3xl w-full h-auto object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
