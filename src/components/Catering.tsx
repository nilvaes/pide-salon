import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function Catering() {
  const { lang } = useLanguage();
  const { catering } = content;

  return (
    <section
      id="catering"
      className="scroll-mt-20 bg-bosporus-red-dark py-16 sm:py-20"
      aria-labelledby="catering-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="catering-heading"
          className="font-display text-3xl font-bold text-bosporus-gold sm:text-4xl"
        >
          {catering.heading[lang]}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-bosporus-cream/95 leading-relaxed">
          {catering.text[lang]}
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border-2 border-bosporus-gold bg-transparent px-6 py-3 font-medium text-bosporus-gold transition hover:bg-bosporus-gold hover:text-bosporus-red-dark focus:outline-none focus:ring-2 focus:ring-bosporus-gold focus:ring-offset-2 focus:ring-offset-bosporus-red-dark"
          >
            {catering.cta[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
