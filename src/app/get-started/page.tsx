import { useTranslations } from "next-intl";
import {
  Building2,
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Euro,
  Calendar,
  MessageSquare,
  CheckCircle,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function GetStarted() {
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              VIP Investor Application
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Secure Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                VIP Investor Spot
              </span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed">
              Join the elite investors who get exclusive access to our premium
              services. Only 10 projects accepted monthly — start your
              application today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Application Form */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Investor Application Form
              </h2>

              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-500" />
                    <span>Personal Information</span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+381 XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <Building className="w-5 h-5 text-green-500" />
                    <span>Project Information</span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        Number of Units *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select range</option>
                        <option value="1-10">1-10 units</option>
                        <option value="11-25">11-25 units</option>
                        <option value="26-50">26-50 units</option>
                        <option value="51-100">51-100 units</option>
                        <option value="100+">100+ units</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="City, Serbia"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        Expected Sales Price Range *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select range</option>
                        <option value="under-500k">Under €500,000</option>
                        <option value="500k-1m">€500,000 - €1,000,000</option>
                        <option value="1m-2m">€1,000,000 - €2,000,000</option>
                        <option value="2m-5m">€2,000,000 - €5,000,000</option>
                        <option value="5m+">€5,000,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                        Timeline for Sales *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select timeline</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="12-18-months">12-18 months</option>
                        <option value="18+months">18+ months</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-purple-500" />
                    <span>Additional Information</span>
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                      Project Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project, current status, and any specific requirements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
                      How did you hear about us?
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="">Select option</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Submit VIP Application
                </button>
              </form>
            </div>

            {/* Benefits & Process */}
            <div className="space-y-8">
              {/* VIP Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-blue-500" />
                  <span>VIP Benefits</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Priority Access
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Exclusive access to our premium buyer database
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Dedicated Manager
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Personal account manager for your project
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Enhanced Marketing
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Premium marketing campaigns and exposure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Zero Upfront Cost
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        No risk, pay only when properties sell
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200/50 dark:border-green-800/30">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-green-500" />
                  <span>Application Process</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Submit Application
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Complete the form with your project details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Review & Consultation
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        We'll review and schedule a consultation call
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Project Approval
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        If approved, we'll start your marketing campaign
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Launch & Monitor
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        We launch your campaign and provide regular updates
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/30">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-purple-500" />
                  <span>Need Help?</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      info@investorpro.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      +381 XX XXX XXX
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-white/70">
                      Belgrade, Serbia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
