import { content } from '../content/content';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { lang } = useLanguage();
  const { contact } = content;

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-bosporus-cream py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="contact-heading"
          className="font-display text-3xl font-bold text-bosporus-red-dark sm:text-4xl"
        >
          {contact.heading[lang]}
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="font-medium text-bosporus-brown">
                {contact.address[lang]}
              </p>
              <p className="text-bosporus-brown/80">{contact.city[lang]}</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Frankfurter+Str.+55+51065+K%C3%B6ln"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-bosporus-red font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-bosporus-gold rounded"
              >
                {lang === 'de' ? 'In Google Maps öffnen' : 'Google Maps\'te aç'}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${contact.tel.replace(/\s/g, '')}`}
                className="text-bosporus-brown hover:text-bosporus-red font-medium focus:outline-none focus:ring-2 focus:ring-bosporus-gold rounded"
              >
                {contact.telLabel[lang]} {contact.tel}
              </a>
              <a
                href={`tel:${contact.mobil.replace(/\s/g, '')}`}
                className="text-bosporus-brown hover:text-bosporus-red font-medium focus:outline-none focus:ring-2 focus:ring-bosporus-gold rounded"
              >
                {contact.mobilLabel[lang]} {contact.mobil}
              </a>
            </div>
          </div>
          <div className="h-64 overflow-hidden rounded-lg border border-bosporus-red/20 bg-bosporus-red/5 lg:h-80">
            <iframe
              title={contact.heading[lang]}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.218849755!2d6.954!3d50.943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25022e3a7e1d%3A0x422c33f8e0e2b3a4!2sFrankfurter%20Str.%2055%2C%2051065%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1635000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
