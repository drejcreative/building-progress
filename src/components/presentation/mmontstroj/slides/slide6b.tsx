"use client";

import { motion } from "framer-motion";
import { Euro, Clock, Shield, CheckCircle2 } from "lucide-react";

export default function Slide6b() {
  const roiPoints = [
    { key: "zeroUpfront", icon: Euro },
    { key: "fasterSales", icon: Clock },
    { key: "saveMoney", icon: Shield },
    { key: "timeSaved", icon: CheckCircle2 },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-slate-900 to-green-950 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zašto ROI Radi
          </h2>
          <p className="text-xl md:text-2xl text-green-300 font-semibold">
            Četiri ključna benefita naše usluge
          </p>
        </motion.div>

        {/* ROI Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12"
        >
          {roiPoints.map((point, index) => {
            const Icon = point.icon;
            const points = [
              {
                title: "Nula Unapred",
                value: "€0 Investicija",
                description: "Bez unapred plaćanja — mi investiramo u sve",
              },
              {
                title: "Brža Prodaja",
                value: "50% Brže",
                description: "Profesionalni marketing proda brže",
              },
              {
                title: "Ušteda Novca",
                value: "€20K-35K Ušteđeno",
                description: "Ušteda vs DIY marketing troškovi",
              },
              {
                title: "Ušteđeno Vreme",
                value: "6-12 Meseci",
                description: "Fokus na gradnju, mi radimo prodaju",
              },
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className="flex flex-col items-center text-center p-8 bg-green-900/10 rounded-lg border border-green-400/20 backdrop-blur-sm hover:border-green-400 transition-colors"
              >
                <Icon className="w-16 h-16 text-green-400 mb-6" />
                <h4 className="text-2xl font-bold text-white mb-3">
                  {points[index].title}
                </h4>
                <p className="text-green-300 font-semibold text-xl mb-3">
                  {points[index].value}
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  {points[index].description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-amber-300 font-semibold text-xl md:text-2xl max-w-4xl mx-auto"
        >
          &quot;Nula rizika, maksimalan povrat — mi investiramo u vaš uspeh, vi
          plaćate samo kada se proda.&quot;
        </motion.p>
      </div>
    </div>
  );
}

