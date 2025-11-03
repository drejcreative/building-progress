"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";

export default function Slide3() {
  const t = useTranslations("Presentation.slide3");

  const examples = [
    {
      name: "Belgrade Waterfront",
      url: "https://www.belgradewaterfront.com/en/",
      image: "/images/modern-complex.jpg",
    },
    {
      name: "Delta District",
      url: "https://deltadistrict.rs/",
      image: "/images/aerial-view.jpg",
    },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950/50 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/aerial-view.jpg"
            alt="Local region"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
            {t("title")}
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl text-white leading-relaxed"
            >
              {t("mission")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-amber-200 leading-relaxed pt-6 border-t border-amber-400/30"
            >
              {t("vision")}
            </motion.p>
          </div>

          {/* Website Examples */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12"
          >
            {examples.map((example, index) => (
              <motion.a
                key={example.name}
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                className="group relative overflow-hidden rounded-lg border-2 border-amber-400/30 bg-slate-800/50 backdrop-blur-sm hover:border-amber-400 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={example.image}
                    alt={example.name}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                    <div className="flex items-center gap-2 text-white">
                      <Globe className="w-5 h-5" />
                      <span className="text-xl font-bold">{example.name}</span>
                      <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-amber-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view presentation
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

