"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Globe, Phone } from "lucide-react";

export default function Slide12() {
  const t = useTranslations("Presentation.slide12");

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950">
      <div className="max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-3xl text-emerald-300 leading-relaxed">
              {t("description")}
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {t("subdescription")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 pt-8"
          >
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${t("phone")}`}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {t("phone")}
              </a>
              <a
                href={`mailto:${t("email")}`}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                {t("email")}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://proinvest.rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-400 text-black font-bold text-lg rounded-lg hover:from-emerald-300 hover:to-green-300 transition-all transform hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                {t("website")}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

