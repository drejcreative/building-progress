import { CheckCircle } from "lucide-react";
import React from "react";

export default function CommissionStructure() {
  return (
    <section
      id="commission"
      className="py-20 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-600/20 dark:to-indigo-600/20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Fair{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Commission
            </span>{" "}
            Structure
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-white/70">
            We only succeed when you succeed - no hidden fees or upfront costs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Standard Service */}
          <div className="backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center bg-white/80 dark:bg-white/5 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Standard Service
            </h3>
            <div className="text-4xl font-bold text-blue-400 mb-4">2-4%</div>
            <p className="mb-6 text-gray-700 dark:text-white/70">
              Complete service package with zero upfront costs
            </p>

            <div className="space-y-6">
              {/* Core Services */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  Core Services:
                </h4>
                <ul className="text-left space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Professional website + apartment pages
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Cinematic media package
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Multi-channel marketing campaigns
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Legal concierge service
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Dedicated sales team
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Progress tracking & reporting
                    </span>
                  </li>
                </ul>
              </div>

              {/* What's Included */}
              <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-left">
                  What&apos;s Included:
                </h4>
                <ul className="text-left space-y-1 text-sm">
                  <li className="text-gray-600 dark:text-white/70">
                    • Basic SEO optimization
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Standard photography & drone footage
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Google & Facebook ads (3 months)
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Standard legal documentation
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Monthly progress reports
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premium Service */}
          <div className="backdrop-blur-sm border border-blue-300 dark:border-blue-500/30 rounded-2xl p-8 text-center relative overflow-hidden bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-500/20 dark:to-indigo-500/20 shadow-lg">
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              VIP
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Premium Service
            </h3>
            <div className="text-4xl font-bold text-indigo-400 mb-4">
              3-5.5%
            </div>
            <p className="mb-6 text-gray-700 dark:text-white/70">
              Premium service with exclusive benefits & priority access
            </p>

            <div className="space-y-6">
              {/* Everything from Standard */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                  Everything in Standard +
                </h4>
                <ul className="text-left space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Exclusive buyer database access
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Premium marketing campaigns
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Personal account manager
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      YouTube videos & paid commercials
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-700 dark:text-white/80">
                      Content marketing & SEO
                    </span>
                  </li>
                </ul>
              </div>

              {/* Premium Benefits */}
              <div className="bg-blue-50 dark:bg-blue-500/10 rounded-xl p-4 border border-blue-200 dark:border-blue-500/20">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-left">
                  Premium Benefits:
                </h4>
                <ul className="text-left space-y-1 text-sm">
                  <li className="text-gray-600 dark:text-white/70">
                    • Advanced SEO & content marketing
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Professional video production for YouTube
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Extended ad campaigns (6 months)
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Priority access to our buyer network
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Weekly progress updates
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Premium legal support & contracts
                  </li>
                  <li className="text-gray-600 dark:text-white/70">
                    • Dedicated account manager 24/7
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
