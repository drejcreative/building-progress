"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Slide7() {
  const t = useTranslations("Presentation.slide7");

  const services = [
    { key: "standard" },
    { key: "premium" },
    { key: "enterprise" },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-300 font-semibold">
            {t("headline")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-emerald-400/20 p-6 flex flex-col"
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {t(`services.${service.key}.name`)}
                  </h3>
                  <span className="text-2xl font-bold text-emerald-400">
                    {t(`services.${service.key}.commission`)}
                  </span>
                </div>
                <p className="text-sm text-gray-300">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>

              {/* Ideal For */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                  Ideal For:
                </h4>
                <ul className="space-y-1">
                  {t.raw(`services.${service.key}.idealFor`).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                  Core Features:
                </h4>
                <ul className="space-y-1">
                  {t.raw(`services.${service.key}.coreFeatures`).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4 flex-1">
                <h4 className="text-sm font-semibold text-emerald-400 mb-2">
                  Benefits:
                </h4>
                <ul className="space-y-1">
                  {t.raw(`services.${service.key}.benefits`).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise Note */}
              {service.key === "enterprise" && (
                <div className="mt-4 pt-4 border-t border-emerald-400/20">
                  <p className="text-xs text-amber-300 text-center">
                    {t(`services.${service.key}.note`)}
                  </p>
                  <p className="text-xs text-emerald-400 text-center font-semibold mt-2">
                    {t(`services.${service.key}.cta`)}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
