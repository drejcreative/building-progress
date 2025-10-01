import React from "react";
import { Question, Answer } from "@/types/consultation";
import { ProgressBar } from "./ProgressBar";
import { AIResponse } from "./AIResponse";
import { QuestionRenderer } from "./QuestionRenderer";
import { NavigationButtons } from "./NavigationButtons";

interface QuestionCardProps {
  question: Question;
  currentAnswer?: Answer;
  currentQuestionIndex: number;
  totalQuestions: number;
  progressPercentage: number;
  onAnswer: (value: string | string[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  currentQuestionIndex,
  totalQuestions,
  progressPercentage,
  onAnswer,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        progressPercentage={progressPercentage}
      />

      {question.aiResponse && <AIResponse aiResponse={question.aiResponse} />}

      <QuestionRenderer
        question={question}
        currentAnswer={currentAnswer}
        onAnswer={onAnswer}
      />

      <NavigationButtons
        currentQuestionIndex={currentQuestionIndex}
        isRequired={question.required}
        hasAnswer={!!currentAnswer}
        isLastQuestion={question.id === "contact_info"}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
};
