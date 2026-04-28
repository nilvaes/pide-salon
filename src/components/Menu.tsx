// Ottoman Parchment Booklet — Direction A implementation
// Visual design: Claude Design (claude.ai/design)
// Fonts: Cinzel (headings) · Cormorant Garamond (body) · Dancing Script (script labels)

import { content } from '../content/content';
import type { Lang, MenuItem } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

// ─── Design tokens (mirrors Design-A palette) ────────────────────────────────
const P = {
  bg:       '#f4e8d0',
  bgDeep:   '#ead9b6',
  ink:      '#3a1418',
  burgundy: '#7a1d2e',
  burgundyD:'#5a131f',
  gold:     '#b8893a',
  goldL:    '#d4a851',
  muted:    '#7a5a3e',
} as const;

// ─── Botanical SVG tile pattern ───────────────────────────────────────────────
function makeTilePattern(opacity: number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <g fill="none" stroke="${P.burgundy}" stroke-width="0.8" opacity="${opacity}">
    <g transform="translate(80 80)">
      <path d="M0 -22 C -8 -14, -10 -4, -6 6 C -3 12, 3 12, 6 6 C 10 -4, 8 -14, 0 -22 Z"/>
      <path d="M0 -16 C -3 -10, -4 -2, -2 4"/><path d="M0 -16 C 3 -10, 4 -2, 2 4"/>
      <path d="M0 6 L0 14"/>
    </g>
    <g transform="translate(0 0)"><path d="M0 -22 C -8 -14,-10 -4,-6 6 C -3 12,3 12,6 6 C 10 -4,8 -14,0 -22 Z"/></g>
    <g transform="translate(160 0)"><path d="M0 -22 C -8 -14,-10 -4,-6 6 C -3 12,3 12,6 6 C 10 -4,8 -14,0 -22 Z"/></g>
    <g transform="translate(0 160)"><path d="M0 -22 C -8 -14,-10 -4,-6 6 C -3 12,3 12,6 6 C 10 -4,8 -14,0 -22 Z"/></g>
    <g transform="translate(160 160)"><path d="M0 -22 C -8 -14,-10 -4,-6 6 C -3 12,3 12,6 6 C 10 -4,8 -14,0 -22 Z"/></g>
    <path d="M14 14 Q 40 30, 80 30 T 146 14"/>
    <path d="M14 146 Q 40 130, 80 130 T 146 146"/>
    <path d="M14 14 Q 30 40, 30 80 T 14 146"/>
    <path d="M146 14 Q 130 40, 130 80 T 146 146"/>
    <path d="M40 28 Q 44 22, 48 28 Q 44 34, 40 28 Z"/>
    <path d="M120 28 Q 116 22, 112 28 Q 116 34, 120 28 Z"/>
    <path d="M40 132 Q 44 126, 48 132 Q 44 138, 40 132 Z"/>
    <path d="M120 132 Q 116 126, 112 132 Q 116 138, 120 132 Z"/>
    <path d="M28 40 Q 22 44, 28 48 Q 34 44, 28 40 Z"/>
    <path d="M132 40 Q 138 44, 132 48 Q 126 44, 132 40 Z"/>
  </g>
  <g fill="${P.gold}" opacity="${opacity * 0.7}">
    <circle cx="80" cy="80" r="1.5"/>
    <circle cx="0" cy="0" r="1.5"/><circle cx="160" cy="0" r="1.5"/>
    <circle cx="0" cy="160" r="1.5"/><circle cx="160" cy="160" r="1.5"/>
  </g>
</svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}

// ─── SVG Ornament components ─────────────────────────────────────────────────

function TulipIcon({ size = 32, color = P.gold }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="1.1">
      <path d="M20 6 C 14 12, 12 20, 14 28 C 16 34, 24 34, 26 28 C 28 20, 26 12, 20 6 Z" />
      <path d="M20 10 C 17 16, 16 22, 18 28" />
      <path d="M20 10 C 23 16, 24 22, 22 28" />
      <path d="M20 28 L 20 36" />
      <path d="M20 36 L 14 38 M20 36 L 26 38" />
    </svg>
  );
}

function DiamondMotif({ size = 12, color = P.gold }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="1">
      <path d="M20 4 L36 20 L20 36 L4 20 Z" />
      <path d="M20 10 L30 20 L20 30 L10 20 Z" />
      <circle cx="20" cy="20" r="2.5" fill={color} stroke="none" />
    </svg>
  );
}

function CornerBracket({
  size = 48, color = P.burgundy, position = 'tl',
}: { size?: number; color?: string; position?: 'tl' | 'tr' | 'br' | 'bl' }) {
  const rot = { tl: 0, tr: 90, br: 180, bl: 270 }[position];
  return (
    <svg
      width={size} height={size} viewBox="0 0 40 40"
      fill="none" stroke={color} strokeWidth="1"
      style={{ transform: `rotate(${rot}deg)`, display: 'block' }}
    >
      <path d="M2 18 Q 2 2, 18 2" />
      <path d="M2 12 Q 2 8, 8 8 L 12 8" />
      <circle cx="6" cy="6" r="1.5" fill={color} stroke="none" />
      <path d="M14 8 Q 18 8, 20 12" />
      <path d="M8 14 Q 8 18, 12 20" />
    </svg>
  );
}

