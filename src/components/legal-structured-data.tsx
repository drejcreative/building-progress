import { useTranslations } from "next-intl";
import { seoConfig } from "@/config/seo";

interface LegalStructuredDataProps {
  type: "PrivacyPolicy" | "TermsOfService" | "CookiePolicy" | "GDPR";
  locale: string;
}

export default function LegalStructuredData({
  type,
  locale,
}: LegalStructuredDataProps) {
  const t = useTranslations(type);

  const currentUrl = `${seoConfig.organization.url}/${locale}/${type
    .toLowerCase()
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()}`;

  const isSerbian = locale === "rs";
  const languageCode = isSerbian ? "sr" : "en";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("title"),
    description: t("introduction.content") || t("lastUpdated"),
    url: currentUrl,
    inLanguage: languageCode,
    isPartOf: {
      "@type": "WebSite",
      name: seoConfig.website.name,
      url: seoConfig.website.url,
      description: seoConfig.website.description[languageCode],
      publisher: {
        "@type": "Organization",
        name: seoConfig.organization.alternateName,
        url: seoConfig.organization.url,
        logo: {
          "@type": "ImageObject",
          url: seoConfig.organization.logo,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: seoConfig.organization.address.locality,
          addressCountry: seoConfig.organization.address.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: seoConfig.organization.contact.telephone,
          email: seoConfig.organization.contact.email,
          contactType: seoConfig.organization.contact.contactType,
        },
      },
    },
    dateModified: new Date().toISOString(),
    datePublished: "2024-12-01T00:00:00Z",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: seoConfig.pages.home[languageCode],
          item: seoConfig.website.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t("title"),
          item: currentUrl,
        },
      ],
    },
    mainEntity: {
      "@type": "LegalDocument",
      name: t("title"),
      description: t("introduction.content") || t("lastUpdated"),
      dateModified: new Date().toISOString(),
      publisher: {
        "@type": "Organization",
        name: seoConfig.organization.alternateName,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
