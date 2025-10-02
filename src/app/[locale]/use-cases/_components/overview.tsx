"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckCircle, Calendar } from "lucide-react";

export default function UseCasesOverview() {
  const t = useTranslations("UseCases");

  return (
    <section id="overview" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("overview.title")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t("overview.description")}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("overview.features.premiumLocation")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("overview.features.security")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("overview.features.parking")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("overview.features.fitness")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("overview.features.garden")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {t("overview.features.lounge")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/aerial-view.jpg"
              alt="Luxury Interior"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {t("overview.completion.title")}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("overview.completion.date")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
