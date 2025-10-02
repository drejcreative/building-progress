import { Metadata } from "next";
import { seoConfig } from "@/config/seo";

type LegalPageType =
  | "privacyPolicy"
  | "termsOfService"
  | "cookiePolicy"
  | "gdpr";

export function generateLegalMetadata(
  pageType: LegalPageType,
  locale: string
): Metadata {
  const isSerbian = locale === "rs";
  const languageCode = isSerbian ? "sr" : "en";
  const pageData = seoConfig.legalPages[pageType][languageCode];

  const baseUrl = seoConfig.organization.url;
  const pagePath = pageType.replace(/([A-Z])/g, "-$1").toLowerCase();
  const currentUrl = `${baseUrl}/${locale}/${pagePath}`;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      type: "website",
      locale: isSerbian ? "sr_RS" : "en_US",
      alternateLocale: isSerbian ? "en_US" : "sr_RS",
    },
    twitter: {
      card: "summary",
      title: pageData.title,
      description: pageData.description,
    },
    alternates: {
      canonical: `${baseUrl}/${pagePath}`,
      languages: {
        en: `${baseUrl}/en/${pagePath}`,
        sr: `${baseUrl}/rs/${pagePath}`,
      },
    },
  };
}
