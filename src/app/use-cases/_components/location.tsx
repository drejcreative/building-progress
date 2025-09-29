"use client";

import { useTranslations } from "next-intl";
import { MapPin, Map } from "lucide-react";

export default function UseCasesLocation() {
  const t = useTranslations("UseCases");

  return (
    <section id="location" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("location.title")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t("location.description")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("location.distances.center")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("location.distances.airport")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("location.distances.metro")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("location.distances.shops")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {t("location.mapPlaceholder")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
