import React from "react";
import { useTranslations } from "next-intl";

interface ProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  progressPercentage: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestionIndex,
  totalQuestions,
  progressPercentage,
}) => {
  const t = useTranslations("Consultation");

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{t("progress")}</span>
        <span>
          {currentQuestionIndex + 1} / {totalQuestions}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
