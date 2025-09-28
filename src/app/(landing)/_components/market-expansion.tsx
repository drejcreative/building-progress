"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

export default function MarketExpansion() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            {t("marketExpansion.title").split("**")[0]}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("marketExpansion.title").split("**")[1]}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
            {t("marketExpansion.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {t("marketExpansion.serbia.title")}
            </h3>
            <p className="text-gray-700 dark:text-white/70 mb-4">
              {t("marketExpansion.serbia.status")}
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
              <div>{t("marketExpansion.serbia.cities.belgrade")}</div>
              <div>{t("marketExpansion.serbia.cities.noviSad")}</div>
              <div>{t("marketExpansion.serbia.cities.nis")}</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {t("marketExpansion.montenegro.title")}
            </h3>
            <p className="text-gray-700 dark:text-white/70 mb-4">
              {t("marketExpansion.montenegro.status")}
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
              <div>{t("marketExpansion.montenegro.cities.budva")}</div>
              <div>{t("marketExpansion.montenegro.cities.kotor")}</div>
              <div>{t("marketExpansion.montenegro.cities.podgorica")}</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              {t("marketExpansion.croatia.title")}
            </h3>
            <p className="text-gray-700 dark:text-white/70 mb-4">
              {t("marketExpansion.croatia.status")}
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
              <div>{t("marketExpansion.croatia.cities.zagreb")}</div>
              <div>{t("marketExpansion.croatia.cities.dubrovnik")}</div>
              <div>{t("marketExpansion.croatia.cities.split")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
