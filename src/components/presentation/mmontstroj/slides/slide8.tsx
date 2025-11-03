"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Slide8() {
  const models = [
    {
      number: "1️⃣",
      name: "Potpuna Ekskluziva",
      commission: "1%",
      description: "Jedna zgrada, ekskluzivna prodaja",
      details: [
        "Mi preuzimamo ekskluzivnu prodaju jedne zgrade",
        "Sve troškove mi finansiramo",
        "Provizija samo od prodaje",
        "Potpuna kontrola i transparentnost",
      ],
      color: "emerald",
    },
    {
      number: "2️⃣",
      name: "Portfolio Partnerstvo",
      commission: "0.5%",
      description: "Sve zgrade, dugoročno",
      details: [
        "0.5% provizije po prodaji",
        "Obuhvata sve zgrade u projektu",
        "Zajednički sistem — svaki objekat dobija svoju stranicu",
        "Jedinstveni MMontStroj digitalni brend",
      ],
      color: "amber",
    },
    {
      number: "3️⃣",
      name: "Parcijalna Ekskluziva",
      commission: "1.5%",
      description: "25% stanova, test saradnja",
      details: [
        "25% stanova po zgradi",
        "Ekskluzivno pravo prodaje četvrtine stanova",
        "Trajanje 6 meseci",
        "Oslobađa se 20 stanova mesečno ako ne postignemo rezultate",
      ],
      color: "blue",
    },
  ];

  const deliverables = [
    "Web platformu sa svakom zgradom i svakim stanom posebno",
    "360° virtuelne ture (kada objekat bude spreman)",
    "Snimanja sa gradilišta i redovno ažuriranje napretka",
    "Kampanje na YouTube, Facebook, Instagram i Google",
    "Pravu prodajnu analitiku — ko gleda, odakle dolaze, koliko puta kontaktira",
    "Pravnu podršku po potrebi (ugovori, verifikacija kupaca)",
    "Agente na terenu koji vode klijente i zaključuju prodaju",
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950/50 to-slate-900 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ponuda — Partnerstvo, Ne Usluga
          </h2>
          <p className="text-xl md:text-2xl text-emerald-300 font-semibold">
            Bez ikakvog troška unapred. Sve finansijamo mi.
          </p>
        </motion.div>

        {/* Models */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-lg border ${
                model.color === "emerald"
                  ? "border-emerald-400/30"
                  : model.color === "amber"
                    ? "border-amber-400/30"
                    : "border-blue-400/30"
              } p-6`}
            >
              <div className="text-center mb-4">
                <span className="text-4xl mb-2 block">{model.number}</span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {model.name}
                </h3>
                <p
                  className={`text-3xl font-bold ${
                    model.color === "emerald"
                      ? "text-emerald-400"
                      : model.color === "amber"
                        ? "text-amber-400"
                        : "text-blue-400"
                  } mb-2`}
                >
                  {model.commission}
                </p>
                <p className="text-sm text-gray-300">{model.description}</p>
              </div>
              <ul className="space-y-2 mt-4">
                {model.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        model.color === "emerald"
                          ? "text-emerald-400"
                          : model.color === "amber"
                            ? "text-amber-400"
                            : "text-blue-400"
                      } flex-shrink-0 mt-0.5`}
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-emerald-900/20 rounded-lg border border-emerald-400/30 p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            U Svakom Modelu Radimo Kompletan Digitalni Ekosistem
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-base text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center text-amber-300 font-semibold mt-8 text-lg max-w-4xl mx-auto"
        >
          &quot;Mi stavljamo svoj rad, ljude i budžet na sto. Vi nemate nikakav
          rizik.&quot;
        </motion.p>
      </div>
    </div>
  );
}
