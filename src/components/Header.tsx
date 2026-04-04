import { useState } from 'react';
import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export function Header() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = content.nav;

  return (
    <header className="relative sticky top-0 z-50 border-b border-bosporus-red/20 bg-bosporus-red-dark shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="focus:outline-none focus:ring-2 focus:ring-bosporus-gold rounded-md" aria-label="BOSPORUS Start">
          <Logo />
        </a>

        <nav className="hidden md:flex md:items-center md:gap-8">
          <a
            href="#menu"
            className="text-bosporus-cream/90 hover:text-bosporus-gold transition-colors font-medium"
          >
            {nav.menu[lang]}
          </a>
          <a
            href="#catering"
            className="text-bosporus-cream/90 hover:text-bosporus-gold transition-colors font-medium"
          >
            {nav.catering[lang]}
          </a>
          <a
            href="#opening-hours"
            className="text-bosporus-cream/90 hover:text-bosporus-gold transition-colors font-medium"
          >
            {nav.openingHours[lang]}
          </a>
          <a
            href="#contact"
            className="text-bosporus-cream/90 hover:text-bosporus-gold transition-colors font-medium"
          >
            {nav.contact[lang]}
          </a>
          <div className="flex items-center gap-1 rounded-md border border-bosporus-gold/50 bg-bosporus-red/30 p-0.5">
            <button
              type="button"
              onClick={() => setLang('de')}
              className={`rounded px-2.5 py-1 text-sm font-medium transition-colors ${
                lang === 'de' ? 'bg-bosporus-gold text-bosporus-red-dark' : 'text-bosporus-cream/80 hover:text-white'
              }`}
              aria-pressed={lang === 'de'}
              aria-label="Deutsch"
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLang('tr')}
              className={`rounded px-2.5 py-1 text-sm font-medium transition-colors ${
                lang === 'tr' ? 'bg-bosporus-gold text-bosporus-red-dark' : 'text-bosporus-cream/80 hover:text-white'
              }`}
              aria-pressed={lang === 'tr'}
              aria-label="Türkçe"
            >
              TR
            </button>
          </div>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-bosporus-cream hover:text-bosporus-gold"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Menü öffnen"
        >
          <span className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-current ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 md:hidden"
            aria-label="Menü kapat"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full z-50 w-full border-b border-bosporus-red/30 bg-bosporus-red-dark px-4 py-4 shadow-lg md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3">
              <a href="#menu" className="text-bosporus-cream/90 hover:text-bosporus-gold font-medium" onClick={() => setMenuOpen(false)}>
                {nav.menu[lang]}
              </a>
              <a href="#catering" className="text-bosporus-cream/90 hover:text-bosporus-gold font-medium" onClick={() => setMenuOpen(false)}>
                {nav.catering[lang]}
              </a>
              <a href="#opening-hours" className="text-bosporus-cream/90 hover:text-bosporus-gold font-medium" onClick={() => setMenuOpen(false)}>
                {nav.openingHours[lang]}
              </a>
              <a href="#contact" className="text-bosporus-cream/90 hover:text-bosporus-gold font-medium" onClick={() => setMenuOpen(false)}>
                {nav.contact[lang]}
              </a>
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => { setLang('de'); setMenuOpen(false); }}
                  className={`rounded px-3 py-1.5 text-sm font-medium ${lang === 'de' ? 'bg-bosporus-gold text-bosporus-red-dark' : 'bg-bosporus-red/50 text-bosporus-cream'}`}
                >
                  DE
                </button>
                <button
                  type="button"
                  onClick={() => { setLang('tr'); setMenuOpen(false); }}
                  className={`rounded px-3 py-1.5 text-sm font-medium ${lang === 'tr' ? 'bg-bosporus-gold text-bosporus-red-dark' : 'bg-bosporus-red/50 text-bosporus-cream'}`}
                >
                  TR
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
