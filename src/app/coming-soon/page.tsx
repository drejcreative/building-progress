"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Building2,
  TrendingUp,
  Users,
  Star,
  MapPin,
  CheckCircle,
  Video,
  Globe,
  Shield,
  Zap,
  Phone,
  Mail,
  ArrowRight,
  Bell,
  Sparkles,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import { sendEmail } from "@/utils/send-email";

export default function ComingSoon() {
  const t = useTranslations("ComingSoon");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      sendEmail(email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Building2 className="absolute top-20 left-10 text-white/10 w-8 h-8 animate-float" />
        <TrendingUp className="absolute top-40 right-20 text-white/10 w-6 h-6 animate-float-delayed" />
        <Users className="absolute bottom-40 left-20 text-white/10 w-7 h-7 animate-float" />
        <Star className="absolute bottom-20 right-10 text-white/10 w-5 h-5 animate-float-delayed" />
        <Globe className="absolute top-1/2 left-1/2 text-white/10 w-6 h-6 animate-float" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Something Amazing is Coming
          </div>

          <div className="mb-8">
            <Image
              src="/proinvest-logo.svg"
              alt="ProInvest Logo"
              className="mx-auto mb-6"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              ProInvest
            </span>
          </h1>

          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-white/80 mb-8">
            Revolutionizing real estate investment with zero upfront costs and
            maximum returns. The future of property investment is almost here.
          </p>

          <div className="flex items-center justify-center space-x-4 text-white/60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Zero Risk</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Maximum Returns</span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Rocket className="w-5 h-5" />
              <span>Innovation</span>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-white/70 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Subscription */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <Bell className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Be the First to Know
              </h3>
              <p className="text-white/70">
                Get exclusive early access and special launch offers
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Notify Me</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">
                  You&apos;re on the list!
                </h4>
                <p className="text-white/70">
                  We&apos;ll notify you as soon as we launch. Stay tuned!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            What&apos;s Coming
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Zero Upfront Costs",
                description:
                  "Start selling your properties without any initial investment. We only succeed when you succeed.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: TrendingUp,
                title: "Maximum Returns",
                description:
                  "Our proven strategies help you achieve higher sales prices and faster turnover times.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Video,
                title: "Cinematic Marketing",
                description:
                  "Professional photography, drone footage, and 360° virtual tours to showcase your properties.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description:
                  "Expert sales team handling all inquiries and negotiations on your behalf.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Globe,
                title: "Multi-Channel Marketing",
                description:
                  "Comprehensive campaigns across Google, Facebook, Instagram, and more.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Shield,
                title: "Legal Support",
                description:
                  "Complete legal concierge service ensuring smooth transactions and compliance.",
                color: "from-teal-500 to-blue-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics Preview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Proven Results
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { value: "100%", label: "Risk-Free Trial" },
                { value: "45+", label: "Units Sold" },
                { value: "18%", label: "Above Market Price" },
                { value: "3", label: "Months Average" },
              ].map((metric, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white/70 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/70">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>hello@proinvest.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+381 11 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Belgrade, Serbia</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
