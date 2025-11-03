"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export default function Slide6() {
  const savings = [
    { key: "website", icon: TrendingUp },
    { key: "photography", icon: TrendingUp },
    { key: "video", icon: TrendingUp },
    { key: "marketing", icon: TrendingUp },
    { key: "sales", icon: TrendingUp },
    { key: "legal", icon: TrendingUp },
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
            ROI i Profitabilnost
          </h2>
          <p className="text-2xl md:text-3xl text-green-300 font-semibold">
            Uštedite €20,000-35,000 po zgradi vs DIY marketing
          </p>
        </motion.div>

        {/* Main Savings Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* DIY Costs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-red-900/20 rounded-lg border border-red-400/30 p-8 backdrop-blur-sm"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-400 mb-2">
                DIY Marketing
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-white mb-4">
                €20,000-35,000
              </p>
              <p className="text-sm text-red-300">VAŠ RIZIK</p>
            </div>
            <div className="space-y-4">
              {savings.map((item, index) => {
                const Icon = item.icon;
                const labels = [
                  "Razvoj Websajta",
                  "Profesionalna Fotografija",
                  "Dron Video + Montaža",
                  "Marketing i Oglasi (6-12 meseci)",
                  "Prodajni Tim (6 meseci)",
                  "Pravna Podrška",
                ];
                const costs = [
                  "€6,000-12,000",
                  "€800-1,800",
                  "€1,200-2,500",
                  "€7,000-12,000",
                  "€8,000-15,000",
                  "€2,000-4,000",
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-red-900/10 rounded border border-red-400/20"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-red-400" />
                      <span className="text-gray-200 text-sm">{labels[index]}</span>
                    </div>
                    <span className="text-red-300 font-semibold text-sm">
                      {costs[index]}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-red-400/30">
              <p className="text-sm text-red-300 text-center">
                Plus mesečni troškovi, bez garancije uspeha
              </p>
            </div>
          </motion.div>

          {/* Our Service */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-green-900/20 rounded-lg border border-green-400/30 p-8 backdrop-blur-sm"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                Naša Usluga
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-white mb-4">
                €0
              </p>
              <p className="text-sm text-green-300">NULA RIZIKA</p>
            </div>
            <div className="space-y-4">
              {savings.map((item, index) => {
                const Icon = item.icon;
                const labels = [
                  "Razvoj Websajta",
                  "Profesionalna Fotografija",
                  "Dron Video + Montaža",
                  "Marketing i Oglasi (6-12 meseci)",
                  "Prodajni Tim (6 meseci)",
                  "Pravna Podrška",
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-green-900/10 rounded border border-green-400/20"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200 text-sm">{labels[index]}</span>
                    </div>
                    <span className="text-green-300 font-semibold text-sm">
                      Uključeno
                    </span>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6 pt-6 border-t border-green-400/30">
              <p className="text-sm text-green-300 text-center font-semibold">
                Plaćate samo kada se proda — provizija na osnovu prodaje
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
