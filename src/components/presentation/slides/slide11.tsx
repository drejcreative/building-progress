"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide11() {
  const t = useTranslations("Presentation.slide11");

  const mockups = [
    { key: "landing", image: "/images/modern-complex.jpg" },
    { key: "tour", image: "/images/aerial-view.jpg" },
    { key: "app", image: "/images/business.jpg" },
    { key: "drone", image: "/images/construction.jpg" },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950/50 to-slate-900">
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
          <p className="text-2xl text-amber-300 font-semibold">
            {t("tagline")}
          </p>
        </motion.div>

        {/* Visual Mockups Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mockups.map((mockup, index) => (
            <motion.div
              key={mockup.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group overflow-hidden rounded-lg border-2 border-amber-400/30 bg-slate-800/50 backdrop-blur-sm"
            >
              <div className="relative h-64">
                <Image
                  src={mockup.image}
                  alt={t(`mockups.${mockup.key}`)}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-sm">
                    {t(`mockups.${mockup.key}`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

