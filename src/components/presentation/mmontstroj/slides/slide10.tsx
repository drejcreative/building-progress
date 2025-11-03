"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, CheckCircle2, TrendingUp, Shield, Clock } from "lucide-react";

export default function Slide10() {
  const closingArguments = [
    {
      icon: Shield,
      title: "Bez Rizika",
      description: "Sve finansijamo mi. Plaćate samo kada prodamo.",
      color: "emerald",
    },
    {
      icon: TrendingUp,
      title: "Maksimalan Povrat",
      description: "Uštedite €20,000-35,000 po zgradi. Veća prodaja = veći profit.",
      color: "amber",
    },
    {
      icon: Clock,
      title: "Brzo Pokretanje",
      description: "Počinjemo odmah. Prvi rezultati za 30-60 dana.",
      color: "blue",
    },
  ];

  const nextSteps = [
    "Personalizovani plan za vašu zgradu",
    "Konkretni ciljevi i timeline",
    "Kompletan digitalni ekosistem od prvog dana",
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Spremni da Krenemo Zajedno?
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-300 font-semibold leading-relaxed max-w-4xl mx-auto mb-8">
            Vaša zgrada zaslužuje isti nivo prezentacije kao Waterfront i Delta — bez da rizikujete €20,000+ unapred.
          </p>
        </motion.div>

        {/* Closing Arguments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          {closingArguments.map((arg, index) => {
            const Icon = arg.icon;
            return (
              <motion.div
                key={arg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg border-2 ${
                  arg.color === "emerald"
                    ? "border-emerald-400/30"
                    : arg.color === "amber"
                    ? "border-amber-400/30"
                    : "border-blue-400/30"
                } p-6 text-center`}
              >
                <Icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    arg.color === "emerald"
                      ? "text-emerald-400"
                      : arg.color === "amber"
                      ? "text-amber-400"
                      : "text-blue-400"
                  }`}
                />
                <h3 className="text-xl font-bold text-white mb-3">{arg.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">{arg.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-emerald-900/20 rounded-lg border border-emerald-400/30 p-8 max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Kako To Radi?
          </h3>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center space-y-6"
        >
          <p className="text-xl md:text-2xl text-white font-semibold mb-6">
            Budimo u kontaktu — pošaljite poruku ili pozovite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+381645773034"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              +381 64 577 3034
            </a>
            <a
              href="mailto:info@proinvest.com"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              info@proinvest.com
            </a>
            <a
              href="https://proinvest.rs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-400 to-green-400 text-black font-bold text-xl rounded-lg hover:from-emerald-300 hover:to-green-300 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
            >
              <Globe className="w-6 h-6" />
              Posetite naš websajt
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
