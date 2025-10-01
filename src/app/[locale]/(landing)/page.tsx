import { getLocale } from "next-intl/server";
import Hero from "./_components/hero";
import CostSaving from "./_components/cost-saving";
import Solution from "./_components/solution";
import FreeShowcase from "./_components/free-showcase";
import CommissionStructure from "./_components/commission-structure";
import MarketExpansion from "./_components/market-expansion";
import CTASection from "./_components/cta-section";
import StructuredData from "../../../components/structured-data";

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <StructuredData locale={locale} />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
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
        <CTASection />
      </main>
    </>
  );
}
