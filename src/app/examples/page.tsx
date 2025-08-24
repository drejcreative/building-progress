import { useTranslations } from "next-intl";
import {
  Building2,
  ArrowLeft,
  CheckCircle,
  Star,
  TrendingUp,
  MapPin,
  Calendar,
  Euro,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Examples() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="w-8 h-8 text-gray-900 dark:text-white" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            InvestorPro
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 text-gray-800 hover:bg-gray-800/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Real Success Stories
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Success{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Examples
              </span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed">
              Real results from real investors who chose our VIP service. See
              how we helped them achieve exceptional returns with zero upfront
              costs.
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-sm font-medium mb-4">
                  <Award className="w-4 h-4 mr-2" />
                  Featured Success Story
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Belgrade Downtown Complex
                </h2>
                <p className="text-lg text-gray-700 dark:text-white/70">
                  How we helped sell 45 luxury apartments in just 3 months
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                    alt="Belgrade Downtown Complex"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/50 dark:bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-green-500">
                        45
                      </div>
                      <div className="text-sm text-gray-700 dark:text-white/70">
                        Units Sold
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white/50 dark:bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-blue-500">3</div>
                      <div className="text-sm text-gray-700 dark:text-white/70">
                        Months
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white/50 dark:bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-purple-500">
                        +18%
                      </div>
                      <div className="text-sm text-gray-700 dark:text-white/70">
                        Above Market
                      </div>
                    </div>
                    <div className="text-center p-4 bg-white/50 dark:bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-orange-500">
                        €0
                      </div>
                      <div className="text-sm text-gray-700 dark:text-white/70">
                        Upfront Cost
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      What We Delivered:
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Professional Website
                          </h4>
                          <p className="text-gray-700 dark:text-white/70 text-sm">
                            Custom website with 45 individual apartment pages
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Cinematic Videos
                          </h4>
                          <p className="text-gray-700 dark:text-white/70 text-sm">
                            Drone footage, 360° tours, and narrated walkthroughs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Marketing Campaigns
                          </h4>
                          <p className="text-gray-700 dark:text-white/70 text-sm">
                            Google, Facebook, and Instagram advertising
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Dedicated Sales Team
                          </h4>
                          <p className="text-gray-700 dark:text-white/70 text-sm">
                            Professional agents handling all inquiries
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-4 border border-green-500/20">
                    <p className="text-gray-700 dark:text-white/70 italic">
                      "The professional marketing approach helped us sell faster
                      and for higher prices than expected. Zero upfront costs
                      and exceptional results - exactly what we needed."
                    </p>
                    <div className="flex items-center mt-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          Milan Petrović
                        </div>
                        <div className="text-sm text-gray-600 dark:text-white/60">
                          Property Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Examples Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Novi Sad Residential Tower",
                image:
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
                result: "100% sold in 6 months",
                increase: "+22% profit margin",
                location: "Novi Sad, Serbia",
                units: "28 units",
                testimonial:
                  "Zero upfront costs and professional service made this investment incredibly profitable.",
              },
              {
                title: "Niš Business District",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
                result: "Sold 28 units in 4 months",
                increase: "+15% above asking price",
                location: "Niš, Serbia",
                units: "28 units",
                testimonial:
                  "The comprehensive marketing package exceeded our expectations and delivered results quickly.",
              },
              {
                title: "Subotica Luxury Complex",
                image:
                  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
                result: "32 units sold in 5 months",
                increase: "+20% market premium",
                location: "Subotica, Serbia",
                units: "32 units",
                testimonial:
                  "Professional marketing and zero risk made this our most successful project yet.",
              },
              {
                title: "Kragujevac Modern Living",
                image:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                result: "24 units sold in 3 months",
                increase: "+17% profit increase",
                location: "Kragujevac, Serbia",
                units: "24 units",
                testimonial:
                  "The VIP service delivered exceptional results with no upfront investment required.",
              },
              {
                title: "Zrenjanin Premium Apartments",
                image:
                  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
                result: "18 units sold in 4 months",
                increase: "+19% above market",
                location: "Zrenjanin, Serbia",
                units: "18 units",
                testimonial:
                  "Professional marketing approach helped us achieve premium pricing and fast sales.",
              },
              {
                title: "Pančevo Urban Development",
                image:
                  "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
                result: "36 units sold in 6 months",
                increase: "+16% profit margin",
                location: "Pančevo, Serbia",
                units: "36 units",
                testimonial:
                  "The complete service package delivered results that exceeded our expectations.",
              },
            ].map((example, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all transform shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {example.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-white/60 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{example.location}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-green-500 font-semibold">
                      {example.result}
                    </div>
                    <div className="text-blue-500 font-semibold">
                      {example.increase}
                    </div>
                    <div className="text-gray-600 dark:text-white/60 text-sm">
                      {example.units}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/70 mb-4">
                    "{example.testimonial}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-white/50">
                      VIP Service
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Get the same professional service that helped these investors
                  achieve exceptional results
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/get-started"
                    className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                  >
                    Apply for VIP Service
                  </Link>
                  <Link
                    href="/"
                    className="px-8 py-4 rounded-full text-lg font-semibold bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
