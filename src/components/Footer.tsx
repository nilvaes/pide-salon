import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { lang } = useLanguage();
  const { footer } = content;

  return (
    <footer className="border-t border-bosporus-red/20 bg-bosporus-red-dark py-5 text-bosporus-cream/90 sm:py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm text-bosporus-cream/70">
          {footer.legal[lang]}
        </p>
      </div>
    </footer>
  );
}
