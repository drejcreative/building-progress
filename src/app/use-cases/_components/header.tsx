"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Building2, Phone, Menu } from "lucide-react";

export default function UseCasesHeader() {
  const t = useTranslations("UseCases");

  return (
    <>
      {/* ProInvest Showcase Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Building2 className="w-4 h-4" />
          <span className="font-semibold">{t("header.showcase")}</span>
          <span className="text-blue-200">•</span>
          <span>{t("header.description")}</span>
          <span className="text-blue-200">•</span>
          <Link href="/" className="underline hover:no-underline">
            {t("header.backToProInvest")}
          </Link>
        </div>
      </div>

      {/* Building Website Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("header.title")}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("header.subtitle")}
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  {t("header.poweredBy")}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#overview"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.overview")}
              </a>
              <a
                href="#apartments"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.apartments")}
              </a>
              <a
                href="#location"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.location")}
              </a>
              <a
                href="#progress"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.progress")}
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.contact")}
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+381 11 123 4567</span>
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Visit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 dark:text-gray-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
