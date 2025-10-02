import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import HotIdeaBadge from "./hot-idea-badge";

export default async function Hero() {
  const t = await getTranslations("HomePage");
  return (
    <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-60 pb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              {t("hero.subtitle")}
            </span>
          </h1>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-300 to-orange-400 text-white rounded-full text-sm font-bold mb-6 shadow-lg border-2 border-orange-300">
            {t("hero.stats.hotIdea")}
          </div>
          <p className="text-xl lg:text-2xl mb-4 animate-fade-in-up animation-delay-200 text-gray-700 dark:text-white/80">
            {t("hero.description").split("**")[0]}
            <strong>{t("hero.description").split("**")[1]}</strong>
          </p>
          <p className="text-lg mb-8 animate-fade-in-up animation-delay-200 text-gray-700 dark:text-white/80">
            {t("hero.content")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Link
              href="/consultation"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>{t("hero.ctaPrimary")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/use-cases"
              className="px-8 py-4 rounded-full text-lg font-semibold bg-gray-900/10 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-gray-900/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/modern-complex.jpg"
            alt="Modern building complex"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl animate-float"
          />
          <HotIdeaBadge />
        </div>
      </div>
    </div>
  );
}
