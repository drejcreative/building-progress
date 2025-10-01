import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface NavigationButtonsProps {
  currentQuestionIndex: number;
  isRequired: boolean;
  hasAnswer: boolean;
  isLastQuestion: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentQuestionIndex,
  isRequired,
  hasAnswer,
  isLastQuestion,
  onPrevious,
  onNext,
}) => {
  const t = useTranslations("Consultation");

  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onPrevious}
        disabled={currentQuestionIndex === 0}
        className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        {t("previous")}
      </button>
      <button
        onClick={onNext}
        disabled={isRequired && !hasAnswer}
        className="flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
      >
        {isLastQuestion ? t("complete") : t("next")}
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};
