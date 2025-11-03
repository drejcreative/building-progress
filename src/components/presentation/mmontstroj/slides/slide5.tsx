"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  Video,
  TrendingUp,
  Users,
  Scale,
} from "lucide-react";

export default function Slide5() {
  const deliverables = [
    {
      icon: Globe,
      title: "Sajt po zgradi sa svim stanovima",
      description:
        "Svaki stan ima svoju stranicu sa 360° video prezentacijom, cenama i detaljima. Primer: proinvest.rs/use-cases",
    },
    {
      icon: Video,
      title: "Dron i lifestyle video",
      description:
        "Profesionalni dron snimci zgrade i okoline, plus lifestyle video koji prikazuje život u zgradi — za marketing i prodaju.",
    },
    {
      icon: TrendingUp,
      title: "Reklamne kampanje (Google, Meta)",
      description:
        "Targetirane kampanje na Google i Meta platformama koje dovode kvalifikovane kupce direktno na vaš sajt i profile stanova.",
    },
    {
      icon: CheckCircle2,
      title: "Praćenje lead-a u realnom vremenu",
      description:
        "CRM sistem koji prati svaki kontakt — ko je pogledao koji stan, kada, i automatski šalje obaveštenja vašem timu za follow-up.",
    },
    {
      icon: Users,
      title: "Naši agenti zaključuju prodaje",
      description:
        "Dedikovani prodajni tim koji radi sa kupcima od prvog kontakta do završetka prodaje — vi ne radite ništa, mi prodajemo.",
    },
    {
      icon: Scale,
      title: "Pravna podrška",
      description:
        "Pomoć pri izradi ugovora, dokumentacije, i pravnih pitanja — sve što treba za siguran i brz transfer vlasništva.",
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
            Brending i identitet
          </h2>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-indigo-900/20 rounded-lg border border-indigo-400/30 backdrop-blur-sm hover:border-indigo-400 transition-colors"
              >
                <Icon className="w-8 h-8 text-indigo-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl text-white font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
