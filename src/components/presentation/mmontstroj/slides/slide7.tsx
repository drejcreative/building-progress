"use client";

import { motion } from "framer-motion";
import { Globe, Video, BarChart3, Users, FileText } from "lucide-react";

export default function Slide7() {
  const services = [
    {
      key: "website",
      title: "Sajt po zgradi sa svim stanovima",
      description: (
        <>
          Svaki stan ima svoju stranicu sa 360° video prezentacijom, cenama i detaljima. Primer:{" "}
          <a
            href="https://proinvest.rs/use-cases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-indigo-200 underline transition-colors"
          >
            proinvest.rs/use-cases
          </a>
        </>
      ),
      icon: Globe,
    },
    {
      key: "video",
      title: "Dron i lifestyle video",
      description:
        "Profesionalni dron snimci zgrade i okoline, plus lifestyle video koji prikazuje život u zgradi — za marketing i prodaju.",
      icon: Video,
    },
    {
      key: "ads",
      title: "Reklamne kampanje (Google, Meta)",
      description:
        "Targetirane kampanje na Google i Meta platformama koje dovode kvalifikovane kupce direktno na vaš sajt i profile stanova.",
      icon: BarChart3,
    },
    {
      key: "tracking",
      title: "Praćenje lead-a u realnom vremenu",
      description:
        "CRM sistem koji prati svaki kontakt — ko je pogledao koji stan, kada, i automatski šalje obaveštenja vašem timu za follow-up.",
      icon: BarChart3,
    },
    {
      key: "agents",
      title: "Naši agenti zaključuju prodaje",
      description:
        "Dedikovani prodajni tim koji radi sa kupcima od prvog kontakta do završetka prodaje — vi ne radite ništa, mi prodajemo.",
      icon: Users,
    },
    {
      key: "legal",
      title: "Pravna podrška",
      description:
        "Pomoć pri izradi ugovora, dokumentacije, i pravnih pitanja — sve što treba za siguran i brz transfer vlasništva.",
      icon: FileText,
    },
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
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12"
        >
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-indigo-900/20 rounded-lg border border-indigo-400/30 backdrop-blur-sm hover:border-indigo-400 transition-colors"
              >
                <Icon className="w-8 h-8 text-indigo-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl text-white font-bold mb-2">
                    {item.title}
                  </h3>
                  <div className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {item.description}
                  </div>
                </div>
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
