"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Slide1() {
  const t = useTranslations("Presentation.slide1");

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Background: Black/Gold Gradient + Architectural Photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-amber-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-amber-950/60 to-black/80" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/modern-complex.jpg"
            alt="Architectural background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              {t("headline")}
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-amber-100 font-light"
          >
            {t("subheadline")}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

