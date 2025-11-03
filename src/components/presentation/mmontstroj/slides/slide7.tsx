"use client";

import { motion } from "framer-motion";
import { Globe, Video, BarChart3, Users, FileText } from "lucide-react";

export default function Slide7() {
  const services = [
    { key: "branding", label: "Brending i identitet", icon: Globe },
    { key: "website", label: "Sajt sa svim stanovima i cenama", icon: Globe },
    { key: "video", label: "Dron i lifestyle video", icon: Video },
    { key: "ads", label: "Reklamne kampanje (Google, Meta)", icon: BarChart3 },
    { key: "tracking", label: "Praćenje lead-a u realnom vremenu", icon: BarChart3 },
    { key: "agents", label: "Naši agenti zaključuju prodaje", icon: Users },
    { key: "legal", label: "Pravna podrška", icon: FileText },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kompletan Digitalni Ekosistem
          </h2>
          <p className="text-xl md:text-2xl text-indigo-300 font-semibold">
            Sve što vam treba za prodaju na jednom mestu
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-indigo-900/20 rounded-lg border border-indigo-400/30 backdrop-blur-sm hover:border-indigo-400 transition-colors"
              >
                <Icon className="w-8 h-8 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white font-medium">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center text-amber-300 font-semibold text-xl md:text-2xl max-w-4xl mx-auto"
        >
          &quot;Sve ostaje pod jednom kapom — brzo, profesionalno i transparentno.&quot;
        </motion.p>
      </div>
    </div>
  );
}
