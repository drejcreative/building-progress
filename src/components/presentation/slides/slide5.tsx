"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Slide5() {
  const t = useTranslations("Presentation.slide5");

  const systemFlow = [
    { key: "video", label: t("system.video") },
    { key: "crm", label: t("system.crm") },
    { key: "agents", label: t("system.agents") },
    { key: "analytics", label: t("system.analytics") },
    { key: "sales", label: t("system.sales") },
  ];

  const features = [
    { key: "website" },
    { key: "tours" },
    { key: "tracking" },
    { key: "campaigns" },
    { key: "legal" },
    { key: "media" },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950">
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
          <p className="text-xl md:text-2xl text-amber-300 font-semibold">
            {t("description")}
          </p>
        </motion.div>

        {/* System Flow Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-12 flex-wrap"
        >
          {systemFlow.map((item, index) => (
            <div key={item.key} className="flex items-center gap-2">
              <div className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-lg text-black font-bold text-sm md:text-base">
                {item.label}
              </div>
              {index < systemFlow.length - 1 && (
                <ArrowRight className="w-6 h-6 text-amber-400" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-amber-400/20"
            >
              <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-200">{t(`features.${feature.key}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

