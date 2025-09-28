import { CheckCircle } from "lucide-react";
import React from "react";

export default function VipBuyerProgram() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Exclusive{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Buyer VIP Program
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
            Premium buyers get early access to our best properties before they
            hit the market
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  VIP Buyer Benefits:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      Early access to new properties
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      Exclusive property previews
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      Priority booking for viewings
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      Dedicated buyer concierge
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      Market insights and analysis
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      Price alerts and notifications
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  Subscription Plans:
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-white/70">
                      Basic VIP Access
                    </span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">
                      €99/month
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-white/70">
                      Premium VIP Access
                    </span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">
                      €199/month
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-white/60 mt-4">
                    * Includes all benefits + priority support + price alerts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
