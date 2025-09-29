"use client";

import { useTranslations } from "next-intl";
import { TrendingUp, Building2, Users, Target } from "lucide-react";

export default function MarketExpansion() {
  const t = useTranslations("HomePage");

  const markets = [
    {
      key: "serbia",
      icon: Building2,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500",
      accentColor: "border-emerald-200 dark:border-emerald-800",
    },
    {
      key: "montenegro",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500",
      accentColor: "border-blue-200 dark:border-blue-800",
    },
    {
      key: "croatia",
      icon: Target,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-500",
      accentColor: "border-purple-200 dark:border-purple-800",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-900 dark:via-blue-950/30 dark:to-indigo-950">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Regional Expansion
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("marketExpansion.title").split("**")[0]}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("marketExpansion.title").split("**")[1]}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed">
            {t("marketExpansion.subtitle")}
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {markets.map((market) => {
            const IconComponent = market.icon;

            return (
              <div
                key={market.key}
                className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 ${market.accentColor} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Background Gradient Effect */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${market.color} opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                {/* Icon and Status */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-16 h-16 ${market.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${market.color} text-white text-sm font-medium shadow-lg`}
                  >
                    {t(`marketExpansion.${market.key}.status`)}
                  </div>
                </div>

                {/* Country Name */}
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t(`marketExpansion.${market.key}.title`)}
                </h3>

                {/* Cities List */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
                    Key Cities
                  </h4>
                  <div className="space-y-3">
                    {["belgrade", "noviSad", "nis"].map((city) =>
                      market.key === "serbia" ? (
                        <div
                          key={city}
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                          <span className="text-base font-medium">
                            {t(`marketExpansion.serbia.cities.${city}`).replace(
                              "• ",
                              ""
                            )}
                          </span>
                        </div>
                      ) : null
                    )}
                    {["budva", "kotor", "podgorica"].map((city) =>
                      market.key === "montenegro" ? (
                        <div
                          key={city}
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                          <span className="text-base font-medium">
                            {t(
                              `marketExpansion.montenegro.cities.${city}`
                            ).replace("• ", "")}
                          </span>
                        </div>
                      ) : null
                    )}
                    {["zagreb", "dubrovnik", "split"].map((city) =>
                      market.key === "croatia" ? (
                        <div
                          key={city}
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                          <span className="text-base font-medium">
                            {t(
                              `marketExpansion.croatia.cities.${city}`
                            ).replace("• ", "")}
                          </span>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${market.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">
              {t("expandingNetwork.title")}
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              {t("expandingNetwork.description")}
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              {t("expandingNetwork.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
