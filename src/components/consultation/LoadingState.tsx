import React from "react";
import { Brain } from "lucide-react";
import { useTranslations } from "next-intl";

export const LoadingState: React.FC = () => {
  const t = useTranslations("Consultation");

  return (
    <div className="text-center space-y-8">
      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
        <Brain className="w-10 h-10 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t("ai.analyzing")}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {t("ai.analyzingDescription")}
        </p>
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
