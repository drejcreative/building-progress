"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Slide9() {
  const t = useTranslations("Presentation.slide9");

  const points = [
    { key: "tech" },
    { key: "local" },
    { key: "enterprise" },
    { key: "combined" },
    { key: "results" },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950 via-slate-900 to-amber-950">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-3xl md:text-4xl text-amber-400 font-bold">
            {t("headline")}
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={point.key}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-amber-900/20 rounded-lg border border-amber-400/20 backdrop-blur-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <p className="text-xl text-white leading-relaxed">
                {t(`points.${point.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

