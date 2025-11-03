"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide1() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Background: Black/Gold Gradient + Architectural Photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-amber-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-amber-950/60 to-black/80" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://mmontstroj.com/wp-content/uploads/2024/03/1-301-min-scaled-1.jpg"
            alt="Architectural background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center flex flex-col items-center">
        {/* MMontStroj Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative w-64 h-20 md:w-80 md:h-28 flex items-center justify-center">
            <Image
              src="https://mmontstroj.com/wp-content/uploads/2019/11/horizont-300x100.png"
              alt="MMontStroj Logo"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Želimo da vam ponudimo
            </span>
            <br />
            <span className="text-white text-3xl md:text-5xl font-light">
              isti nivo marketinga kao Waterfront i Delta.
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-amber-100 font-light max-w-4xl mx-auto leading-relaxed"
          >
            Pratimo MMontStroj već neko vreme. Kvalitet gradnje, tempo, i način na koji završavate projekte — stvarno stoji iza imena.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-amber-200 font-light max-w-4xl mx-auto leading-relaxed mt-4"
          >
            Vaš projekat zaslužuje isti nivo digitalne prezentacije kao najveći beogradski projekti — ali sa više autentičnosti i lokalnog duha.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

