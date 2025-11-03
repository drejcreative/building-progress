"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function Slide4a() {
  const t = useTranslations("Presentation.slide4");

  const benefits = [
    { key: "automated", icon: TrendingUp },
    { key: "premium", icon: CheckCircle2 },
    { key: "analytics", icon: TrendingUp },
    { key: "marketing", icon: CheckCircle2 },
    { key: "time", icon: TrendingUp },
    { key: "brand", icon: CheckCircle2 },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("benefitsTitle")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-emerald-900/20 rounded-lg border border-emerald-400/30 backdrop-blur-sm hover:border-emerald-400 transition-colors"
              >
                <Icon className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white font-medium">{t(`benefits.${benefit.key}`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

