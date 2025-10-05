import { useTranslations } from "next-intl";
import {
  Clock,
  Star,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import ApplicationForm from "../_components/application-form";
export default function GetStarted() {
  const t = useTranslations("GetStarted");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-100/40 via-orange-100/40 to-red-100/40 dark:from-red-600/20 dark:via-orange-600/20 dark:to-red-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-red-200/50 dark:bg-red-500/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-orange-200/50 dark:bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-red-200/50 dark:bg-red-500/30 rounded-full blur-3xl animate-bounce"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              {t("hero.urgencyBadge")}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                {t("hero.titleHighlight")}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-700 dark:text-white/80 max-w-4xl mx-auto">
              {t.rich("hero.description", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-red-700 dark:text-red-300 font-semibold">
                  {t("hero.badges.limitedTime")}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-orange-500" />
                <span className="text-orange-700 dark:text-orange-300 font-semibold">
                  {t("hero.badges.premiumAccess")}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-green-700 dark:text-green-300 font-semibold">
                  {t("hero.badges.zeroRisk")}
                </span>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 mb-12 text-white text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Clock className="w-8 h-8 animate-pulse" />
              <span className="text-2xl font-bold">{t("urgency.title")}</span>
            </div>
            <p className="text-xl mb-6">
              {t("urgency.description")}
              <br />
              <strong>{t("urgency.subtitle")}</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">€0</div>
                <div className="text-sm">
                  {t("urgency.stats.upfrontInvestment")}
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm">
                  {t("urgency.stats.vipSpotsAvailable")}
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm">
                  {t("urgency.stats.riskFreeTrial")}
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <ApplicationForm />

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("whyChooseUs.title").split(" ").slice(0, 1).join(" ")}{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {t("whyChooseUs.title").split(" ").slice(1).join(" ")}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("whyChooseUs.features.extremeScarcity.title")}
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  {t("whyChooseUs.features.extremeScarcity.description")}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("whyChooseUs.features.zeroRiskTrial.title")}
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  {t("whyChooseUs.features.zeroRiskTrial.description")}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("whyChooseUs.features.premiumResults.title")}
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  {t("whyChooseUs.features.premiumResults.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
