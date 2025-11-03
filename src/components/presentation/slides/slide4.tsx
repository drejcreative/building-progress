"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AlertCircle, XCircle } from "lucide-react";

export default function Slide4() {
  const t = useTranslations("Presentation.slide4");

  const problems = [
    { key: "agents", icon: AlertCircle },
    { key: "websites", icon: XCircle },
    { key: "analytics", icon: AlertCircle },
    { key: "brand", icon: XCircle },
    { key: "time", icon: AlertCircle },
    { key: "media", icon: XCircle },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-slate-900 to-red-950">
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
          <p className="text-3xl md:text-4xl text-red-300 font-semibold">
            {t("headline")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-red-900/20 rounded-lg border border-red-800/30 backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-200">{t(`problems.${problem.key}`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

