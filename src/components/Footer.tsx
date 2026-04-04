import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

export function Footer() {
  const { lang } = useLanguage();
  const { footer, contact } = content;

  return (
    <footer className="border-t border-bosporus-red/20 bg-bosporus-red-dark py-10 text-bosporus-cream/90">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <Logo size="sm" />
            <p className="mt-2 text-sm">{footer.name[lang]}</p>
          </div>
          <div className="text-center sm:text-right">
            <p className="font-medium text-bosporus-cream">
              {contact.address[lang]}, {contact.city[lang]}
            </p>
            <a
              href={`tel:${contact.tel.replace(/\s/g, '')}`}
              className="mt-1 block text-sm hover:text-bosporus-gold focus:outline-none focus:ring-2 focus:ring-bosporus-gold rounded"
            >
              {contact.tel}
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-bosporus-cream/70">
          {footer.legal[lang]}
        </p>
      </div>
    </footer>
  );
}
