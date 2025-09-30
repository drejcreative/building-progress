import { useTranslations } from "next-intl";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export default function GetStarted() {
  const t = useTranslations("GetStarted");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-100/40 via-orange-100/40 to-red-100/40 dark:from-red-600/20 dark:via-orange-600/20 dark:to-red-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-red-200/50 dark:bg-red-500/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-orange-200/50 dark:bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-red-200/50 dark:bg-red-500/30 rounded-full blur-3xl animate-bounce"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              URGENT: Only 2 VIP Spots Available This Month
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Secure Your VIP Spot
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Before It&apos;s Gone
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-700 dark:text-white/80 max-w-4xl mx-auto">
              👉 <strong>Only 2 VIP Properties Accepted Monthly</strong> —
              Extreme scarcity creates maximum urgency and ensures premium
              service quality.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-red-700 dark:text-red-300 font-semibold">
                  Limited Time
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-orange-500" />
                <span className="text-orange-700 dark:text-orange-300 font-semibold">
                  Premium Access
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-green-700 dark:text-green-300 font-semibold">
                  Zero Risk
                </span>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 mb-12 text-white text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Clock className="w-8 h-8 animate-pulse" />
              <span className="text-2xl font-bold">Time is Running Out</span>
            </div>
            <p className="text-xl mb-6">
              Don&apos;t miss your chance to join Serbia&apos;s most exclusive
              property sales program.
              <br />
              <strong>
                Only 2 VIP spots available this month — first come, first
                served.
              </strong>
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">€0</div>
                <div className="text-sm">Upfront Investment</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm">VIP Spots Available</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm">Risk-Free Trial</div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Apply for VIP Investor Access
                </h2>
                <p className="text-gray-700 dark:text-white/70">
                  Complete this form to secure your exclusive VIP spot.
                  We&apos;ll contact you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="+381 XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Property Location *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your property location</option>
                    <option value="belgrade">Belgrade</option>
                    <option value="novi-sad">Novi Sad</option>
                    <option value="nis">Niš</option>
                    <option value="budva">Budva (Montenegro)</option>
                    <option value="kotor">Kotor (Montenegro)</option>
                    <option value="podgorica">Podgorica (Montenegro)</option>
                    <option value="zagreb">Zagreb (Croatia)</option>
                    <option value="dubrovnik">Dubrovnik (Croatia)</option>
                    <option value="split">Split (Croatia)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Property Value Range *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select property value range</option>
                    <option value="under-100k">Under €100,000</option>
                    <option value="100k-200k">€100,000 - €200,000</option>
                    <option value="200k-350k">€200,000 - €350,000</option>
                    <option value="350k-500k">€350,000 - €500,000</option>
                    <option value="500k-1m">€500,000 - €1,000,000</option>
                    <option value="over-1m">Over €1,000,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Timeline for Sale *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your timeline</option>
                    <option value="immediate">
                      Immediate (within 1 month)
                    </option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your property, specific requirements, or any questions you have..."
                  ></textarea>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        What Happens Next?
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-white/70">
                        <li>
                          • We&apos;ll review your application within 24 hours
                        </li>
                        <li>
                          • Schedule a free consultation call to discuss your
                          property
                        </li>
                        <li>
                          • Receive a customized proposal for your VIP service
                          package
                        </li>
                        <li>
                          • Start with our 100% free showcase project (no
                          commitment)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl text-xl font-bold hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>🚀 Secure My VIP Spot Now</span>
                  <ArrowRight className="w-6 h-6" />
                </button>

                <p className="text-center text-sm text-gray-600 dark:text-white/60">
                  By submitting this form, you agree to our terms and privacy
                  policy.
                  <br />
                  <strong>
                    No upfront costs • No commitment • 100% risk-free
                  </strong>
                </p>
              </form>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Why{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Choose Our VIP Service?
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Extreme Scarcity
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  Only 2 VIP properties accepted monthly ensures maximum
                  attention and premium service quality.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Zero Risk Trial
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  Start with our 100% free showcase project. No upfront costs,
                  no commitment required.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Premium Results
                </h3>
                <p className="text-gray-700 dark:text-white/70">
                  Our VIP clients see 15-25% higher sale prices and 2-3x faster
                  sales compared to DIY.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
