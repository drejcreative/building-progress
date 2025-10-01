import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import LanguageSwitcher from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 lg:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
      <Link
        href="/"
        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
      >
        <Image
          src="/proinvest-logo.svg"
          alt="ProInvest"
          width={24}
          height={24}
          className="md:w-8 md:h-8"
        />

        <span className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
          <span className="font-oswald bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            PRO
          </span>
          <span className="hidden xs:inline">Invest</span>
        </span>
      </Link>
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
      <div className="flex items-center space-x-2 lg:space-x-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <Link
          href="/get-started"
          className="px-3 py-2 lg:px-6 rounded-full bg-gray-900/10 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-gray-900/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all text-sm lg:text-base"
        >
          <span className="hidden lg:inline">{t("getStarted")}</span>
          <span className="lg:hidden">→</span>
        </Link>
      </div>
    </nav>
  );
}
