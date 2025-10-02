import React from "react";
import { CheckCircle } from "lucide-react";
import { Question, Answer } from "@/types/consultation";
import { useTranslations } from "next-intl";

interface QuestionRendererProps {
  question: Question;
  currentAnswer?: Answer;
  onAnswer: (value: string | string[]) => void;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  currentAnswer,
  onAnswer,
}) => {
  const t = useTranslations("Consultation");

  const renderSingleChoice = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              currentAnswer?.value === option
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-purple-300"
            }`}
          >
            <input
              type="radio"
              name={question.id}
              value={option}
              checked={currentAnswer?.value === option}
              onChange={(e) => onAnswer(e.target.value)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                currentAnswer?.value === option
                  ? "border-purple-500 bg-purple-500"
                  : "border-gray-300"
              }`}
            >
              {currentAnswer?.value === option && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>
            <span className="text-lg">{option}</span>
          </label>
        ))}
      </div>
    );
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
              Array.isArray(currentAnswer?.value) &&
              currentAnswer.value.includes(option)
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-purple-300"
            }`}
          >
            <input
              type="checkbox"
              value={option}
              checked={
                Array.isArray(currentAnswer?.value) &&
                currentAnswer.value.includes(option)
              }
              onChange={(e) => {
                const currentValues = Array.isArray(currentAnswer?.value)
                  ? currentAnswer.value
                  : [];
                if (e.target.checked) {
                  onAnswer([...currentValues, option]);
                } else {
                  onAnswer(currentValues.filter((v) => v !== option));
                }
              }}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center ${
                Array.isArray(currentAnswer?.value) &&
                currentAnswer.value.includes(option)
                  ? "border-purple-500 bg-purple-500"
                  : "border-gray-300"
              }`}
            >
              {Array.isArray(currentAnswer?.value) &&
                currentAnswer.value.includes(option) && (
                  <CheckCircle className="w-3 h-3 text-white" />
                )}
            </div>
            <span className="text-lg">{option}</span>
          </label>
        ))}
      </div>
    );
  };

  const renderTextInput = () => {
    return (
      <div>
        <textarea
          value={(currentAnswer?.value as string) || ""}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={t("contactPlaceholder")}
          className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
          rows={4}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>

      {question.type === "single" && renderSingleChoice()}
      {question.type === "multiple" && renderMultipleChoice()}
      {question.type === "text" && renderTextInput()}
    </div>
  );
};
