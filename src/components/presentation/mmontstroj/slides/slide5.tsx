"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Slide5() {
  const examples = [
    {
      name: "Belgrade Waterfront",
      url: "https://www.belgradewaterfront.com/en/",
      image: "/images/bw.webp",
    },
    {
      name: "Delta District",
      url: "https://deltadistrict.rs/",
      image: "/images/Delta-District-Home-page-1.jpg",
      subtitle: "Primer nivoa prezentacije koji želimo da vam ponudimo",
    },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vizija — Šta Mi Donosimo
          </h2>
        </motion.div>

        {/* Vision Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl text-indigo-300 font-semibold leading-relaxed max-w-5xl mx-auto mb-6">
            Želimo da vam ponudimo <span className="text-amber-400 font-bold">brand i ceo marketing</span> kao što imaju{" "}
            <span className="text-amber-400 font-bold">Waterfront</span> i <span className="text-amber-400 font-bold">Delta</span>.
          </p>
          <p className="text-xl md:text-2xl text-amber-400 font-semibold leading-relaxed max-w-4xl mx-auto mb-6">
            Preuzimamo <span className="text-amber-300 font-bold">ceo marketing, prezentaciju, prodaju i pravnu podršku</span> — da vas oslobodimo tog pritiska.
          </p>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
            Vaš projekat zaslužuje isti nivo digitalne prezentacije kao najveći beogradski projekti — ali sa više autentičnosti i lokalnog duha.
          </p>
          <p className="text-lg md:text-xl text-indigo-300 font-medium leading-relaxed max-w-4xl mx-auto">
            Sve što vam treba: profesionalni websajt, virtualne ture, video produkcija, marketing kampanje, pravna podrška, dedikovani prodajni tim i tracking sistema — sve u jednom paketu.
          </p>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {examples.map((example, index) => (
            <motion.a
              key={example.name}
              href={example.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
              className="group relative overflow-hidden rounded-lg border-2 border-indigo-400/30 bg-slate-800/50 backdrop-blur-sm hover:border-indigo-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={example.image}
                  alt={example.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  <div className="flex items-center gap-2 text-white">
                    <Globe className="w-5 h-5" />
                    <span className="text-2xl font-bold">{example.name}</span>
                    <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {example.subtitle && (
                    <p className="text-sm text-indigo-300 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {example.subtitle}
                    </p>
                  )}
                  {!example.subtitle && (
                    <p className="text-sm text-indigo-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Primer nivoa prezentacije koji želimo da vam ponudimo
                    </p>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