function SectionBreak({ color = P.burgundy, accent = P.gold }: { color?: string; accent?: string }) {
  return (
    <svg width="280" height="36" viewBox="0 0 320 40" fill="none" stroke={color} strokeWidth="1">
      <path d="M0 20 L120 20" />
      <path d="M200 20 L320 20" />
      <path d="M110 20 Q 115 14 120 20 Q 115 26 110 20 Z" fill={color} stroke="none" />
      <path d="M210 20 Q 205 14 200 20 Q 205 26 210 20 Z" fill={color} stroke="none" />
      <g transform="translate(160 20)">
        <circle cx="0" cy="0" r="14" />
        <circle cx="0" cy="0" r="9" strokeWidth="0.6" opacity="0.7" />
        <path d="M0 -9 L0 9 M-9 0 L9 0 M-6.4 -6.4 L6.4 6.4 M-6.4 6.4 L6.4 -6.4" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="3" fill={accent} stroke="none" />
      </g>
    </svg>
  );
}

// ─── Category arch header ─────────────────────────────────────────────────────

function ArchPlaque({
  title, subtitle, lang,
}: {
  title: { de: string; tr: string };
  subtitle?: { de: string; tr: string };
  lang: Lang;
}) {
  // If a subtitle exists, use it as the script label (e.g. "Türkische Pizza").
  // Otherwise fall back to the other-language title (e.g. "Salatalar").
  const subtitleText = subtitle?.[lang] || subtitle?.de || '';
  const scriptLabel  = subtitleText || title[lang === 'de' ? 'tr' : 'de'];
  const mainLabel    = title[lang].toUpperCase();

  return (
    <div className="relative mx-auto max-w-lg text-center" style={{ padding: '18px 48px 14px' }}>
      {/* Pointed-arch SVG border */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 480 90"
        preserveAspectRatio="none"
        fill="none"
        stroke={P.burgundy}
        strokeWidth="1"
      >
        <path d="M2 88 L2 30 Q2 2, 240 2 Q478 2, 478 30 L478 88" />
        <path d="M10 88 L10 32 Q10 10, 240 10 Q470 10, 470 32 L470 88" strokeWidth="0.7" opacity="0.5" />
      </svg>

      {/* Text content */}
      <div className="relative">
        {scriptLabel && (
          <div
            className="font-script leading-none mb-0.5"
            style={{ fontSize: 18, color: P.gold, letterSpacing: '0.02em' }}
          >
            {scriptLabel}
          </div>
        )}
        <h2
          className="font-cinzel font-semibold leading-none my-1"
          style={{ fontSize: 'clamp(22px, 4vw, 34px)', letterSpacing: '0.2em', color: P.burgundy }}
        >
          {mainLabel}
        </h2>
      </div>
    </div>
  );
}

// ─── Item row ─────────────────────────────────────────────────────────────────

function ItemRow({ item, lang }: { item: MenuItem; lang: Lang }) {
  const isHighlight = 'highlight' in item && item.highlight;
  return (
    <div
      className="flex items-baseline gap-2 py-3"
      style={{ borderBottom: `1px dotted ${P.gold}66` }}
    >
      {/* Bullet */}
      <div className="shrink-0 mt-0.5">
        <DiamondMotif size={10} color={isHighlight ? P.gold : P.burgundy} />
      </div>

      {/* Name */}
      <div className="flex-1 min-w-0 flex items-baseline flex-wrap gap-2">
        <span
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 600,
            fontSize: 'clamp(16px, 2.5vw, 21px)',
            color: P.ink,
            letterSpacing: '0.01em',
          }}
        >
          {item.name[lang]}
        </span>
        {isHighlight && (
          <span
            className="shrink-0 font-cinzel uppercase tracking-widest"
            style={{
              fontSize: 9,
              color: P.gold,
              border: `1px solid ${P.gold}`,
              padding: '2px 6px',
            }}
          >
            {lang === 'de' ? 'Spezialität' : 'Özel'}
          </span>
        )}
      </div>

      {/* Dotted leader — compresses fully on narrow screens */}
      <div style={{ flex: '0 1 40px', minWidth: 0, borderBottom: `1px dotted ${P.gold}88`, transform: 'translateY(-5px)' }} />

      {/* Price */}
      <div
        className="shrink-0 font-cinzel font-semibold tabular-nums"
        style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: P.burgundy, whiteSpace: 'nowrap' }}
      >
        {item.price}
      </div>
    </div>
  );
}

// ─── Category section ─────────────────────────────────────────────────────────

type Category = {
  title: { de: string; tr: string };
  subtitle?: { de: string; tr: string };
  items: readonly MenuItem[];
};

