import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { lang } = useLanguage();
  const { hero } = content;

  return (
    <section
      className="relative min-h-[70vh] overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Istanbul evening – full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}istanbul-evening.jpg)` }}
        aria-hidden
      />
      {/* Dark overlay: kırmızı-maroon ton, tema ile uyumlu + metin okunaklılığı */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-bosporus-red-dark/90 via-bosporus-red-dark/75 to-bosporus-red-dark/50"
        aria-hidden
      />
      {/* Hafif altın desen */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A227' stroke-width='.5'%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%23C9A227'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1
            id="hero-title"
            className="font-display text-4xl font-bold tracking-tight text-bosporus-gold sm:text-5xl lg:text-6xl drop-shadow-sm"
          >
            {hero.title[lang]}
          </h1>
          <p className="mt-2 font-script text-2xl text-bosporus-cream/95 sm:text-3xl drop-shadow-sm">
            {hero.tagline[lang]}
          </p>
          <p className="mt-6 text-lg text-bosporus-cream/90 leading-relaxed max-w-xl">
            {hero.intro[lang]}
          </p>
          <div className="mt-10 flex justify-start">
            <a
              href="#menu"
              className="inline-flex items-center rounded-lg bg-bosporus-gold px-6 py-3 font-medium text-bosporus-red-dark shadow-md transition hover:bg-bosporus-gold-dark focus:outline-none focus:ring-2 focus:ring-bosporus-gold focus:ring-offset-2 focus:ring-offset-bosporus-red-dark"
            >
              {content.nav.menu[lang]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
