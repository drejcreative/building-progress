"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Eye, Video } from "lucide-react";
import { motion } from "framer-motion";

export default function UseCasesHero() {
  const t = useTranslations("UseCases");

  return (
    <motion.section
      className="relative h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
          alt="Belgrade Luxury Residences"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-lg"
          animate={{
            y: [20, -20, 20],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-500/20 rounded-full blur-2xl"
          animate={{
            y: [-15, 15, -15],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-500/20 rounded-full blur-lg"
          animate={{
            y: [10, -10, 10],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            y: [-25, 25, -25],
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="w-3 h-3 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>{t("hero.constructionStatus")}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {t("hero.title")}
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Eye className="w-6 h-6" />
                </motion.div>
                <span>{t("hero.viewUnits")}</span>
              </motion.button>
              <motion.button
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Video className="w-6 h-6" />
                </motion.div>
                <span>{t("hero.virtualTour")}</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {[
                { color: "bg-green-400", text: "Premium Location" },
                { color: "bg-blue-400", text: "Modern Amenities" },
                { color: "bg-purple-400", text: "Investment Ready" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-2 h-2 ${item.color} rounded-full`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Stats */}
      <motion.div
        className="absolute bottom-8 left-8 right-8 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "24",
                color: "text-gray-900",
                label: t("stats.totalUnits"),
              },
              { value: "18", color: "text-green-600", label: t("stats.sold") },
              {
                value: "6",
                color: "text-blue-600",
                label: t("stats.available"),
              },
              {
                value: "€2.1M",
                color: "text-purple-600",
                label: t("stats.totalValue"),
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className={`text-3xl font-black ${stat.color}`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-white/60 cursor-pointer"
          whileHover={{ scale: 1.1, color: "white" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
