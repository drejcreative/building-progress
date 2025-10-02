import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import LanguageSwitcher from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

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
            PRO invest
          </span>
        </span>
      </Link>
      <div className="flex items-center space-x-2 lg:space-x-4">
        <Link
          href="/use-cases"
          className="hidden md:flex text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {t("useCases")}
        </Link>
        <Link
          href="/consultation"
          className="hidden md:inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t("consultation")}</span>
        </Link>
        <LanguageSwitcher />
        <ThemeToggle />
        <Link
          href="/get-started"
          className="relative px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base group overflow-hidden"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span className="hidden lg:inline">{t("getStarted")}</span>
            <span className="lg:hidden">🚀</span>
            <span className="hidden lg:inline">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>
      </div>
    </nav>
  );
}
