import { useTranslations } from "next-intl";
import Hero from "./_components/hero";
import CostSaving from "./_components/cost-saving";
import Solution from "./_components/solution";
import FreeShowcase from "./_components/free-showcase";
import CommissionStructure from "./_components/commission-structure";
import MarketExpansion from "./_components/market-expansion";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-indigo-100/40 to-purple-100/40 dark:from-blue-600/20 dark:via-indigo-600/20 dark:to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/50 dark:bg-purple-500/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200/50 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-200/50 dark:bg-indigo-500/30 rounded-full blur-3xl animate-bounce"></div>
          </div>
        </div>

        <Hero />
      </section>

      <CostSaving />
      <Solution />

      <FreeShowcase />

      {/* <VipBuyerProgram /> */}
      {/* <SuccessStories /> */}

      <CommissionStructure />

      <MarketExpansion />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-white/80">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105">
              {t("cta.primary")}
            </button>
            <button className="px-10 py-4 rounded-full text-lg font-semibold bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 text-gray-800 hover:bg-gray-800/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all">
              {t("cta.secondary")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
