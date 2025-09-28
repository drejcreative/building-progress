import {
  Building2,
  Camera,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import React from "react";

export default function CostSaving() {
  const services = [
    {
      leftItem: "Website Development",
      leftCost: "€6,000-12,000",
      leftIcon: Globe,
      leftDescription:
        "Professional custom website with SEO optimization + dedicated apartment pages",
      rightItem: "Website Development",
      rightIcon: Globe,
      rightDescription:
        "Custom SEO-optimized website with lead capture, analytics & dedicated apartment pages",
    },
    {
      leftItem: "Professional Photography",
      leftCost: "€800-1,800",
      leftIcon: Camera,
      leftDescription: "High-quality photos with professional staging",
      rightItem: "Professional Photography",
      rightIcon: Camera,
      rightDescription: "Professional photos with staging and lighting setup",
    },
    {
      leftItem: "Drone Video + Editing",
      leftCost: "€1,200-2,500",
      leftIcon: Video,
      leftDescription:
        "Aerial footage with cinematic editing + YouTube videos & paid commercials",
      rightItem: "Drone Video + Editing",
      rightIcon: Video,
      rightDescription:
        "Aerial footage with cinematic editing, YouTube videos & high-end paid commercials",
    },
    {
      leftItem: "360° Virtual Tour",
      leftCost: "€1,500-3,000",
      leftIcon: Building2,
      leftDescription: "Interactive virtual tours with floor plans",
      rightItem: "360° Virtual Tour",
      rightIcon: Building2,
      rightDescription:
        "Interactive virtual tours with floor plans and details",
    },
    {
      leftItem: "Marketing & Ads (6-12 months)",
      leftCost: "€7,000-12,000",
      leftIcon: TrendingUp,
      leftDescription: "Google, Facebook, Instagram campaigns",
      rightItem: "Marketing & Ads (6-12 months)",
      rightIcon: TrendingUp,
      rightDescription: "Google, Facebook, Instagram, and LinkedIn advertising",
    },
    {
      leftItem: "Legal Support",
      leftCost: "€2,000-4,000",
      leftIcon: Shield,
      leftDescription: "Contract management and compliance",
      rightItem: "Legal Support",
      rightIcon: Shield,
      rightDescription: "Full legal support from contracts to closing",
    },
    {
      leftItem: "Sales Staff (6 months)",
      leftCost: "€8,000-15,000",
      leftIcon: Users,
      leftDescription: "Professional sales team and management",
      rightItem: "Sales Staff (6 months)",
      rightIcon: Users,
      rightDescription: "Professional sales agents handling all inquiries",
    },
  ];

  return (
    <section
      id="savings"
      className="py-20 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Save{" "}
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              €20,000-35,000
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

        <div className="relative">
          {/* Comparison Arrow */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-gradient-to-r from-red-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              VS
            </div>
          </div>

          {/* Headers */}
          <div className="grid lg:grid-cols-2 gap-12 mb-6">
            <h3 className="text-2xl font-bold text-red-400">
              DIY Costs (Your Risk)
            </h3>
            <h3 className="text-2xl font-bold text-green-400">
              Our Service (Zero Risk)
            </h3>
          </div>

          {/* Service Items - Each row aligned */}
          <div className="space-y-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-stretch"
              >
                {/* Left Card */}
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/15 transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <service.leftIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {service.leftItem}
                      </span>
                    </div>
                    <span className="text-red-400 font-bold text-lg">
                      {service.leftCost}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-white/70 text-sm ml-8 flex-grow">
                    {service.leftDescription}
                  </p>
                </div>

                {/* Right Card */}
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/15 transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <service.rightIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {service.rightItem}
                      </span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-700 dark:text-white/70 text-sm ml-8 flex-grow">
                    {service.rightDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 bg-gradient-to-br from-red-500/20 via-red-400/15 to-red-600/25 border-2 border-red-500/40 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-700 dark:text-red-300 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  YOUR RISK
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                  €20,000-35,000
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
  );
}
