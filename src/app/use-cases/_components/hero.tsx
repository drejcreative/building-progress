"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Eye, Video } from "lucide-react";

export default function UseCasesHero() {
  const t = useTranslations("UseCases");

  return (
    <section className="relative h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt="Belgrade Luxury Residences"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              {t("hero.constructionStatus")}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{t("hero.viewUnits")}</span>
              </button>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Video className="w-5 h-5" />
                <span>{t("hero.virtualTour")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">
                {t("stats.totalUnits")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">18</div>
              <div className="text-sm text-gray-600">{t("stats.sold")}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">6</div>
              <div className="text-sm text-gray-600">
                {t("stats.available")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">€2.1M</div>
              <div className="text-sm text-gray-600">
                {t("stats.totalValue")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
