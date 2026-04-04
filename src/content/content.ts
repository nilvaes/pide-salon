export type Lang = 'de' | 'tr';

export type MenuItem = {
  name: { de: string; tr: string };
  price: string;
  /** Öne çıkan ürün (ör. karışık pide) */
  highlight?: boolean;
};

export const content = {
  nav: {
    menu: { de: 'Speisekarte', tr: 'Menü' },
    catering: { de: 'Catering', tr: 'Catering' },
    openingHours: { de: 'Öffnungszeiten', tr: 'Çalışma saatleri' },
    contact: { de: 'Kontakt', tr: 'İletişim' },
  },
  hero: {
    title: { de: 'BOSPORUS', tr: 'BOSPORUS' },
    tagline: { de: 'Lahmacun & Pide Salonu', tr: 'Lahmacun & Pide Salonu' },
    intro: {
      de: 'Entdecken Sie bei uns in Köln Pide und Lahmacun nach traditionellen Rezepten, zubereitet mit echtem Genuss.',
      tr: 'Köln\'de geleneksel tariflerle hazırlanan pide ve lahmacunda lezzetin adresi.',
    },
  },
  menu: {
    heading: { de: 'Unsere Speisekarte', tr: 'Menümüz' },
    lahmacun: {
      title: { de: 'Lahmacun', tr: 'Lahmacun' },
      subtitle: { de: 'Türkische Pizza', tr: '' },
      items: [
        { name: { de: 'Klassischer Lahmacun', tr: 'Klasik lahmacun' }, price: '3,00 €' },
        { name: { de: 'Lahmacun mit Petersilie', tr: 'Maydanozlu lahmacun' }, price: '3,50 €' },
        { name: { de: 'Lahmacun mit Salat', tr: 'Salatalı lahmacun' }, price: '4,00 €' },
        { name: { de: 'Lahmacun mit Käse', tr: 'Peynirli lahmacun' }, price: '4,50 €' },
        { name: { de: 'Lahmacun mit Ei', tr: 'Yumurtalı lahmacun' }, price: '4,50 €' },
      ] satisfies MenuItem[],
    },
    pide: {
      title: { de: 'Pide', tr: 'Pide' },
      subtitle: { de: 'Türkisches Brot', tr: '' },
      items: [
        { name: { de: 'Pide mit Käse', tr: 'Kaşarlı pide' }, price: '6,50 €' },
        { name: { de: 'Pide mit Weißkäse', tr: 'Beyaz peynirli pide' }, price: '6,50 €' },
        { name: { de: 'Pide mit Hackfleisch', tr: 'Kıymalı pide' }, price: '8,00 €' },
        { name: { de: 'Pide mit Sucuk', tr: 'Sucuklu pide' }, price: '8,00 €' },
        { name: { de: 'Pide mit Sucuk & Ei', tr: 'Sucuklu yumurtalı pide' }, price: '9,00 €' },
        {
          name: { de: 'Gemischte Pide', tr: 'Karışık pide' },
          price: '9,00 €',
          highlight: true,
        },
        { name: { de: 'Pide mit Gemüse', tr: 'Sebzeli pide' }, price: '8,00 €' },
        { name: { de: 'Pide mit Fleisch', tr: 'Etli pide' }, price: '10,00 €' },
        { name: { de: 'Pide mit Spinat', tr: 'Ispanaklı pide' }, price: '7,50 €' },
      ] satisfies MenuItem[],
    },
    salate: {
      title: { de: 'Salate', tr: 'Salatalar' },
      items: [
        { name: { de: 'Kleiner Salat', tr: 'Küçük salata' }, price: '4,00 €' },
        { name: { de: 'Großer Salat', tr: 'Büyük salata' }, price: '7,00 €' },
        { name: { de: 'Kleiner Petersiliensalat', tr: 'Küçük maydanoz salatası' }, price: '4,00 €' },
        { name: { de: 'Großer Petersiliensalat', tr: 'Büyük maydanoz salatası' }, price: '7,50 €' },
        { name: { de: 'Tzatziki (Beilage)', tr: 'Cacık (yan ürün)' }, price: '2,00 €' },
      ] satisfies MenuItem[],
    },
    getraenke: {
      title: { de: 'Getränke', tr: 'İçecekler' },
      items: [
        { name: { de: 'Wasser (0,5 l)', tr: 'Su (0,5 l)' }, price: '2,00 €' },
        { name: { de: 'Ayran (0,25 l)', tr: 'Ayran (0,25 l)' }, price: '2,00 €' },
        { name: { de: 'Softdrinks', tr: 'Meşrubatlar' }, price: '2,50 €' },
        { name: { de: 'Türkischer Tee', tr: 'Türk çayı' }, price: '1,00 €' },
      ] satisfies MenuItem[],
    },
  },
  openingHours: {
    heading: { de: 'Öffnungszeiten', tr: 'Çalışma saatleri' },
    rows: [
      {
        label: { de: 'Montag bis Freitag', tr: 'Pazartesi–Cuma' },
        time: '08:00–20:00',
      },
      {
        label: { de: 'Samstag & Sonntag', tr: 'Cumartesi & Pazar' },
        time: '08:00–21:00',
      },
    ],
  },
  catering: {
    heading: { de: 'Catering & Sonderanlässe', tr: 'Catering ve Özel Günler' },
    text: {
      de: 'Bestellungen für Verlobung, Hochzeit und besondere Anlässe möglich.',
      tr: 'Nişan, düğün ve özel günleriniz için sipariş alınır.',
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
