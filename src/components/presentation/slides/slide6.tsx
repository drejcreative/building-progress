"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, Globe, Eye, List, TrendingUp, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Slide6() {
  const t = useTranslations("Presentation.slide6");

  const showcases = [
    { key: "listings", icon: List, image: "/images/modern-complex.jpg", url: "https://livion.rs/" },
    { key: "dashboard", icon: LayoutDashboard, image: "/images/business.jpg" },
    { key: "analytics", icon: BarChart3, image: "/images/marketing.jpg" },
    { key: "website", icon: Globe, image: "/images/aerial-view.jpg", url: "https://proinvest.rs/use-cases" },
    { key: "tour", icon: Eye, image: "/images/construction.jpg" },
    { key: "progress", icon: TrendingUp, image: "/images/construction.jpg", url: "https://proinvest.rs/use-cases#progress" },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-amber-300">
            {t("description")}
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {showcases.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-lg border ${
                  item.url
                    ? "border-amber-400/30 bg-slate-800/50 backdrop-blur-sm hover:border-amber-400 hover:scale-105 cursor-pointer transition-all"
                    : "border-amber-400/20 bg-slate-800/50 backdrop-blur-sm"
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={t(`showcases.${item.key}`)}
                    fill
                    className={`object-cover transition-opacity ${
                      item.url ? "opacity-50 group-hover:opacity-80" : "opacity-50 group-hover:opacity-70"
                    }`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                    <Icon className="w-10 h-10 text-amber-400" />
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-center text-white font-medium">
                        {t(`showcases.${item.key}`)}
                      </p>
                      {item.url && (
                        <ExternalLink className="w-4 h-4 text-amber-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );

            if (item.url) {
              return (
                <a
                  key={item.key}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={item.key}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

