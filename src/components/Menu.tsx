import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function Menu() {
  const { lang } = useLanguage();
  const { menu } = content;

  return (
    <section id="menu" className="scroll-mt-20 bg-bosporus-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-bosporus-red-dark sm:text-4xl">
          {menu.heading[lang]}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="rounded-xl border border-bosporus-red/20 bg-white p-6 shadow-md">
            <h3 className="font-display text-xl font-semibold text-bosporus-red">
              {menu.pide[lang]}
            </h3>
            <p className="mt-2 text-bosporus-brown/80 text-sm">
              {menu.pideIntro[lang]}
            </p>
            <ul className="mt-6 space-y-3" role="list">
              {menu.items.pide.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between border-b border-bosporus-red/10 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-bosporus-brown font-medium">
                    {item.name[lang]}
                  </span>
                  <span className="text-bosporus-red/80 tabular-nums">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-bosporus-red/20 bg-white p-6 shadow-md">
            <h3 className="font-display text-xl font-semibold text-bosporus-red">
              {menu.lahmacun[lang]}
            </h3>
            <p className="mt-2 text-bosporus-brown/80 text-sm">
              {menu.lahmacunIntro[lang]}
            </p>
            <ul className="mt-6 space-y-3" role="list">
              {menu.items.lahmacun.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between border-b border-bosporus-red/10 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-bosporus-brown font-medium">
                    {item.name[lang]}
                  </span>
                  <span className="text-bosporus-red/80 tabular-nums">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
