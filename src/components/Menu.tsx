import { content } from '../content/content';
import type { Lang, MenuItem } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

const base = import.meta.env.BASE_URL;

function MenuRow({
  item,
  lang,
}: {
  item: MenuItem;
  lang: Lang;
}) {
  const isHighlight = 'highlight' in item && item.highlight;
  return (
    <li
      className={`flex items-baseline justify-between gap-3 border-b border-bosporus-red/[0.08] py-2.5 last:border-0 sm:py-3 ${
        isHighlight
          ? 'rounded-lg border border-bosporus-gold/40 bg-bosporus-gold/5 px-3 -mx-1'
          : ''
      }`}
    >
      <span className="min-w-0 text-bosporus-brown font-medium leading-snug">
        {item.name[lang]}
        {isHighlight && (
          <span className="ml-2 text-xs font-semibold text-bosporus-gold-dark">
            ({lang === 'de' ? 'Spezialität' : 'Özel'})
          </span>
        )}
      </span>
      <span className="shrink-0 tabular-nums font-medium text-bosporus-red">{item.price}</span>
    </li>
  );
}

function SectionTitle({
  title,
  subtitle,
  lang,
}: {
  title: { de: string; tr: string };
  subtitle?: { de: string; tr: string };
  lang: Lang;
}) {
  return (
    <div className="mb-4">
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-bosporus-red-dark sm:text-2xl">
        {title[lang]}
      </h3>
      {subtitle && subtitle[lang].trim() !== '' && (
        <p className="mt-1 text-sm font-medium text-bosporus-brown/70">{subtitle[lang]}</p>
      )}
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-bosporus-gold to-transparent" />
    </div>
  );
}

export function Menu() {
  const { lang } = useLanguage();
  const { menu } = content;

  return (
    <section
      id="menu"
      className="scroll-mt-20 bg-bosporus-cream pb-16 pt-9 sm:pb-24 sm:pt-11"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center sm:text-left">
          <p className="mb-4 inline-block rounded-full border border-bosporus-gold/50 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-bosporus-red-dark">
            {lang === 'de' ? 'Traditionelle Küche' : 'Geleneksel mutfak'}
          </p>
          <h2 className="font-display text-3xl font-bold text-bosporus-red-dark sm:text-4xl lg:text-5xl">
            {menu.heading[lang]}
          </h2>
        </div>

        <div className="mt-10 space-y-12 lg:mt-12 lg:space-y-16">
          {/* Lahmacun + görsel */}
          <div className="overflow-hidden rounded-2xl border border-bosporus-red/10 bg-white shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="min-w-0 flex-1 px-5 py-8 sm:px-8 sm:py-10">
                <SectionTitle
                  title={menu.lahmacun.title}
                  subtitle={menu.lahmacun.subtitle}
                  lang={lang}
                />
                <ul className="mt-2" role="list">
                  {menu.lahmacun.items.map((item, i) => (
                    <MenuRow key={`l-${i}`} item={item} lang={lang} />
                  ))}
                </ul>
              </div>
              <div className="h-48 w-full shrink-0 md:h-auto md:w-[38%] md:max-w-md">
                <img
                  src={`${base}lahmacun.jpg`}
                  alt=""
                  className="h-full w-full object-cover brightness-[1.06] saturate-[0.72]"
                />
              </div>
            </div>
          </div>

          {/* Pide – 2 sütun grid */}
          <div className="overflow-hidden rounded-2xl border border-bosporus-red/10 bg-white shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="min-w-0 flex-1 px-5 py-8 sm:px-8 sm:py-10">
                <SectionTitle
                  title={menu.pide.title}
                  subtitle={menu.pide.subtitle}
                  lang={lang}
                />
                <ul
                  className="mt-2 grid gap-0 sm:grid-cols-2 sm:gap-x-8"
                  role="list"
                >
                  {menu.pide.items.map((item, i) => (
                    <MenuRow key={`p-${i}`} item={item} lang={lang} />
                  ))}
                </ul>
              </div>
              <div className="h-48 w-full shrink-0 md:h-auto md:w-[38%] md:max-w-md">
                <img
                  src={`${base}pide.jpg`}
                  alt=""
                  className="h-full w-full object-cover brightness-[1.06] saturate-[0.72]"
                />
              </div>
            </div>
          </div>

          {/* Salate + İçecekler */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-2xl border border-bosporus-red/10 bg-[#f7f3ec] p-6 shadow-md sm:p-8">
              <SectionTitle title={menu.salate.title} lang={lang} />
              <ul className="mt-2" role="list">
                {menu.salate.items.map((item, i) => (
                  <MenuRow key={`s-${i}`} item={item} lang={lang} />
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-bosporus-red/10 bg-[#f7f3ec] p-6 shadow-md sm:p-8">
              <SectionTitle title={menu.getraenke.title} lang={lang} />
              <ul className="mt-2" role="list">
                {menu.getraenke.items.map((item, i) => (
                  <MenuRow key={`g-${i}`} item={item} lang={lang} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
