import { CheckCircle, Globe, TrendingUp, Users, Video } from "lucide-react";
import Image from "next/image";
import React from "react";
import VipCta from "./vip-cta";

export default function Solution() {
  return (
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
            property marketing and sales. We also sell for you. Our
            comprehensive platform combines cutting-edge technology with proven
            sales strategies to maximize your returns while minimizing your
            workload.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Core Services */}
          <div className="space-y-8">
            {/* Visual Preview */}
            <div className="relative rounded-3xl overflow-hidden mb-8">
              <Image
                width={1000}
                height={1000}
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
                    Professional Online Platform + Dedicated Apartment Pages
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
                      SEO-optimized, mobile-responsive website with lead capture
                      forms, analytics tracking & dedicated apartment pages
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
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Dedicated Apartment Pages
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      Individual pages for each apartment with detailed
                      information and virtual tours
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
                    Cinematic Visual Content + YouTube Videos & Paid Commercials
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
                      Aerial footage showcasing location, views, building
                      exteriors, YouTube videos & high-end paid commercials
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
                      Professional video tours with voice-over highlighting key
                      features
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      YouTube & Paid Commercials
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      Professional YouTube videos and high-end paid advertising
                      commercials
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
              <Image
                width={1000}
                height={1000}
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
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Content Marketing
                    </h4>
                    <p className="text-gray-700 dark:text-white/70 text-sm">
                      Blog posts, articles, and valuable content to attract and
                      engage potential buyers
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
                      Professional sales agents handling all buyer inquiries and
                      negotiations
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

        {/* VIP Spot CTA Section */}
        <VipCta />
      </div>
    </section>
  );
}
