import { CheckCircle } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export default function FreeShowcase() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {t("freeShowcase.badge")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            {t("freeShowcase.title").split("**")[0]}{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {t("freeShowcase.title").split("**")[1]}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
            {t("freeShowcase.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              {t("freeShowcase.whatYouGet")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {t("freeShowcase.features.listing.title")}
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    {t("freeShowcase.features.listing.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {t("freeShowcase.features.photography.title")}
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    {t("freeShowcase.features.photography.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {t("freeShowcase.features.marketingTest.title")}
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    {t("freeShowcase.features.marketingTest.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {t("freeShowcase.features.analysis.title")}
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    {t("freeShowcase.features.analysis.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              {t("freeShowcase.whyWeOffer")}
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-white/70">
              <p>
                {t("freeShowcase.explanation.confidence")}
              </p>
              <p>
                {t("freeShowcase.explanation.value")}
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mt-6">
                <p className="font-semibold text-blue-800 dark:text-blue-300">
                  {t("freeShowcase.explanation.quote")}
                </p>
                <p className="text-sm mt-2 text-blue-600 dark:text-blue-400">
                  {t("freeShowcase.explanation.cost")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
