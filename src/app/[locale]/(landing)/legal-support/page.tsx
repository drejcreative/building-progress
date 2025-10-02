import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../i18n/routing";
import { locales } from "../../../../i18n/config";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import {
  Scale,
  FileText,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
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
  const t = await getTranslations({ locale, namespace: "LegalSupport" });

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
      canonical: `https://proinvest.rs/${locale}/legal-support`,
      languages: {
        en: "https://proinvest.rs/en/legal-support",
        sr: "https://proinvest.rs/rs/legal-support",
        "x-default": "https://proinvest.rs/en/legal-support",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "rs" ? "sr_RS" : "en_US",
      url: `https://proinvest.rs/${locale}/legal-support`,
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

export default async function LegalSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "LegalSupport" });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
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
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${locale}/get-started`}
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
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
            {/* Contract Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("services.contractManagement.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("services.contractManagement.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.contractManagement.drafting")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.contractManagement.review")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.contractManagement.negotiation")}
                </li>
              </ul>
            </div>

            {/* Compliance & Verification */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("services.compliance.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("services.compliance.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.compliance.verification")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.compliance.regulatory")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.compliance.documentation")}
                </li>
              </ul>
            </div>

            {/* Legal Concierge */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("services.legalConcierge.title")}
              </h3>
              <p className="text-gray-600 mb-6">
                {t("services.legalConcierge.description")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.legalConcierge.dedicated")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.legalConcierge.support")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {t("services.legalConcierge.guidance")}
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
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

      {/* Expertise Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("expertise.title")}
            </h2>
            <p className="text-xl text-green-100 mb-12">
              {t("expertise.subtitle")}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {t("expertise.stat1.value")}
                </div>
                <div className="text-green-100">
                  {t("expertise.stat1.label")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {t("expertise.stat2.value")}
                </div>
                <div className="text-green-100">
                  {t("expertise.stat2.label")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {t("expertise.stat3.value")}
                </div>
                <div className="text-green-100">
                  {t("expertise.stat3.label")}
                </div>
              </div>
            </div>

            <Link
              href={`/${locale}/consultation`}
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t("expertise.cta")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("contact.title")}
              </h2>
              <p className="text-xl text-gray-600">{t("contact.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t("contact.phone.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("contact.phone.description")}
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {t("contact.phone.number")}
                </p>
                <p className="text-gray-600 text-sm">
                  {t("contact.phone.availability")}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t("contact.email.title")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("contact.email.description")}
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {t("contact.email.address")}
                </p>
                <p className="text-gray-600 text-sm">
                  {t("contact.email.response")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/consultation`}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                {t("cta.primary")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/${locale}/get-started`}
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
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
