import React from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function VipCta() {
  const t = await getTranslations("HomePage");
  return (
    <div className="mt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
          {t("vipCta.badge")}
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
          {t("vipCta.title")}
        </h2>
        <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          {t("vipCta.subtitle").split("**")[0]}
          <strong>{t("vipCta.subtitle").split("**")[1]}</strong>
          {t("vipCta.subtitle").split("**")[2]}
        </p>
        <Link
          href="/get-started"
          className="inline-block bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
        >
          {t("vipCta.button")}
        </Link>
      </div>
    </div>
  );
}
