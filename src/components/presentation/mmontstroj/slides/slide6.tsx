"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

export default function Slide6() {
  const services = [
    {
      service: "Razvoj Websajta",
      diyCost: "€6,000-12,000",
      diyDescription:
        "Profesionalni websajt sa SEO optimizacijom + posvećene stranice za stanove",
      ourDescription:
        "SEO optimizovan websajt sa lead capture, analitikom i posvećenim stranicama za stanove",
    },
    {
      service: "Profesionalna Fotografija",
      diyCost: "€800-1,800",
      diyDescription:
        "Visokokvalitetne fotografije sa profesionalnim stagingom",
      ourDescription: "Profesionalne fotografije sa stagingom i osvetljenjem",
    },
    {
      service: "Dron Video + Montaža",
      diyCost: "€1,200-2,500",
      diyDescription:
        "Snimci iz vazduha sa kinematografskim montažama + YouTube videi i plaćeni spotovi",
      ourDescription:
        "Snimci iz vazduha sa kinematografskim montažama, YouTube videi i premium plaćeni spotovi",
    },
    {
      service: "360° Virtuelna Tura",
      diyCost: "€1,500-3,000",
      diyDescription: "Interaktivne virtuelne ture sa tlocrtima",
      ourDescription: "Interaktivne virtuelne ture sa tlocrtima i detaljima",
    },
    {
      service: "Marketing i Oglasi",
      diyCost: "€7,000-12,000",
      diyDescription: "Google, Facebook, Instagram kampanje",
      ourDescription: "Google, Facebook, Instagram i LinkedIn oglašavanje",
    },
    {
      service: "Pravna Podrška",
      diyCost: "€2,000-4,000",
      diyDescription: "Upravljanje ugovorima i usklađenost",
      ourDescription: "Kompletna pravna podrška od ugovora do završetka",
    },
    {
      service: "Prodajni Tim",
      diyCost: "€8,000-15,000",
      diyDescription: "Profesionalni prodajni tim i menadžment",
      ourDescription: "Profesionalni prodajni agenti koji obrađuju sve upite",
    },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-slate-900 to-emerald-950 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Uštedite €20,000-35,000 po zgradi
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-4xl mx-auto mb-2">
            Tradicionalni DIY marketing troškovi vs. naš profesionalni servis
            bez prethodnih troškova
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {/* DIY Costs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-red-900/20 rounded-lg border-2 border-red-400/30 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <X className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">
                DIY Troškovi (Vaš Rizik)
              </h3>
            </div>
            <div className="space-y-4">
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="border-b border-red-400/20 pb-4 last:border-0"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base font-semibold text-white">
                      {item.service}
                    </h4>
                    <span className="text-lg font-bold text-red-400 whitespace-nowrap">
                      {item.diyCost}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{item.diyDescription}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-6 pt-6 border-t-2 border-red-400/30"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-white">VAŠ RIZIK</span>
                <span className="text-2xl font-bold text-red-400">
                  €20,000-35,000
                </span>
              </div>
              <p className="text-sm text-gray-300">
                Ukupna početna investicija
              </p>
              <p className="text-xs text-red-300 mt-2">
                Plus mesečni troškovi • Bez garancije uspeha
              </p>
            </motion.div>
          </motion.div>

          {/* Our Service */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-emerald-900/20 rounded-lg border-2 border-emerald-400/30 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">
                Naša Usluga (Bez Rizika)
              </h3>
            </div>
            <div className="space-y-4">
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="border-b border-emerald-400/20 pb-4 last:border-0"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base font-semibold text-white">
                      {item.service}
                    </h4>
                    <span className="text-lg font-bold text-emerald-400 whitespace-nowrap">
                      Uključeno
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{item.ourDescription}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="mt-6 pt-6 border-t-2 border-emerald-400/30"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-white">BEZ RIZIKA</span>
                <span className="text-2xl font-bold text-emerald-400">€0</span>
              </div>
              <p className="text-sm text-gray-300">Početna investicija</p>
              <p className="text-xs text-emerald-300 mt-2">
                Plaćate samo kada se nekretnine prodaju • Bez rizika, maksimalan
                povrat
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
