import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import LanguageSwitcher from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
      <div className="flex items-center space-x-2">
        <Image
          src="/proinvest-logo.svg"
          alt="ProInvest"
          width={32}
          height={32}
        />

        <span className="text-xl font-bold text-gray-900 dark:text-white">
          <span className="font-oswald bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            PRO
          </span>
          Invest
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#savings"
          className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
        >
          {t("costSavings")}
        </a>
        <a
          href="#services"
          className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
        >
          {t("services")}
        </a>

        <a
          href="#commission"
          className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
        >
          {t("pricing")}
        </a>
        <Link
          href="/use-cases"
          className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
        >
          {t("useCases")}
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <Link
          href="/get-started"
          className="px-6 py-2 rounded-full bg-gray-900/10 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-gray-900/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all"
        >
          {t("getStarted")}
        </Link>
      </div>
    </nav>
  );
}
