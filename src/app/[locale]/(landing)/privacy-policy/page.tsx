import { useTranslations } from "next-intl";
import { Metadata } from "next";
import LegalStructuredData from "@/components/legal-structured-data";
import { generateLegalMetadata } from "@/lib/legal-metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generateLegalMetadata("privacyPolicy", params.locale);
}

export default function PrivacyPolicyPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslations("PrivacyPolicy");

  return (
    <>
      <LegalStructuredData type="PrivacyPolicy" locale={params.locale} />
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
                  {t("introduction.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("introduction.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("dataCollection.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataCollection.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("dataCollection.personalInfo")}</li>
                  <li>{t("dataCollection.propertyInfo")}</li>
                  <li>{t("dataCollection.contactInfo")}</li>
                  <li>{t("dataCollection.usageData")}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("dataUsage.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataUsage.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("dataUsage.provideServices")}</li>
                  <li>{t("dataUsage.communicate")}</li>
                  <li>{t("dataUsage.improveServices")}</li>
                  <li>{t("dataUsage.legalCompliance")}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("dataSharing.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataSharing.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("dataSecurity.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataSecurity.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("dataRetention.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataRetention.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("dataRetention.consultationData")}</li>
                  <li>{t("dataRetention.contactInfo")}</li>
                  <li>{t("dataRetention.analyticsData")}</li>
                  <li>{t("dataRetention.legalData")}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("yourRights.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("yourRights.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("yourRights.access")}</li>
                  <li>{t("yourRights.correction")}</li>
                  <li>{t("yourRights.deletion")}</li>
                  <li>{t("yourRights.portability")}</li>
                  <li>{t("yourRights.withdraw")}</li>
                </ul>
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
                    <strong>Email:</strong> privacy@proinvest.com
                    <br />
                    <strong>Phone:</strong> +381 11 123 4567
                    <br />
                    <strong>Address:</strong> Belgrade, Serbia
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
