"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Slide10() {
  const t = useTranslations("Presentation.slide10");

  const steps = [
    { key: "step1", number: "1" },
    { key: "step2", number: "2" },
    { key: "step3", number: "3" },
    { key: "step4", number: "4" },
    { key: "step5", number: "5" },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900">
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

        <div className="space-y-4 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 bg-indigo-900/20 rounded-lg border border-indigo-400/20 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 flex items-center justify-center text-black font-bold text-lg">
                {step.number}
              </div>
              <div className="flex-1 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl text-white font-medium">
                    {t(`steps.${step.key}.action`)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg text-indigo-300 font-semibold">
                    {t(`steps.${step.key}.duration`)}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-indigo-400 flex-shrink-0 ml-2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

