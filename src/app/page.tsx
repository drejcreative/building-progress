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
        <nav className="relative z-10 flex items-center justify-between p-6 lg:p-8">
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
              <ThemeToggle />
              <button className="px-6 py-2 rounded-full bg-gray-900/10 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-gray-900/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all">
                Get Started
              </button>
            </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 pb-32">
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
              <p className="text-xl lg:text-2xl mb-8 animate-fade-in-up animation-delay-200 text-gray-700 dark:text-white/80">
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Save{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                €8,000-15,000
              </span>{" "}
              Per Building
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-white/70">
              Traditional DIY marketing costs vs. our zero-upfront professional
              service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* DIY Costs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                DIY Costs (Your Risk)
              </h3>
              {[
                {
                  item: "Website Development",
                  cost: "€2,500-5,000",
                  icon: Globe,
                },
                {
                  item: "Professional Photography",
                  cost: "€300-500",
                  icon: Camera,
                },
                {
                  item: "Drone Video + Editing",
                  cost: "€400-800",
                  icon: Video,
                },
                {
                  item: "360° Virtual Tour",
                  cost: "€600-1,000",
                  icon: Building2,
                },
                {
                  item: "Marketing & Ads (3-6 months)",
                  cost: "€3,000-6,000",
                  icon: TrendingUp,
                },
                { item: "Legal Support", cost: "€700-1,500", icon: Shield },
                {
                  item: "Sales Staff",
                  cost: "€1,000-2,000/month",
                  icon: Users,
                },
              ].map((cost, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <cost.icon className="w-5 h-5 text-red-400" />
                    <span className="text-gray-800 dark:text-white">
                      {cost.item}
                    </span>
                  </div>
                  <span className="text-red-400 font-semibold">
                    {cost.cost}
                  </span>
                </div>
              ))}
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">
                    €8,000-15,000
                  </div>
                  <div className="text-gray-600 dark:text-white/70">
                    Total Upfront Investment
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
                { item: "Professional Website", included: true, icon: Globe },
                { item: "Cinematic Photography", included: true, icon: Camera },
                { item: "Drone Video Production", included: true, icon: Video },
                { item: "360° Virtual Tours", included: true, icon: Building2 },
                {
                  item: "Marketing Campaigns",
                  included: true,
                  icon: TrendingUp,
                },
                { item: "Legal Concierge", included: true, icon: Shield },
                { item: "Dedicated Sales Team", included: true, icon: Users },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <service.icon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-800 dark:text-white">
                      {service.item}
                    </span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              ))}
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">€0</div>
                  <div className="text-gray-600 dark:text-white/70">
                    Upfront Investment
                  </div>
                  <div className="text-sm text-green-400 mt-2">
                    Pay only when properties sell
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Complete{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Investor Solution
              </span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-white/70">
              Everything you need to sell properties faster and for higher
              prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Professional Website",
                description:
                  "Custom building website with SEO optimization and lead capture",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
              },
              {
                icon: Video,
                title: "Cinematic Media Package",
                description:
                  "Professional photos, drone videos, 360° tours, and narrated walkthroughs",
                image:
                  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
              },
              {
                icon: TrendingUp,
                title: "Marketing Campaigns",
                description:
                  "Google, Facebook, Instagram, and LinkedIn advertising campaigns",
                image:
                  "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=300&fit=crop",
              },
              {
                icon: Shield,
                title: "Legal Concierge",
                description:
                  "Full legal support from contract creation to closing",
                image:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
              },
              {
                icon: Users,
                title: "Dedicated Sales Team",
                description:
                  "Professional sales staff handling all buyer inquiries",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              },
              {
                icon: Zap,
                title: "Progress Tracking",
                description:
                  "Real-time construction updates and investor reporting",
                image:
                  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all transform group bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
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
            <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-white/70">
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
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
                  <p className="text-sm text-gray-600 dark:text-white/70">
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
            <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-white/70">
              We only succeed when you succeed - no hidden fees or upfront costs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center bg-white/80 dark:bg-white/5 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Standard Service
              </h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">2-4%</div>
              <p className="mb-6 text-gray-600 dark:text-white/70">
                Market standard commission on successful sales
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
                    Professional website
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
                    Media package
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
                    Marketing campaigns
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
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
              <p className="mb-6 text-gray-600 dark:text-white/70">
                Exclusive service for high-value properties
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
                    Everything in Standard
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
                    Priority buyer access
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
                    Enhanced marketing
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-600 dark:text-white/80">
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
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-white/80">
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
              <Building2 className="w-6 h-6 text-gray-800 dark:text-white" />
              <span className="font-semibold text-gray-800 dark:text-white">
                InvestorPro
              </span>
            </div>
            <div className="flex space-x-6 text-gray-600 dark:text-white/70">
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
