"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin } from "lucide-react";

export default function UseCasesContact() {
  const t = useTranslations("UseCases");

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-blue-100">{t("contact.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t("contact.call.title")}
            </h3>
            <p className="text-blue-100">{t("contact.call.phone")}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t("contact.email.title")}
            </h3>
            <p className="text-blue-100">{t("contact.email.address")}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {t("contact.visit.title")}
            </h3>
            <p className="text-blue-100">{t("contact.visit.location")}</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t("contact.scheduleVisit")}
          </button>
        </div>
      </div>
    </section>
  );
}
