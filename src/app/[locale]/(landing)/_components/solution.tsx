import { CheckCircle, Globe, TrendingUp, Users, Video } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import VipCta from "./vip-cta";

export default async function Solution() {
  const t = await getTranslations("HomePage");
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            {t("solution.badge")}
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("solution.title").split("**")[0]}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("solution.title").split("**")[1]}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed">
            {t("solution.subtitle")}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Core Services */}
          <div className="space-y-8">
            {/* Visual Preview */}
            <div className="relative rounded-3xl overflow-hidden mb-8">
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
                alt="Professional property marketing"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {t("solution.digitalPresence.image.title")}
                </h3>
                <p className="text-white/90">
                  {t("solution.digitalPresence.image.description")}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t("solution.digitalPresence.title")}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    {t("solution.digitalPresence.subtitle")}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.digitalPresence.features.customWebsite.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.digitalPresence.features.customWebsite.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.digitalPresence.features.virtualTours.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.digitalPresence.features.virtualTours.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.digitalPresence.features.leadManagement.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.digitalPresence.features.leadManagement.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.digitalPresence.features.apartmentPages.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.digitalPresence.features.apartmentPages.description"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t("solution.mediaProduction.title")}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400">
                    {t("solution.mediaProduction.subtitle")}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.mediaProduction.features.photography.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.mediaProduction.features.photography.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.mediaProduction.features.droneVideography.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.mediaProduction.features.droneVideography.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.mediaProduction.features.walkthroughs.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.mediaProduction.features.walkthroughs.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.mediaProduction.features.youtubeCommercials.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.mediaProduction.features.youtubeCommercials.description"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Marketing & Sales */}
          <div className="space-y-8">
            {/* Visual Preview */}
            <div className="relative rounded-3xl overflow-hidden mb-8">
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop"
                alt="Marketing and sales services"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {t("solution.marketing.image.title")}
                </h3>
                <p className="text-white/90">
                  {t("solution.marketing.image.description")}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200/50 dark:border-green-800/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t("solution.marketing.title")}
                  </h3>
                  <p className="text-green-600 dark:text-green-400">
                    {t("solution.marketing.subtitle")}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.marketing.features.googleMeta.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t("solution.marketing.features.googleMeta.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.marketing.features.socialMedia.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t("solution.marketing.features.socialMedia.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.marketing.features.emailMarketing.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.marketing.features.emailMarketing.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.marketing.features.contentMarketing.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.marketing.features.contentMarketing.description"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl p-8 border border-orange-200/50 dark:border-orange-800/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {t("solution.salesSupport.title")}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400">
                    {t("solution.salesSupport.subtitle")}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.salesSupport.features.dedicatedTeam.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.salesSupport.features.dedicatedTeam.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.salesSupport.features.legalConcierge.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.salesSupport.features.legalConcierge.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.salesSupport.features.contractManagement.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.salesSupport.features.contractManagement.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t("solution.salesSupport.features.compliance.title")}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.salesSupport.features.compliance.description"
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t(
                        "solution.salesSupport.features.progressTracking.title"
                      )}
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      {t(
                        "solution.salesSupport.features.progressTracking.description"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VIP Spot CTA Section */}
        <VipCta />
      </div>
    </section>
  );
}
