import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import Hero from "./_components/hero";
import CostSaving from "./_components/cost-saving";
import Solution from "./_components/solution";
import VipBuyerProgram from "./_components/vip-buyer-program";
import FreeShowcase from "./_components/free-showcase";
import SuccessStories from "./_components/success-stories";
import CommissionStructure from "./_components/commission-structure";

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

      {/* Market Expansion */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Growing{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Regional Presence
              </span>
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
              Expanding our premium service across the region to serve more
              investors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Serbia
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                Primary Market
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                <div>• Belgrade</div>
                <div>• Novi Sad</div>
                <div>• Niš</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Montenegro
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                Expansion Market
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                <div>• Budva</div>
                <div>• Kotor</div>
                <div>• Podgorica</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Croatia
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                Expansion Market
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                <div>• Zagreb</div>
                <div>• Dubrovnik</div>
                <div>• Split</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Ready to Transform Your Property Sales?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-white/80">
            Join successful investors who&apos;ve eliminated upfront costs and
            increased their returns. Start with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="px-10 py-4 rounded-full text-lg font-semibold bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 text-gray-800 hover:bg-gray-800/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all">
              View Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
