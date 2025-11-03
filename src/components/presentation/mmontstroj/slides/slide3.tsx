"use client";

import { motion } from "framer-motion";
import { Code, Users, TrendingUp, Building2 } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function Slide3() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ko smo mi
          </h2>
          <p className="text-2xl md:text-3xl text-blue-300 font-semibold mb-8">
            Agencija za nekretnine, proistekla iz dugogodišnjeg internacionalnog
            IT iskustva
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 bg-slate-800/50 rounded-lg border border-blue-400/20 p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              ProInvest + Livion
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Naš core posao su digitalne platforme, web aplikacije, CRM sistemi
              i infrastruktura — sa internacionalnim iskustvom u pozadini.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Imamo i kreativni i prodajni sektor koji radi video produkciju,
              marketing kampanje i agenturu kroz Livion.
            </p>
            <div className="flex items-center gap-3 pt-4 mb-4">
              <Code className="w-6 h-6 text-blue-400" />
              <Users className="w-6 h-6 text-blue-400" />
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-blue-400/20">
              <a
                href="https://proinvest.rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                <span>proinvest.rs</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://livion.rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                <span>livion.rs</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Who They Are */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 bg-slate-800/50 rounded-lg border border-amber-400/20 p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">MMontStroj</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Preduzeće specijalizovano za izgradnju stambenih i nestambenih
              objekata po evropskim standardima.
            </p>
            <div className="space-y-2 pt-4">
              <p className="text-sm text-amber-300 font-semibold">Projekti:</p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Aurora</li>
                <li>• Ramonda</li>
                <li>• Arija</li>
                <li>• Nota</li>
                <li>• Harizma</li>
                <li>• Idila</li>
              </ul>
            </div>
            <a
              href="https://mmontstroj.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm mt-4"
            >
              <span>mmontstroj.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl text-amber-300 font-semibold leading-relaxed max-w-4xl mx-auto">
            &quot;Mi nismo samo agencija koja prodaje reklame — u pozadini smo
            IT kompanija sa internacionalnim iskustvom, koja gradi digitalnu
            infrastrukturu i aktivno prodaje projekte.&quot;
          </p>
        </motion.div>
      </div>
    </div>
  );
}
