import { CheckCircle } from "lucide-react";
import React from "react";

export default function FreeShowcase() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Risk-Free Trial
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Try Our Service{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              100% Free
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
            We&apos;ll create a professional showcase for your first apartment
            completely free. No commitment, no risk — see our quality before you
            commit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              What You Get in Our Free Trial:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Professional Apartment Listing
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    Complete webpage for one apartment with SEO optimization
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Professional Photography
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    High-quality photos and basic drone footage
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    2-Week Marketing Test
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    Targeted Facebook and Google ads with performance analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Results Analysis
                  </h4>
                  <p className="text-gray-700 dark:text-white/70">
                    Detailed report on leads, engagement, and recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Why We Offer This:
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-white/70">
              <p>
                We&apos;re confident in our ability to deliver results. This
                limited trial proves our quality with minimal investment from us
                while giving you a real taste of our service.
              </p>
              <p>
                After seeing the leads and engagement we generate, you&apos;ll
                understand the value of our commission-based approach for your
                entire building.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mt-6">
                <p className="font-semibold text-blue-800 dark:text-blue-300">
                  &ldquo;Small investment, big proof of concept.&rdquo;
                </p>
                <p className="text-sm mt-2 text-blue-600 dark:text-blue-400">
                  Typical cost: €800-1,200 • Your cost: €0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
