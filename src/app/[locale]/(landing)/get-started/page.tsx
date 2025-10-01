import { useTranslations } from "next-intl";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

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
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("applicationForm.title")}
                </h2>
                <p className="text-gray-700 dark:text-white/70">
                  {t("applicationForm.description")}
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {t("applicationForm.form.firstName")} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t(
                        "applicationForm.form.placeholders.firstName"
                      )}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {t("applicationForm.form.lastName")} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t(
                        "applicationForm.form.placeholders.lastName"
                      )}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {t("applicationForm.form.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t("applicationForm.form.placeholders.email")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {t("applicationForm.form.phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={t("applicationForm.form.placeholders.phone")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t("applicationForm.form.company")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder={t("applicationForm.form.placeholders.company")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t("applicationForm.form.propertyLocation")} *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">
                      {t("applicationForm.form.placeholders.propertyLocation")}
                    </option>
                    <option value="belgrade">
                      {t("applicationForm.form.locations.belgrade")}
                    </option>
                    <option value="novi-sad">
                      {t("applicationForm.form.locations.noviSad")}
                    </option>
                    <option value="nis">
                      {t("applicationForm.form.locations.nis")}
                    </option>
                    <option value="budva">
                      {t("applicationForm.form.locations.budva")}
                    </option>
                    <option value="kotor">
                      {t("applicationForm.form.locations.kotor")}
                    </option>
                    <option value="podgorica">
                      {t("applicationForm.form.locations.podgorica")}
                    </option>
                    <option value="zagreb">
                      {t("applicationForm.form.locations.zagreb")}
                    </option>
                    <option value="dubrovnik">
                      {t("applicationForm.form.locations.dubrovnik")}
                    </option>
                    <option value="split">
                      {t("applicationForm.form.locations.split")}
                    </option>
                    <option value="other">
                      {t("applicationForm.form.locations.other")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t("applicationForm.form.propertyValue")} *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">
                      {t("applicationForm.form.placeholders.propertyValue")}
                    </option>
                    <option value="under-100k">
                      {t("applicationForm.form.valueRanges.under100k")}
                    </option>
                    <option value="100k-200k">
                      {t("applicationForm.form.valueRanges.100k200k")}
                    </option>
                    <option value="200k-350k">
                      {t("applicationForm.form.valueRanges.200k350k")}
                    </option>
                    <option value="350k-500k">
                      {t("applicationForm.form.valueRanges.350k500k")}
                    </option>
                    <option value="500k-1m">
                      {t("applicationForm.form.valueRanges.500k1m")}
                    </option>
                    <option value="over-1m">
                      {t("applicationForm.form.valueRanges.over1m")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t("applicationForm.form.timeline")} *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">
                      {t("applicationForm.form.placeholders.timeline")}
                    </option>
                    <option value="immediate">
                      {t("applicationForm.form.timelines.immediate")}
                    </option>
                    <option value="1-3-months">
                      {t("applicationForm.form.timelines.1to3months")}
                    </option>
                    <option value="3-6-months">
                      {t("applicationForm.form.timelines.3to6months")}
                    </option>
                    <option value="6-12-months">
                      {t("applicationForm.form.timelines.6to12months")}
                    </option>
                    <option value="flexible">
                      {t("applicationForm.form.timelines.flexible")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {t("applicationForm.form.additionalInfo")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder={t(
                      "applicationForm.form.placeholders.additionalInfo"
                    )}
                  ></textarea>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {t("applicationForm.nextSteps.title")}
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-white/70">
                        {t
                          .raw("applicationForm.nextSteps.steps")
                          .map((step: string, index: number) => (
                            <li key={index}>• {step}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl text-xl font-bold hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>{t("applicationForm.submitButton")}</span>
                  <ArrowRight className="w-6 h-6" />
                </button>

                <p className="text-center text-sm text-gray-600 dark:text-white/60">
                  {t("applicationForm.disclaimer")}
                  <br />
                  <strong>{t("applicationForm.guarantee")}</strong>
                </p>
              </form>
            </div>
          </div>

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
