import { useTranslations } from "next-intl";
import { Metadata } from "next";
import LegalStructuredData from "@/components/legal-structured-data";
import { generateLegalMetadata } from "@/lib/legal-metadata";
import { contactConfig } from "@/config/contact";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generateLegalMetadata("termsOfService", params.locale);
}

export default function TermsOfServicePage({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslations("TermsOfService");

  return (
    <>
      <LegalStructuredData type="TermsOfService" locale={params.locale} />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {t("title")}
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t("lastUpdated")}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("acceptance.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("acceptance.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("services.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("services.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("services.propertyMarketing")}</li>
                  <li>{t("services.virtualTours")}</li>
                  <li>{t("services.legalSupport")}</li>
                  <li>{t("services.salesManagement")}</li>
                  <li>{t("services.progressTracking")}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("payment.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("payment.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("payment.noUpfront")}</li>
                  <li>{t("payment.commission")}</li>
                  <li>{t("payment.paymentTerms")}</li>
                  <li>{t("payment.geographicScope")}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("businessModel.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("businessModel.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("businessModel.vipModel")}</li>
                  <li>{t("businessModel.scarcity")}</li>
                  <li>{t("businessModel.targetMarket")}</li>
                  <li>{t("businessModel.expansion")}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("obligations.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("obligations.content")}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    {t("obligations.client.title")}
                  </h3>
                  <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                    <li>{t("obligations.client.accurateInfo")}</li>
                    <li>{t("obligations.client.cooperation")}</li>
                    <li>{t("obligations.client.legalCompliance")}</li>
                    <li>{t("obligations.client.propertyAccess")}</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    {t("obligations.proinvest.title")}
                  </h3>
                  <ul className="list-disc pl-6 text-green-800 dark:text-green-200">
                    <li>{t("obligations.proinvest.professionalService")}</li>
                    <li>{t("obligations.proinvest.marketing")}</li>
                    <li>{t("obligations.proinvest.support")}</li>
                    <li>{t("obligations.proinvest.website")}</li>
                    <li>{t("obligations.proinvest.media")}</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("liability.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("liability.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("termination.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("termination.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("governingLaw.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("governingLaw.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("contact.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("contact.content")}
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${contactConfig.email.legal}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {contactConfig.email.legal}
                    </a>
                    <br />
                    <strong>Phone:</strong>{" "}
                    <a
                      href={contactConfig.phone.tel}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {contactConfig.phone.number}
                    </a>
                    <br />
                    <strong>Address:</strong> {contactConfig.address}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
