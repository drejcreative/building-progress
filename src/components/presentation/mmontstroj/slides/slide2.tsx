"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, TrendingUp, Award } from "lucide-react";

export default function Slide2() {
  const achievements = [
    "Najlepše zgrade u Rumi (subjektivno)",
    "Kvalitetna gradnja po iskustvima poznanika",
    "Završavate projekte pre roka",
    "Harmonija luksuza i komfora",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zašto nas impresionira MMontStroj
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-amber-900/20 rounded-lg border border-amber-400/30 backdrop-blur-sm"
            >
              <CheckCircle2 className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-white font-medium">{achievement}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-2xl md:text-3xl text-amber-300 font-semibold leading-relaxed max-w-4xl mx-auto mb-4">
            "Ono što vi gradite ima kvalitet Beograda, ali dušu Rume i Novog Sada."
          </p>
          <p className="text-lg md:text-xl text-amber-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Elegantnost bez kompromisa — prostranstvo i svetlost za vaš idealan dom.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

