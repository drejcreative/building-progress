"use client";

import { motion } from "framer-motion";
import { MessageSquare, HelpCircle } from "lucide-react";

export default function Slide4() {
  const questions = [
    "Kako trenutno vodite prodaju? Imate li tim agenata ili to ide direktno sa vama?",
    "Koliko obično traje period od objave projekta do rasprodaje?",
    "Da li imate podatke – koliko ljudi dnevno pogleda vaš sajt ili oglase?",
    "Šta vam je sledeći projekat – veća zgrada, nova lokacija?",
    "Da li imate viziju da MMontStroj postane prepoznat brend, kao recimo Delta District ili BW?",
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-900 to-cyan-950 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Istraživanje — Pitanja
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-cyan-300 font-medium max-w-4xl mx-auto">
            Želimo da razumemo vašu trenutnu situaciju i ambicije
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="flex items-start gap-4 p-6 bg-cyan-900/20 rounded-lg border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400 transition-colors"
            >
              <MessageSquare className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                &quot;{question}&quot;
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-lg md:text-xl text-cyan-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Kod većine jakih izvođača vidimo istu situaciju — odlična gradnja,
            ali digitalna prezentacija ne prati nivo koji zaslužuje projekat.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
