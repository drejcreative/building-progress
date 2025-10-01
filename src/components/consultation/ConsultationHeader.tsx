import React from "react";
import { Brain } from "lucide-react";
import { useTranslations } from "next-intl";

export const ConsultationHeader: React.FC = () => {
  const t = useTranslations("Consultation");

  return (
    <div className="text-center">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
        <Brain className="w-4 h-4 mr-2" />
        {t("badge")}
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("subtitle")}</p>
    </div>
  );
};
