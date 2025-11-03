"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Smartphone,
  Camera,
  TrendingUp,
  BarChart3,
  Users,
  FileText,
} from "lucide-react";

export default function Slide8() {
  const t = useTranslations("Presentation.slide8");

  const deliverables = [
    { key: "platform", icon: Smartphone },
    { key: "tours", icon: Camera },
    { key: "ads", icon: TrendingUp },
    { key: "reports", icon: BarChart3 },
    { key: "agents", icon: Users },
    { key: "legal", icon: FileText },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-purple-950">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("title")}
          </h2>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-purple-900/20 rounded-lg border border-purple-400/20 backdrop-blur-sm text-center"
              >
                <Icon className="w-12 h-12 text-purple-400 mb-4" />
                <p className="text-lg text-white font-medium">
                  {t(`deliverables.${item.key}`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

