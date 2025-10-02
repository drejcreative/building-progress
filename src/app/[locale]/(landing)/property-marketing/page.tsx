import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { locales } from "@/i18n/config";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import {
  Camera,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
  Award,
} from "lucide-react";
import Link from "next/link";

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
  const t = await getTranslations({ locale, namespace: "PropertyMarketing" });

  const title = t("seo.title");
  const description = t("seo.description");
  const keywords = t("seo.keywords");

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
      canonical: `https://proinvest.rs/${locale}/property-marketing`,
      languages: {
        en: "https://proinvest.rs/en/property-marketing",
        sr: "https://proinvest.rs/rs/property-marketing",
        "x-default": "https://proinvest.rs/en/property-marketing",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "rs" ? "sr_RS" : "en_US",
      url: `https://proinvest.rs/${locale}/property-marketing`,
      siteName: "ProInvest",
      title,
      description,
      images: [
        {
          url: "/proinvest-logo.png",
          width: 1200,
          height: 630,
          alt: t("seo.title"),
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
  };
}

export default async function PropertyMarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "PropertyMarketing" });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/consultation`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${locale}/use-cases`}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("services.digitalMarketing.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("services.digitalMarketing.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.digitalMarketing.seo")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.digitalMarketing.socialMedia")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.digitalMarketing.ppc")}
                </li>
              </ul>
            </div>

            {/* Visual Content */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("services.visualContent.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("services.visualContent.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.visualContent.photography")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.visualContent.droneVideo")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.visualContent.virtualTours")}
                </li>
              </ul>
            </div>

            {/* Lead Generation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("services.leadGeneration.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("services.leadGeneration.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.leadGeneration.leadCapture")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.leadGeneration.qualification")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.leadGeneration.nurturing")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("process.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("process.subtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(`process.step${step}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`process.step${step}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("benefits.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((benefit) => (
              <div key={benefit} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(`benefits.benefit${benefit}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`benefits.benefit${benefit}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("results.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              {t("results.subtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {t("results.stat1.value")}
                </div>
                <div className="text-blue-100">{t("results.stat1.label")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {t("results.stat2.value")}
                </div>
                <div className="text-blue-100">{t("results.stat2.label")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {t("results.stat3.value")}
                </div>
                <div className="text-blue-100">{t("results.stat3.label")}</div>
              </div>
            </div>

            <Link
              href={`/${locale}/consultation`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t("results.cta")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/consultation`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("cta.primary")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${locale}/get-started`}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
