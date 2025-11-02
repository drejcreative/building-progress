// Shared SEO configuration for structured data
export const seoConfig = {
  organization: {
    name: "ProInvest",
    alternateName: "ProInvest by Livion Real Estate",
    url: "https://proinvest.rs",
    logo: "https://proinvest.rs/proinvest-logo.svg",
    address: {
      locality: "Belgrade",
      country: "Serbia",
    },
    contact: {
      telephone: "+381 64 577 3034",
      email: "info@proinvest.com",
      contactType: "customer service",
    },
  },
  website: {
    name: "ProInvest",
    url: "https://proinvest.rs",
    description: {
      en: "Serbia's premier property sales service for investors",
      sr: "Vodeća usluga prodaje nekretnina u Srbiji za investitore",
    },
  },
  pages: {
    home: {
      en: "Home",
      sr: "Početna",
    },
  },
  legalPages: {
    privacyPolicy: {
      en: {
        title:
          "Privacy Policy | ProInvest - Serbia's Premier Property Sales Service",
        description:
          "Learn how ProInvest protects your personal data and privacy. Our comprehensive privacy policy covers data collection, usage, and your rights under GDPR compliance.",
        keywords:
          "privacy policy, data protection, GDPR, personal data, ProInvest, property sales, Serbia, real estate",
      },
      sr: {
        title:
          "Politika Privatnosti | ProInvest - Vodeći Servis Prodaje Nekretnina u Srbiji",
        description:
          "Saznajte kako ProInvest štiti vaše lične podatke i privatnost. Naša sveobuhvatna politika privatnosti pokriva prikupljanje podataka, korišćenje i vaša prava u skladu sa GDPR-om.",
        keywords:
          "politika privatnosti, zaštita podataka, GDPR, lični podaci, ProInvest, prodaja nekretnina, Srbija, nekretnine",
      },
    },
    termsOfService: {
      en: {
        title:
          "Terms of Service | ProInvest - Serbia's Premier Property Sales Service",
        description:
          "Read ProInvest's terms of service for our zero-risk property sales model. Learn about our VIP approach, commission structure, and service obligations in Serbia, Montenegro, and Croatia.",
        keywords:
          "terms of service, property sales, zero risk, commission, VIP model, ProInvest, Serbia, Montenegro, Croatia, real estate",
      },
      sr: {
        title:
          "Uslovi Korišćenja | ProInvest - Vodeći Servis Prodaje Nekretnina u Srbiji",
        description:
          "Pročitajte uslove korišćenja ProInvest-a za naš model prodaje nekretnina bez rizika. Saznajte o našem VIP pristupu, strukturi provizije i obavezama usluge u Srbiji, Crnoj Gori i Hrvatskoj.",
        keywords:
          "uslovi korišćenja, prodaja nekretnina, bez rizika, provizija, VIP model, ProInvest, Srbija, Crna Gora, Hrvatska, nekretnine",
      },
    },
    cookiePolicy: {
      en: {
        title:
          "Cookie Policy | ProInvest - Serbia's Premier Property Sales Service",
        description:
          "Learn about ProInvest's cookie usage including Umami Analytics, language preferences, and theme settings. Understand how we use cookies to enhance your experience.",
        keywords:
          "cookie policy, cookies, Umami Analytics, language preferences, theme settings, ProInvest, property sales, Serbia, real estate",
      },
      sr: {
        title:
          "Politika Kolačića | ProInvest - Vodeći Servis Prodaje Nekretnina u Srbiji",
        description:
          "Saznajte o korišćenju kolačića ProInvest-a uključujući Umami Analytics, jezičke preferencije i postavke teme. Razumite kako koristimo kolačiće za poboljšanje vašeg iskustva.",
        keywords:
          "politika kolačića, kolačići, Umami Analytics, jezičke preferencije, postavke teme, ProInvest, prodaja nekretnina, Srbija, nekretnine",
      },
    },
    gdpr: {
      en: {
        title:
          "GDPR Compliance | ProInvest - Serbia's Premier Property Sales Service",
        description:
          "Learn about ProInvest's GDPR compliance, data protection rights, and how we handle your personal data in accordance with European data protection regulations.",
        keywords:
          "GDPR compliance, data protection, personal data rights, ProInvest, property sales, Serbia, real estate, data controller, data retention",
      },
      sr: {
        title:
          "GDPR Usaglašenost | ProInvest - Vodeći Servis Prodaje Nekretnina u Srbiji",
        description:
          "Saznajte o GDPR usaglašenosti ProInvest-a, pravima zaštite podataka i kako rukujemo vašim ličnim podacima u skladu sa evropskim propisima o zaštiti podataka.",
        keywords:
          "GDPR usaglašenost, zaštita podataka, prava na lične podatke, ProInvest, prodaja nekretnina, Srbija, nekretnine, kontroler podataka, čuvanje podataka",
      },
    },
  },
} as const;
