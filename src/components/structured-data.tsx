import { getTranslations } from "next-intl/server";
import { seoConfig } from "@/config/seo";

interface StructuredDataProps {
  locale: string;
}

export default async function StructuredData({ locale }: StructuredDataProps) {
  const t = await getTranslations("SEO");
  const isSerbian = locale === "rs";
  const languageCode = isSerbian ? "sr" : "en";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.organization.name,
    alternateName: seoConfig.organization.alternateName,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    description: seoConfig.website.description[languageCode],
    foundingDate: "2024",
    founder: {
      "@type": "Organization",
      name: "Livion Real Estate",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "RS",
      addressRegion: "Serbia",
      addressLocality: seoConfig.organization.address.locality,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: seoConfig.organization.contact.telephone,
      contactType: seoConfig.organization.contact.contactType,
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
    name: seoConfig.website.name,
    url: seoConfig.website.url,
    description: seoConfig.website.description[languageCode],
    inLanguage: locale === "rs" ? "sr-RS" : "en-US",
    publisher: {
      "@type": "Organization",
      name: seoConfig.organization.name,
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
        name: seoConfig.pages.home[languageCode],
        item: seoConfig.website.url,
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
