import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function Menu() {
  const { lang } = useLanguage();
  const { menu } = content;

  return (
    <section id="menu" className="scroll-mt-20 bg-bosporus-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-bosporus-red-dark sm:text-4xl text-center mb-12">
          {menu.heading[lang]}
        </h2>

        {/* Tek parça kart – tema ile uyumlu kart motifi */}
        <article
          className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-2 ring-bosporus-red/30"
          aria-labelledby="menu-card-title"
        >
          {/* Üst şerit: kart başlığı (karttaki gibi kırmızı / altın) */}
          <div className="bg-gradient-to-r from-bosporus-red-dark to-bosporus-red px-6 py-4 sm:px-8 sm:py-5">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M20 8v4m0 8v4m-8-8h4m-8 0h4' stroke='%23C9A227' stroke-width='.5' fill='none'/%3E%3C/svg%3E")`,
              }}
            />
            <p id="menu-card-title" className="relative font-script text-xl sm:text-2xl text-bosporus-cream/95">
              Lahmacun & Pide Salonu
            </p>
            <p className="relative font-display text-sm font-semibold tracking-wide text-bosporus-gold mt-0.5">
              BOSPORUS
            </p>
          </div>

          {/* İnce altın çizgi */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-bosporus-gold to-transparent" />

          {/* İçerik: Lahmacun üstte, Pide altta – her bölüm kendi görseli ile arka plan */}
          <div className="px-6 py-6 sm:px-8 sm:py-8">
            {/* Lahmacun bölümü – pide ile aynı genişlikte (cover) */}
            <div className="relative rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}lahmacun.jpg)` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-white/45" aria-hidden />
              <div className="relative px-4 py-4 sm:px-5 sm:py-5">
              <h3 className="font-display text-lg font-semibold text-bosporus-red">
                {menu.lahmacun[lang]}
              </h3>
              {lang === 'de' && (
                <p className="text-sm text-gray-500 mt-0.5">(Lahmacun)</p>
              )}
              <ul className="mt-4 space-y-2.5" role="list">
                {menu.items.lahmacun.map((item, i) => (
                  <li
                    key={`lahmacun-${i}`}
                    className="flex items-baseline justify-between gap-4 border-b border-bosporus-red/10 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-bosporus-brown font-medium">
                      {item.name[lang]}
                    </span>
                    <span className="text-bosporus-red/90 tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              </div>
            </div>

            {/* Ayırıcı çizgi */}
            <div className="my-6 border-t border-bosporus-red/20" />

            {/* Pide bölümü – pide.jpg arka plan */}
            <div className="relative rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}pide.jpg)` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-white/45" aria-hidden />
              <div className="relative px-4 py-4 sm:px-5 sm:py-5">
              <h3 className="font-display text-lg font-semibold text-bosporus-red">
                {menu.pide[lang]}
              </h3>
              <ul className="mt-4 space-y-2.5" role="list">
                {menu.items.pide.map((item, i) => (
                  <li
                    key={`pide-${i}`}
                    className="flex items-baseline justify-between gap-4 border-b border-bosporus-red/10 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-bosporus-brown font-medium">
                      {item.name[lang]}
                    </span>
                    <span className="text-bosporus-red/90 tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>

          {/* Kart alt çerçevesi (ince kırmızı) */}
          <div className="h-1 bg-bosporus-red/40 rounded-b-2xl" />
        </article>
      </div>
    </section>
  );
}
