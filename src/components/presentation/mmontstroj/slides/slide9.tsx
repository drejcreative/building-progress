"use client";

import { motion } from "framer-motion";

export default function Slide9() {
  const processSteps = [
    {
      step: "1",
      title: "Razgovor i Analiza",
      description: "Upoznajemo se sa vašim projektom, ciljevima i potrebama. Analiziramo tržište i konkurenciju.",
    },
    {
      step: "2",
      title: "Kreiranje Digitalnog Paketa",
      description: "Gradimo profesionalni website, pravimo fotografije, dron video i virtualne ture — sve spremno za launch.",
    },
    {
      step: "3",
      title: "Pokretanje Marketing Kampanje",
      description: "Pokrećemo kampanje na Google, Meta (Facebook/Instagram), YouTube. Automatizovano praćenje leadova.",
    },
    {
      step: "4",
      title: "Prodaja i Podrška",
      description: "Naš tim prodaje radi umesto vas. Obrađuje sve upite, zakazuje posete, zatvara prodaje. Pravna podrška uključena.",
    },
    {
      step: "5",
      title: "Transparentnost i Rezultati",
      description: "Vidite sve u realnom vremenu — leadove, posete, prodaje. Plaćanje samo kada prodamo.",
    },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kako To Radi?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-300 font-semibold leading-relaxed max-w-4xl mx-auto">
            Proces saradnje od prvog razgovora do završene prodaje — transparentno, profesionalno, bez rizika.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-5 max-w-5xl mx-auto">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="flex items-start gap-4 bg-slate-800/40 rounded-lg p-6 border border-emerald-400/10 hover:border-emerald-400/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-400/20 border-2 border-emerald-400/50 flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-xl">{item.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <p className="text-lg md:text-xl text-emerald-200 font-medium">
            Sve što vam treba pod jednom kapom — od strategije do završene prodaje.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

