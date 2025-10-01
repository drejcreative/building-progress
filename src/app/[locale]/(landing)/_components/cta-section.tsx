"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CTASection() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
          {t("cta.title")}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-white/80">
          {t("cta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/consultation"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105"
          >
            {t("cta.primary")}
          </Link>
          <Link
            href="/use-cases"
            className="inline-block px-10 py-4 rounded-full text-lg font-semibold bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 text-gray-800 hover:bg-gray-800/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all"
          >
            {t("cta.secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
