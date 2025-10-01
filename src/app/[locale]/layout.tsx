import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import "./globals.css";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { locales } from "../../i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

// Generate static params for all locales
export async function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SEO" });

  const title = t("title");
  const description = t("description");
  const keywords = t("keywords");

  return {
    title,
    description,
    keywords,
    authors: [{ name: "ProInvest by Livion Real Estate" }],
    creator: "ProInvest",
    publisher: "Livion Real Estate",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://proinvest.rs"),
    alternates: {
      canonical: `https://proinvest.rs/${locale === "rs" ? "rs" : "en"}`,
      languages: {
        en: "https://proinvest.rs/en",
        sr: "https://proinvest.rs/rs",
        "x-default": "https://proinvest.rs/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "rs" ? "sr_RS" : "en_US",
      url: `https://proinvest.rs/${locale}`,
      siteName: "ProInvest",
      title,
      description,
      images: [
        {
          url: "/proinvest-logo.png",
          width: 1200,
          height: 630,
          alt: t("serviceName"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/proinvest-logo.png"],
      creator: "@proinvest",
      site: "@proinvest",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Convert locale to proper BCP 47 language code
  const langCode = locale === "rs" ? "sr" : "en";

  return (
    <html lang={langCode} suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="en" href="https://proinvest.rs/en" />
        <link rel="alternate" hrefLang="sr" href="https://proinvest.rs/rs" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://proinvest.rs/en"
        />
        <link
          rel="canonical"
          href={`https://proinvest.rs/${locale === "rs" ? "rs" : "en"}`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
