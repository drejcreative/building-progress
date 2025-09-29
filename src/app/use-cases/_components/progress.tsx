"use client";

import { useTranslations } from "next-intl";
import { Image } from "lucide-react";

export default function UseCasesProgress() {
  const t = useTranslations("UseCases");

  return (
    <section id="progress" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("progress.title")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("progress.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("progress.overallProgress")}
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {t("progress.milestones.sitePreparation.title")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("progress.milestones.sitePreparation.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.sitePreparation.description")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {t("progress.milestones.foundation.title")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("progress.milestones.foundation.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.foundation.description")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {t("progress.milestones.structural.title")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("progress.milestones.structural.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.structural.description")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {t("progress.milestones.exterior.title")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("progress.milestones.exterior.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.exterior.description")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {t("progress.milestones.mep.title")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("progress.milestones.mep.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.mep.description")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {t("progress.milestones.interior.title")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("progress.milestones.interior.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.interior.description")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.amenities.title")}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.amenities.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.amenities.description")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.inspection.title")}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.inspection.date")}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t("progress.milestones.inspection.description")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t("progress.photosPlaceholder")}
                    </p>
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
