import { useTranslations } from "next-intl";
import { Building2 } from "lucide-react";
import UseCasesHeader from "./_components/header";
import UseCasesHero from "./_components/hero";
import UseCasesOverview from "./_components/overview";
import UseCasesApartments from "./_components/apartments";
import UseCasesLocation from "./_components/location";
import UseCasesProgress from "./_components/progress";
import UseCasesContact from "./_components/contact";

export default function UseCases() {
  const t = useTranslations("UseCases");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <UseCasesHeader />
      <UseCasesHero />
      <UseCasesOverview />
      <UseCasesApartments />
      <UseCasesLocation />
      <UseCasesProgress />
      <UseCasesContact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">{t("footer.title")}</span>
              </div>
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Apartments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Progress
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+381 11 123 4567</li>
                <li>info@belgradeluxury.com</li>
                <li>Belgrade, Serbia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.followUs")}</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">LI</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
