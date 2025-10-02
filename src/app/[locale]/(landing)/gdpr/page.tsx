import { useTranslations } from "next-intl";
import { Metadata } from "next";
import LegalStructuredData from "@/components/legal-structured-data";
import { generateLegalMetadata } from "@/lib/legal-metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generateLegalMetadata("gdpr", params.locale);
}

export default function GDPRPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("GDPR");

  return (
    <>
      <LegalStructuredData type="GDPR" locale={params.locale} />
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
                  {t("dataController.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataController.content")}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>ProInvest by Livion Real Estate</strong>
                    <br />
                    Belgrade, Serbia
                    <br />
                    Email: privacy@proinvest.com
                    <br />
                    Phone: +381 11 123 4567
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("legalBasis.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("legalBasis.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>{t("legalBasis.consent")}</strong> -{" "}
                    {t("legalBasis.consentDesc")}
                  </li>
                  <li>
                    <strong>{t("legalBasis.contract")}</strong> -{" "}
                    {t("legalBasis.contractDesc")}
                  </li>
                  <li>
                    <strong>{t("legalBasis.legitimate")}</strong> -{" "}
                    {t("legalBasis.legitimateDesc")}
                  </li>
                  <li>
                    <strong>{t("legalBasis.legal")}</strong> -{" "}
                    {t("legalBasis.legalDesc")}
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("dataRights.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataRights.content")}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      {t("dataRights.access.title")}
                    </h3>
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      {t("dataRights.access.description")}
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      {t("dataRights.rectification.title")}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      {t("dataRights.rectification.description")}
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      {t("dataRights.erasure.title")}
                    </h3>
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      {t("dataRights.erasure.description")}
                    </p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                      {t("dataRights.portability.title")}
                    </h3>
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                      {t("dataRights.portability.description")}
                    </p>
                  </div>
                </div>
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
                  {t("dataSecurity.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataSecurity.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>{t("dataSecurity.encryption")}</li>
                  <li>{t("dataSecurity.access")}</li>
                  <li>{t("dataSecurity.monitoring")}</li>
                  <li>{t("dataSecurity.training")}</li>
                  <li>{t("dataSecurity.anonymization")}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("dataBreach.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("dataBreach.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("complaints.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("complaints.content")}
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Serbian Data Protection Authority:</strong>
                    <br />
                    Commissioner for Information of Public Importance and
                    Personal Data Protection
                    <br />
                    Website:{" "}
                    <a
                      href="https://www.poverenik.rs"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      www.poverenik.rs
                    </a>
                  </p>
                </div>
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
                    <strong>Data Protection Officer:</strong>{" "}
                    privacy@proinvest.com
                    <br />
                    <strong>General Inquiries:</strong> info@proinvest.com
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
