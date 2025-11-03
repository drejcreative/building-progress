"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code, TrendingUp, Users } from "lucide-react";

export default function Slide2() {
  const t = useTranslations("Presentation.slide2");

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Icons/Keywords */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-6 text-amber-400">
            <Code className="w-16 h-16" />
            <span className="text-2xl font-semibold">Tech</span>
          </div>
          <div className="flex items-center gap-6 text-amber-400">
            <TrendingUp className="w-16 h-16" />
            <span className="text-2xl font-semibold">Marketing</span>
          </div>
          <div className="flex items-center gap-6 text-amber-400">
            <Users className="w-16 h-16" />
            <span className="text-2xl font-semibold">Sales</span>
          </div>
        </motion.div>

        {/* Right Side - Copy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t("description")}
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <p className="text-lg text-gray-300">{t("team.engineers")}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <p className="text-lg text-gray-300">{t("team.marketing")}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">•</span>
              <p className="text-lg text-gray-300">{t("team.sales")}</p>
            </div>
          </div>
          <p className="text-xl text-amber-300 font-semibold pt-4 border-t border-amber-400/30">
            {t("conclusion")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

