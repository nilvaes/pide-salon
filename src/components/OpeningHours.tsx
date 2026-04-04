import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function OpeningHours() {
  const { lang } = useLanguage();
  const { openingHours } = content;

  return (
    <section
      id="opening-hours"
      className="scroll-mt-20 border-y border-bosporus-red/15 bg-gradient-to-b from-bosporus-cream via-[#efe6dc] to-bosporus-cream py-16 sm:py-20"
      aria-labelledby="opening-hours-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="opening-hours-heading"
          className="font-display text-center text-3xl font-bold text-bosporus-red-dark sm:text-left sm:text-4xl"
        >
          {openingHours.heading[lang]}
        </h2>

        <dl className="mt-10 max-w-2xl space-y-0 sm:mt-12">
          {openingHours.rows.map((row, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border-b border-bosporus-red/20 py-8 first:pt-0 last:border-0 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:py-10"
            >
              <dt className="text-lg font-medium leading-snug text-bosporus-brown sm:text-xl md:text-2xl">
                {row.label[lang]}
              </dt>
              <dd className="font-display text-3xl font-bold tabular-nums tracking-tight text-bosporus-gold sm:text-4xl md:text-5xl">
                {row.time}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
