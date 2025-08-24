import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Building2,
  Home as HomeIcon,
  TrendingUp,
  Users,
  Star,
  MapPin,
  Calendar,
  CheckCircle,
  Euro,
  Video,
  Camera,
  Globe,
  Shield,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";
import { LanguageSwitcher } from "./components/language-switcher";

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

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-gray-900 dark:text-white" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              InvestorPro
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#savings"
              className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
            >
              Cost Savings
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <button className="px-6 py-2 rounded-full bg-gray-900/10 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-gray-900/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all">
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-60 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Zero Risk
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Maximum Return
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-4 animate-fade-in-up animation-delay-200 text-gray-700 dark:text-white/80">
                👉{" "}
                <strong>
                  Sell Your Building Faster — Without Spending €1 Upfront.
                </strong>
              </p>
              <p className="text-lg mb-8 animate-fade-in-up animation-delay-200 text-gray-700 dark:text-white/80">
                Professional property marketing with zero upfront costs. We
                handle everything - you only pay when properties sell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Start Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-full text-lg font-semibold bg-gray-900/10 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-gray-900/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Modern building complex"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      150+ Properties
                    </div>
                    <div className="text-sm text-gray-600">
                      Successfully Sold
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section
        id="savings"
        className="py-20 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Save{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                €15,000-25,000
              </span>{" "}
              Per Building
            </h2>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed">
              Traditional DIY marketing costs vs. our zero-upfront professional
              service.
              <br />
              <span className="text-red-500 font-semibold">
                Maximum savings for Serbian market conditions
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start relative">
            {/* Comparison Arrow */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-r from-red-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                VS
              </div>
            </div>
            {/* DIY Costs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                DIY Costs (Your Risk)
              </h3>
              {[
                {
                  item: "Website Development",
                  cost: "€4,000-8,000",
                  icon: Globe,
                  description:
                    "Professional custom website with SEO optimization",
                },
                {
                  item: "Professional Photography",
                  cost: "€500-1,200",
                  icon: Camera,
                  description: "High-quality photos with professional staging",
                },
                {
                  item: "Drone Video + Editing",
                  cost: "€800-1,500",
                  icon: Video,
                  description: "Aerial footage with cinematic editing",
                },
                {
                  item: "360° Virtual Tour",
                  cost: "€1,000-2,000",
                  icon: Building2,
                  description: "Interactive virtual tours with floor plans",
                },
                {
                  item: "Marketing & Ads (6-12 months)",
                  cost: "€5,000-10,000",
                  icon: TrendingUp,
                  description: "Google, Facebook, Instagram campaigns",
                },
                {
                  item: "Legal Support",
                  cost: "€1,500-3,000",
                  icon: Shield,
                  description: "Contract management and compliance",
                },
                {
                  item: "Sales Staff (6 months)",
                  cost: "€6,000-12,000",
                  icon: Users,
                  description: "Professional sales team and management",
                },
              ].map((cost, index) => (
                <div
                  key={index}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/15 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <cost.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {cost.item}
                      </span>
                    </div>
                    <span className="text-red-400 font-bold text-lg">
                      {cost.cost}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-white/70 text-sm ml-8">
                    {cost.description}
                  </p>
                </div>
              ))}
              <div className="p-8 bg-gradient-to-br from-red-500/20 via-red-400/15 to-red-600/25 border-2 border-red-500/40 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-700 dark:text-red-300 text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    YOUR RISK
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                    €15,000-25,000
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Total Upfront Investment
                  </div>
                  <div className="text-sm text-red-500 font-medium">
                    Plus ongoing monthly costs
                  </div>
                  <div className="text-xs text-red-400 mt-2">
                    No guarantee of success
                  </div>
                </div>
              </div>
            </div>

            {/* Our Service */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                Our Service (Zero Risk)
              </h3>
              {[
                {
                  item: "Website Development",
                  included: true,
                  icon: Globe,
                  description:
                    "Custom SEO-optimized website with lead capture and analytics",
                },
                {
                  item: "Professional Photography",
                  included: true,
                  icon: Camera,
                  description:
                    "Professional photos with staging and lighting setup",
                },
                {
                  item: "Drone Video + Editing",
                  included: true,
                  icon: Video,
                  description:
                    "Aerial footage with cinematic editing and music",
                },
                {
                  item: "360° Virtual Tour",
                  included: true,
                  icon: Building2,
                  description:
                    "Interactive virtual tours with floor plans and details",
                },
                {
                  item: "Marketing & Ads (6-12 months)",
                  included: true,
                  icon: TrendingUp,
                  description:
                    "Google, Facebook, Instagram, and LinkedIn advertising",
                },
                {
                  item: "Legal Support",
                  included: true,
                  icon: Shield,
                  description: "Full legal support from contracts to closing",
                },
                {
                  item: "Sales Staff (6 months)",
                  included: true,
                  icon: Users,
                  description:
                    "Professional sales agents handling all inquiries",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/15 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <service.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {service.item}
                      </span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-700 dark:text-white/70 text-sm ml-8">
                    {service.description}
                  </p>
                </div>
              ))}
              <div className="p-8 bg-gradient-to-br from-green-500/20 via-green-400/15 to-green-600/25 border-2 border-green-500/40 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    ZERO RISK
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-3">
                    €0
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Upfront Investment
                  </div>
                  <div className="text-sm text-green-500 font-medium">
                    Pay only when properties sell
                  </div>
                  <div className="text-xs text-green-400 mt-2">
                    Zero risk, maximum return
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Investor Solution Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              All-Inclusive Service
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Complete{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Investor Solution
              </span>
            </h2>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed">
              From initial concept to final sale, we handle every aspect of your
              property marketing. Our comprehensive platform combines
              cutting-edge technology with proven sales strategies to maximize
              your returns while minimizing your workload.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Core Services */}
            <div className="space-y-8">
              {/* Visual Preview */}
              <div className="relative rounded-3xl overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
                  alt="Professional property marketing"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Complete Investor Solution
                  </h3>
                  <p className="text-white/90">
                    Everything you need for successful property sales
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Digital Presence
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      Professional Online Platform
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Custom Building Website
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        SEO-optimized, mobile-responsive website with lead
                        capture forms and analytics tracking
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Virtual Property Tours
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Interactive 360° virtual tours with floor plans and
                        detailed property information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Lead Management System
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Automated lead tracking, qualification, and follow-up
                        system
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Premium Media Production
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400">
                      Cinematic Visual Content
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Professional Photography
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        High-resolution photos with professional staging and
                        lighting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Drone Videography
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Aerial footage showcasing location, views, and building
                        exteriors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Narrated Walkthroughs
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Professional video tours with voice-over highlighting
                        key features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Marketing & Sales */}
            <div className="space-y-8">
              {/* Visual Preview */}
              <div className="relative rounded-3xl overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop"
                  alt="Marketing and sales services"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Premium Marketing & Sales
                  </h3>
                  <p className="text-white/90">
                    Strategic campaigns and dedicated support
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200/50 dark:border-green-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Strategic Marketing
                    </h3>
                    <p className="text-green-600 dark:text-green-400">
                      Multi-Channel Campaigns
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Google & Meta Advertising
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Targeted PPC campaigns reaching qualified buyers across
                        platforms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Social Media Management
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Regular content creation and community engagement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Email Marketing
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Automated email sequences nurturing leads through the
                        sales funnel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl p-8 border border-orange-200/50 dark:border-orange-800/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Sales & Support
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400">
                      End-to-End Service
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Dedicated Sales Team
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Professional sales agents handling all buyer inquiries
                        and negotiations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Legal Concierge
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Full legal support from contract creation to closing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Contract Management
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Professional contract drafting, review, and negotiation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Compliance & Verification
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Buyer verification, legal compliance, and regulatory
                        support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Progress Tracking
                      </h4>
                      <p className="text-gray-700 dark:text-white/70 text-sm">
                        Real-time construction updates and investor reporting
                        dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Additional Features */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Additional Premium Features
              </h3>
              <p className="text-gray-700 dark:text-white/70 max-w-2xl mx-auto">
                Beyond our core services, we provide additional tools and
                features to give you the competitive edge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Investor Dashboard
                </h4>
                <p className="text-gray-700 dark:text-white/70 text-sm">
                  Real-time analytics, lead tracking, and performance metrics
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Automated Systems
                </h4>
                <p className="text-gray-700 dark:text-white/70 text-sm">
                  Lead nurturing, follow-up sequences, and appointment
                  scheduling
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  VIP Buyer Access
                </h4>
                <p className="text-gray-700 dark:text-white/70 text-sm">
                  Exclusive access to our premium buyer database
                </p>
              </div>
            </div>
          </div>

          {/* VIP Spot CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Limited Availability
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                👉 Secure Your VIP Investor Spot
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Only <strong>10 Projects Accepted Monthly</strong> — Join the
                elite investors who get exclusive access to our premium services
              </p>
              <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-100/50 dark:bg-white/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Success{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-white/70">
              Real results from real investors who chose our service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
                title: "Belgrade Downtown Complex",
                result: "Sold 45 units in 3 months",
                increase: "+18% above market price",
                testimonial:
                  "The professional marketing approach helped us sell faster and for higher prices than expected.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
                title: "Novi Sad Residential Tower",
                result: "100% sold in 6 months",
                increase: "+22% profit margin",
                testimonial:
                  "Zero upfront costs and professional service made this investment incredibly profitable.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
                title: "Niš Business District",
                result: "Sold 28 units in 4 months",
                increase: "+15% above asking price",
                testimonial:
                  "The comprehensive marketing package exceeded our expectations and delivered results quickly.",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-white shadow-lg dark:bg-white/5 dark:border dark:border-white/10"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {story.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="text-green-500 font-semibold">
                      {story.result}
                    </div>
                    <div className="text-blue-500 font-semibold">
                      {story.increase}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-white/70">
                    &ldquo;{story.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-600/20 dark:to-indigo-600/20">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center bg-white/80 dark:bg-white/5 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Standard Service
              </h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">2-4%</div>
              <p className="mb-6 text-gray-700 dark:text-white/70">
                Market standard commission on successful sales
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Professional website
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Media package
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Marketing campaigns
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Legal support
                  </span>
                </li>
              </ul>
            </div>

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
                Exclusive service for high-value properties
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Everything in Standard
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Priority buyer access
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Enhanced marketing
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-700 dark:text-white/80">
                    Dedicated account manager
                  </span>
                </li>
              </ul>
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

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="w-6 h-6 text-gray-900 dark:text-white" />
              <span className="font-semibold text-gray-900 dark:text-white">
                InvestorPro
              </span>
            </div>
            <div className="flex space-x-6 text-gray-700 dark:text-white/70">
              <a
                href="#"
                className="transition-colors hover:text-gray-800 dark:hover:text-white"
              >
                Privacy
              </a>
              <a
                href="#"
                className="transition-colors hover:text-gray-800 dark:hover:text-white"
              >
                Terms
              </a>
              <a
                href="#"
                className="transition-colors hover:text-gray-800 dark:hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
