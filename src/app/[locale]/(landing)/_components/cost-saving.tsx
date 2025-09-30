import {
  Building2,
  Camera,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export default function CostSaving() {
  const t = useTranslations("HomePage");
  const services = [
    {
      key: "websiteDevelopment",
      leftIcon: Globe,
      rightIcon: Globe,
    },
    {
      key: "photography",
      leftIcon: Camera,
      rightIcon: Camera,
    },
    {
      key: "droneVideo",
      leftIcon: Video,
      rightIcon: Video,
    },
    {
      key: "virtualTour",
      leftIcon: Building2,
      rightIcon: Building2,
    },
    {
      key: "marketing",
      leftIcon: TrendingUp,
      rightIcon: TrendingUp,
    },
    {
      key: "legalSupport",
      leftIcon: Shield,
      rightIcon: Shield,
    },
    {
      key: "salesStaff",
      leftIcon: Users,
      rightIcon: Users,
    },
  ];

  return (
    <section
      id="savings"
      className="py-20 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("costSaving.title").split("**")[0]}{" "}
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              {t("costSaving.title").split("**")[1]}
            </span>{" "}
            {t("costSaving.title").split("**")[2]}
          </h2>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed">
            {t("costSaving.subtitle")}
            <br />
            <span className="text-red-500 font-semibold">
              {t("costSaving.maxSavings")}
            </span>
          </p>
        </div>

        <div className="relative">
          {/* Comparison Arrow */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-gradient-to-r from-red-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {t("costSaving.vsLabel")}
            </div>
          </div>

          {/* Headers */}
          <div className="grid lg:grid-cols-2 gap-12 mb-6">
            <h3 className="text-2xl font-bold text-red-400">
              {t("costSaving.diyTitle")}
            </h3>
            <h3 className="text-2xl font-bold text-green-400">
              {t("costSaving.ourServiceTitle")}
            </h3>
          </div>

          {/* Service Items - Each row aligned */}
          <div className="space-y-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-stretch"
              >
                {/* Left Card */}
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/15 transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <service.leftIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {t(`costSaving.services.${service.key}.title`)}
                      </span>
                    </div>
                    <span className="text-red-400 font-bold text-lg">
                      {t(`costSaving.services.${service.key}.cost`)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-white/70 text-sm ml-8 flex-grow">
                    {t(`costSaving.services.${service.key}.descriptionDiy`)}
                  </p>
                </div>

                {/* Right Card */}
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/15 transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <service.rightIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {t(`costSaving.services.${service.key}.title`)}
                      </span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-700 dark:text-white/70 text-sm ml-8 flex-grow">
                    {t(`costSaving.services.${service.key}.descriptionOur`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 bg-gradient-to-br from-red-500/20 via-red-400/15 to-red-600/25 border-2 border-red-500/40 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-700 dark:text-red-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  {t("costSaving.summary.yourRisk.badge")}
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                  {t("costSaving.summary.yourRisk.total")}
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("costSaving.summary.yourRisk.title")}
                </div>
                <div className="text-sm text-red-500 font-medium">
                  {t("costSaving.summary.yourRisk.monthly")}
                </div>
                <div className="text-xs text-red-400 mt-2">
                  {t("costSaving.summary.yourRisk.noGuarantee")}
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-500/20 via-green-400/15 to-green-600/25 border-2 border-green-500/40 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {t("costSaving.summary.zeroRisk.badge")}
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-3">
                  {t("costSaving.summary.zeroRisk.total")}
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("costSaving.summary.zeroRisk.title")}
                </div>
                <div className="text-sm text-green-500 font-medium">
                  {t("costSaving.summary.zeroRisk.payOnSale")}
                </div>
                <div className="text-xs text-green-400 mt-2">
                  {t("costSaving.summary.zeroRisk.maxReturn")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
