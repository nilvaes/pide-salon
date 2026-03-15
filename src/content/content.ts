export type Lang = 'de' | 'tr';

export const content = {
  nav: {
    menu: { de: 'Speisekarte', tr: 'Menü' },
    catering: { de: 'Catering', tr: 'Catering' },
    contact: { de: 'Kontakt', tr: 'İletişim' },
  },
  hero: {
    title: { de: 'BOSPORUS', tr: 'BOSPORUS' },
    tagline: { de: 'Lahmacun & Pide Salonu', tr: 'Lahmacun & Pide Salonu' },
    intro: {
      de: 'Authentische türkische Küche in Köln – frisch gebackene Pide und Lahmacun nach traditionellen Rezepten.',
      tr: 'Köln\'de otantik Türk mutfağı – geleneksel tariflerle taze pide ve lahmacun.',
    },
  },
  menu: {
    heading: { de: 'Unsere Speisekarte', tr: 'Menümüz' },
    pide: { de: 'Pide', tr: 'Pide' },
    pideIntro: {
      de: 'Gebacken im Steinofen – wählen Sie aus unseren Pide-Sorten.',
      tr: 'Taş fırında pişirilir – pide çeşitlerimizden seçin.',
    },
    lahmacun: { de: 'Lahmacun', tr: 'Lahmacun' },
    lahmacunIntro: {
      de: 'Dünner Teig mit gewürztem Hackfleisch – mit Zitrone und Petersilie serviert.',
      tr: 'Baharatlı kıymalı ince hamur – limon ve maydanozla servis edilir.',
    },
    items: {
      pide: [
        { name: { de: 'Pide mit Käse', tr: 'Peynirli Pide' }, price: '—' },
        { name: { de: 'Pide mit Fleisch', tr: 'Kıymalı Pide' }, price: '—' },
        { name: { de: 'Pide mit Ei', tr: 'Yumurtalı Pide' }, price: '—' },
        { name: { de: 'Pide mit Spinat', tr: 'Ispanaklı Pide' }, price: '—' },
        { name: { de: 'Gemischte Pide', tr: 'Karışık Pide' }, price: '—' },
      ],
      lahmacun: [
        { name: { de: 'Lahmacun (1 Stück)', tr: 'Lahmacun (1 adet)' }, price: '—' },
        { name: { de: 'Lahmacun (2 Stück)', tr: 'Lahmacun (2 adet)' }, price: '—' },
      ],
    },
  },
  catering: {
    heading: { de: 'Catering & Sonderanlässe', tr: 'Catering ve Özel Günler' },
    text: {
      de: 'Bestellungen für Verlobung, Hochzeit und besondere Anlässe möglich. Wir liefern gerne für Ihre Feier.',
      tr: 'Nişan, düğün ve özel günleriniz için sipariş alınır. Kutlamalarınız için teslimat yapıyoruz.',
    },
    cta: { de: 'Kontaktieren Sie uns', tr: 'Bize Ulaşın' },
  },
  contact: {
    heading: { de: 'Kontakt', tr: 'İletişim' },
    address: { de: 'Frankfurter Str. 55', tr: 'Frankfurter Str. 55' },
    city: { de: '51065 Köln', tr: '51065 Köln' },
    tel: '0221 37919769',
    mobil: '0163 9578487',
    telLabel: { de: 'Tel.', tr: 'Tel.' },
    mobilLabel: { de: 'Mobil', tr: 'Mobil' },
  },
  footer: {
    name: { de: 'BOSPORUS Lahmacun & Pide Salonu', tr: 'BOSPORUS Lahmacun & Pide Salonu' },
    legal: { de: '© BOSPORUS. Alle Rechte vorbehalten.', tr: '© BOSPORUS. Tüm hakları saklıdır.' },
  },
} as const;
