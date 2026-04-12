import { useSyncExternalStore } from 'react';
import type { FC } from 'react';
import type { MarqueeProps } from 'react-fast-marquee';
import MarqueeImport from 'react-fast-marquee';
import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

type MarqueeComponent = FC<MarqueeProps>;

/** forwardRef/memo components are `typeof object` with $$typeof — not plain functions */
function isRenderableComponent(type: unknown): type is MarqueeComponent {
  if (typeof type === 'function') return true;
  return (
    typeof type === 'object' &&
    type !== null &&
    '$$typeof' in type
  );
}

/** Vite + CJS interop: unwrap `default` until we get the component */
function resolveMarqueeImport(mod: unknown): MarqueeComponent {
  let current: unknown = mod;
  for (let i = 0; i < 4; i++) {
    if (isRenderableComponent(current)) return current;
    if (current && typeof current === 'object' && 'default' in current) {
      current = (current as { default: unknown }).default;
      continue;
    }
    break;
  }
  throw new Error('Could not resolve react-fast-marquee component');
}

const Marquee = resolveMarqueeImport(MarqueeImport);

/** Matches `bg-bosporus-cream` so gradient edges blend on the cream strip */
const CREAM = '#F5EDE4';

/** Wrap phrase in curly quotes; whole unit stays nowrap in the marquee */
function quoted(phrase: string) {
  return `\u201C${phrase}\u201D`;
}

const phraseClass =
  'font-display italic font-normal tracking-wide text-bosporus-brown';

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );
}

export function MarqueeBanner() {
  const { lang } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const phrases = content.marquee.phrases[lang];

  if (prefersReducedMotion) {
    return (
      <div
        className="mt-8 pb-4 pt-5 text-center text-lg leading-relaxed sm:mt-10 sm:pb-5 sm:pt-6 sm:text-xl"
        role="region"
        aria-label={lang === 'de' ? 'Hinweise' : 'Bilgi'}
      >
        <p className={`mx-auto max-w-5xl px-4 ${phraseClass}`}>
          {phrases.map((p) => quoted(p)).join(' ')}
        </p>
      </div>
    );
  }

  return (
    <div
      className="mt-8 pb-4 pt-5 sm:mt-10 sm:pb-5 sm:pt-6"
      role="region"
      aria-hidden
    >
      <Marquee
        speed={22}
        pauseOnHover
        gradient
        gradientColor={CREAM}
        gradientWidth={56}
        className={`text-lg sm:text-xl ${phraseClass}`}
      >
        {phrases.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="inline-block whitespace-nowrap pr-10 sm:pr-14"
          >
            {quoted(phrase)}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
