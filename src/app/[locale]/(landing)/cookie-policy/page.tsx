import { useTranslations } from "next-intl";
import { Metadata } from "next";
import LegalStructuredData from "@/components/legal-structured-data";
import { generateLegalMetadata } from "@/lib/legal-metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generateLegalMetadata("cookiePolicy", params.locale);
}

export default function CookiePolicyPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = useTranslations("CookiePolicy");

  return (
    <>
      <LegalStructuredData type="CookiePolicy" locale={params.locale} />
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
                  {t("whatAreCookies.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("whatAreCookies.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("howWeUseCookies.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("howWeUseCookies.content")}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("typesOfCookies.title")}
                </h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                      {t("typesOfCookies.essential.title")}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 mb-3">
                      {t("typesOfCookies.essential.description")}
                    </p>
                    <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                      <li>{t("typesOfCookies.essential.session")}</li>
                      <li>{t("typesOfCookies.essential.security")}</li>
                      <li>{t("typesOfCookies.essential.preferences")}</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                      {t("typesOfCookies.analytics.title")}
                    </h3>
                    <p className="text-green-800 dark:text-green-200 mb-3">
                      {t("typesOfCookies.analytics.description")}
                    </p>
                    <ul className="list-disc pl-6 text-green-800 dark:text-green-200">
                      <li>{t("typesOfCookies.analytics.googleAnalytics")}</li>
                      <li>{t("typesOfCookies.analytics.performance")}</li>
                      <li>{t("typesOfCookies.analytics.usage")}</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                      {t("typesOfCookies.functional.title")}
                    </h3>
                    <p className="text-purple-800 dark:text-purple-200 mb-3">
                      {t("typesOfCookies.functional.description")}
                    </p>
                    <ul className="list-disc pl-6 text-purple-800 dark:text-purple-200">
                      <li>{t("typesOfCookies.functional.locale")}</li>
                      <li>{t("typesOfCookies.functional.theme")}</li>
                      <li>{t("typesOfCookies.functional.userPreferences")}</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("thirdPartyCookies.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("thirdPartyCookies.content")}
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong>Umami Analytics:</strong>{" "}
                    {t("thirdPartyCookies.umami")}
                  </li>
                  <li>
                    <strong>Next.js Themes:</strong>{" "}
                    {t("thirdPartyCookies.nextThemes")}
                  </li>
                  <li>
                    <strong>Next.js Internationalization:</strong>{" "}
                    {t("thirdPartyCookies.nextIntl")}
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("cookieManagement.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("cookieManagement.content")}
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("cookieManagement.browserSettings.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {t("cookieManagement.browserSettings.content")}
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                      <li>{t("cookieManagement.browserSettings.chrome")}</li>
                      <li>{t("cookieManagement.browserSettings.firefox")}</li>
                      <li>{t("cookieManagement.browserSettings.safari")}</li>
                      <li>{t("cookieManagement.browserSettings.edge")}</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      {t("cookieManagement.functionalCookies.title")}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 mb-2">
                      {t("cookieManagement.functionalCookies.content")}
                    </p>
                    <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                      <li>
                        {t("cookieManagement.functionalCookies.language")}
                      </li>
                      <li>{t("cookieManagement.functionalCookies.theme")}</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t("updates.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t("updates.content")}
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
