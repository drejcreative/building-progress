import { CheckCircle } from "lucide-react";
import React from "react";
import { getTranslations } from "next-intl/server";

export default async function CommissionStructure() {
  const t = await getTranslations("HomePage");
  return (
    <section
      id="commission"
      className="py-20 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-600/20 dark:to-indigo-600/20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            {t("commission.title").split("**")[0]}{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {t("commission.title").split("**")[1]}
            </span>{" "}
            {t("commission.title").split("**")[2]}
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-white/70">
            {t("commission.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Standard Service */}
          <div className="backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center bg-white/80 dark:bg-white/5 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {t("commission.standard.title")}
            </h3>
            <div className="text-4xl font-bold text-blue-400 mb-4">
              {t("commission.standard.rate")}
            </div>
            <p className="mb-6 text-gray-700 dark:text-white/70">
              {t("commission.standard.description")}
            </p>

            <div className="space-y-6">
              {/* Ideal For */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  {t("commission.standard.idealFor")}
                </h4>
                <ul className="text-left space-y-2 text-sm">
                  {t
                    .raw("commission.standard.idealForDetails")
                    .map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-white/80">
                          {item}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  {t("commission.standard.coreServices")}
                </h4>
                <ul className="text-left space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.standard.features.website")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.standard.features.media")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.standard.features.marketing")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.standard.features.legal")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.standard.features.sales")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.standard.features.tracking")}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-left">
                  {t("commission.standard.benefits")}
                </h4>
                <ul className="text-left space-y-1 text-sm">
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.standard.details.seo")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.standard.details.photography")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.standard.details.ads")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.standard.details.documentation")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.standard.details.reports")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.standard.details.cost")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.standard.details.commission")}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premium Service */}
          <div className="backdrop-blur-sm border border-blue-300 dark:border-blue-500/30 rounded-2xl p-8 text-center relative overflow-hidden bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-500/20 dark:to-indigo-500/20 shadow-lg">
            <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {t("commission.premium.badge")}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {t("commission.premium.title")}
            </h3>
            <div className="text-4xl font-bold text-indigo-400 mb-4">
              {t("commission.premium.rate")}
            </div>
            <p className="mb-6 text-gray-700 dark:text-white/70">
              {t("commission.premium.description")}
            </p>

            <div className="space-y-6">
              {/* Ideal For */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  {t("commission.premium.idealFor")}
                </h4>
                <ul className="text-left space-y-2 text-sm">
                  {t
                    .raw("commission.premium.idealForDetails")
                    .map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-white/80">
                          {item}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  {t("commission.premium.everything")}
                </h4>
                <ul className="text-left space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.premium.features.standardIncluded")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.premium.features.database")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.premium.features.premiumMarketing")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.premium.features.accountManager")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.premium.features.youtube")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.premium.features.contentSeo")}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Premium Benefits */}
              <div className="bg-blue-50 dark:bg-blue-500/10 rounded-xl p-4 border border-blue-200 dark:border-blue-500/20">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-left">
                  {t("commission.premium.benefits")}
                </h4>
                <ul className="text-left space-y-1 text-sm">
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.seo")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.video")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.extended")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.priority")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.weekly")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.premiumLegal")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.manager")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.premium.details.database")}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Enterprise Service */}
          <div className="backdrop-blur-sm border border-purple-300 dark:border-purple-500/30 rounded-2xl p-8 text-center relative overflow-hidden bg-gradient-to-r from-purple-100/80 to-pink-100/80 dark:from-purple-500/20 dark:to-pink-500/20 shadow-lg">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-700 to-pink-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {t("commission.custom.badge")}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {t("commission.custom.title")}
            </h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              {t("commission.custom.rate")}
            </div>
            <p className="mb-6 text-gray-700 dark:text-white/70">
              {t("commission.custom.description")}
            </p>

            <div className="space-y-6">
              {/* Ideal For */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  {t("commission.custom.idealFor")}
                </h4>
                <ul className="text-left space-y-2 text-sm">
                  {t
                    .raw("commission.custom.idealForDetails")
                    .map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-white/80">
                          {item}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  {t("commission.custom.coreFeatures")}
                </h4>
                <ul className="text-left space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.custom.features.customPackage")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.custom.features.flexibleRates")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.custom.features.priority")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.custom.features.dedicatedTeam")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      {t("commission.custom.features.itSupport")}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Custom Benefits */}
              <div className="bg-purple-50 dark:bg-purple-500/10 rounded-xl p-4 border border-purple-200 dark:border-purple-500/20">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-left">
                  {t("commission.custom.benefits")}
                </h4>
                <ul className="text-left space-y-1 text-sm">
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.custom.details.package")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.custom.details.flexibility")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.custom.details.support")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.custom.details.resources")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.custom.details.reporting")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.custom.details.extensions")}
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    {t("commission.custom.details.itSupport")}
                  </li>
                </ul>
              </div>

              {/* Note */}
              <p className="text-xs text-gray-600 dark:text-white/60 italic">
                {t("commission.custom.note")}
              </p>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                {t("commission.custom.cta")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