function CategorySection({
  category, lang, isLast, twoColumn = false,
}: {
  category: Category;
  lang: Lang;
  isLast: boolean;
  twoColumn?: boolean;
}) {
  return (
    <section className="mt-12 sm:mt-16 first:mt-10">
      <ArchPlaque title={category.title} subtitle={category.subtitle} lang={lang} />

      <div
        className={`mt-6 mx-auto max-w-2xl ${twoColumn ? 'sm:columns-2 sm:gap-x-10' : ''}`}
      >
        {category.items.map((item, i) => (
          <div key={i} className={twoColumn ? 'break-inside-avoid' : ''}>
            <ItemRow item={item} lang={lang} />
          </div>
        ))}
      </div>

      {!isLast && (
        <div className="flex justify-center mt-10 sm:mt-14">
          <SectionBreak />
        </div>
      )}
    </section>
  );
}

// ─── Outer ornate frame ───────────────────────────────────────────────────────
// Applied to a centered card container, always visible at all screen sizes.

function OuterFrame() {
  return (
    <>
      {/* Double border lines */}
      <div className="pointer-events-none absolute" style={{ inset: 10, border: `2px solid ${P.burgundy}` }} />
      <div className="pointer-events-none absolute" style={{ inset: 18, border: `1px solid ${P.burgundy}`, opacity: 0.45 }} />
      <div className="pointer-events-none absolute" style={{ inset: 24, border: `1px dashed ${P.gold}`, opacity: 0.55 }} />

      {/* Corner brackets */}
      <div className="absolute" style={{ top: 4, left: 4 }}>
        <CornerBracket position="tl" size={36} />
      </div>
      <div className="absolute" style={{ top: 4, right: 4 }}>
        <CornerBracket position="tr" size={36} />
      </div>
      <div className="absolute" style={{ bottom: 4, left: 4 }}>
        <CornerBracket position="bl" size={36} />
      </div>
      <div className="absolute" style={{ bottom: 4, right: 4 }}>
        <CornerBracket position="br" size={36} />
      </div>
    </>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function Menu() {
  const { lang } = useLanguage();
  const { menu } = content;

  const cardBg = {
    background: P.bg,
    backgroundImage: makeTilePattern(0.04),
  };

  const categories: Array<Category & { id: string; twoColumn?: boolean }> = [
    { id: 'lahmacun', ...menu.lahmacun },
    { id: 'pide',     ...menu.pide,     twoColumn: true },
    { id: 'salate',   ...menu.salate },
    { id: 'getraenke',...menu.getraenke },
  ];

  return (
    <section
      id="menu"
      className="scroll-mt-20 bg-bosporus-cream py-10 sm:py-16 px-5 sm:px-10"
    >
      {/* Menu card — floats on the parchment background */}
      <div
        className="relative mx-auto max-w-2xl rounded-2xl overflow-hidden shadow-[0_6px_48px_rgba(58,20,24,0.22)]"
        style={cardBg}
      >
        <OuterFrame />

        {/* Inner content — padded to clear the frame corners */}
        <div className="relative px-7 sm:px-12 pt-12 pb-14 sm:pt-14 sm:pb-16" style={{ zIndex: 2 }}>

        {/* ── Section header ── */}
        <header className="text-center">
          <div
            className="font-script"
            style={{ fontSize: 22, color: P.gold, letterSpacing: '0.02em', marginBottom: 2 }}
          >
            {lang === 'de' ? 'Lahmacun & Pide Salonu' : 'Lahmacun & Pide Salonu'}
          </div>
          <h2
            className="font-cinzel font-semibold"
            style={{
              fontSize: 'clamp(28px, 5vw, 54px)',
              letterSpacing: '0.18em',
              color: P.burgundy,
              lineHeight: 1.1,
              margin: '4px 0 8px',
            }}
          >
            {lang === 'de' ? 'SPEISEKARTE' : 'MENÜ'}
          </h2>
          <p
            className="italic"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 16, color: P.muted, letterSpacing: '0.05em' }}
          >
            {lang === 'de' ? 'Authentische türkische Küche' : 'Otantik Türk mutfağı'}
          </p>
          <div className="flex justify-center mt-6">
            <SectionBreak />
          </div>
        </header>

        {/* ── Menu categories ── */}
        {categories.map((cat, i) => (
          <CategorySection
            key={cat.id}
            category={cat}
            lang={lang}
            isLast={i === categories.length - 1}
            twoColumn={cat.twoColumn}
          />
        ))}

        {/* ── Footer flourish ── */}
        <footer className="text-center mt-14">
          <div className="flex justify-center">
            <SectionBreak />
          </div>
          <p
            className="italic mt-4"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 16, color: P.muted, letterSpacing: '0.08em' }}
          >
            Afiyet olsun · Guten Appetit
          </p>
        </footer>

        </div>{/* end inner padded content */}
      </div>{/* end framed card */}
    </section>
  );
}
