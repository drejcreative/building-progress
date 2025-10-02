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
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-32 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-200/30 to-green-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-semibold mb-8 shadow-lg">
                  <Scale className="w-5 h-5 mr-3" />
                  {t("hero.badge")}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {t("hero.title")}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link
                    href={`/${locale}/consultation`}
                    className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    {t("hero.ctaPrimary")}
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`/${locale}/use-cases`}
                    className="group inline-flex items-center px-10 py-5 border-2 border-green-600 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t("hero.ctaSecondary")}
                  </Link>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
                      <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">
                        Contracts
                      </h3>
                      <p className="text-sm text-gray-600">Drafting & Review</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 text-center">
                      <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">
                        Compliance
                      </h3>
                      <p className="text-sm text-gray-600">
                        Verification & Legal
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 text-center">
                      <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">
                        Concierge
                      </h3>
                      <p className="text-sm text-gray-600">Dedicated Support</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-6 text-center">
                      <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 mb-2">Success</h3>
                      <p className="text-sm text-gray-600">Proven Results</p>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
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
