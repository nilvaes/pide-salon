import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { lang } = useLanguage();
  const { hero } = content;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-bosporus-red-dark via-bosporus-red to-bosporus-brown"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="max-w-2xl">
            <h1
              id="hero-title"
              className="font-display text-4xl font-bold tracking-tight text-bosporus-gold sm:text-5xl lg:text-6xl"
            >
              {hero.title[lang]}
            </h1>
            <p className="mt-2 font-script text-2xl text-bosporus-cream/95 sm:text-3xl">
              {hero.tagline[lang]}
            </p>
            <p className="mt-6 text-lg text-bosporus-cream/90 leading-relaxed">
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
          <div className="hidden lg:flex lg:justify-end">
            <img
              src="/lahmacun-card.png"
              alt="Lahmacun"
              className="max-h-80 w-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
