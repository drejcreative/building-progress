import { useTranslations } from "next-intl";

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const t = useTranslations("SEO");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("organizationName"),
    alternateName: t("organizationAlternateName"),
    url: "https://proinvest.rs",
    logo: "https://proinvest.rs/proinvest-logo.png",
    description: t("organizationDescription"),
    foundingDate: "2024",
    founder: {
      "@type": "Organization",
      name: "Livion Real Estate",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "RS",
      addressRegion: "Serbia",
      addressLocality: "Belgrade",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+381-11-123-4567",
      contactType: "customer service",
      availableLanguage: ["en", "sr"],
    },
    sameAs: [
      "https://www.linkedin.com/company/proinvest",
      "https://www.facebook.com/proinvest",
      "https://www.instagram.com/proinvest",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Serbia",
      },
      {
        "@type": "Country",
        name: "Montenegro",
      },
      {
        "@type": "Country",
        name: "Croatia",
      },
    ],
    serviceType: [
      "Real Estate Marketing",
      "Property Sales",
      "Virtual Tours",
      "Professional Photography",
      "Digital Marketing",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("serviceName"),
    description: t("serviceDescription"),
    provider: {
      "@type": "Organization",
      name: "ProInvest",
    },
    offers: {
      "@type": "Offer",
      description: t("servicePaymentDescription"),
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Belgrade",
      },
      {
        "@type": "City",
        name: "Novi Sad",
      },
      {
        "@type": "City",
        name: "Niš",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProInvest",
    url: "https://proinvest.rs",
    description: t("websiteDescription"),
    inLanguage: locale === "rs" ? "sr-RS" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "ProInvest",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://proinvest.rs/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("homePageName"),
        item: "https://proinvest.rs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
