import { useState, useCallback } from "react";
import { Answer, ConsultationState } from "@/types/consultation";
import {
  getQuestions,
  getNextQuestionIndex,
  getProgressPercentage,
  generateReportData,
} from "@/utils/consultation";
import {
  generatePersonalizedProposal,
  PersonalizedProposal,
} from "@/utils/proposalGenerator";

export const useConsultation = () => {
  const [state, setState] = useState<ConsultationState>({
    currentQuestionIndex: 0,
    answers: [],
    showReport: false,
    isGeneratingReport: false,
    reportData: null,
  });
  const [showProposal, setShowProposal] = useState(false);
  const [proposal, setProposal] = useState<PersonalizedProposal | null>(null);

  const questions = getQuestions();
  const currentQuestion = questions[state.currentQuestionIndex];
  const currentAnswer = state.answers.find(
    (a) => a.questionId === currentQuestion.id
  );

  const generateReport = useCallback(async () => {
    setState((prev) => ({ ...prev, isGeneratingReport: true }));

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const reportData = generateReportData(state.answers);

    setState((prev) => ({
      ...prev,
      reportData,
      isGeneratingReport: false,
      showReport: true,
    }));
  }, [state.answers]);

  const handleAnswer = useCallback(
    (value: string | string[]) => {
      const newAnswer: Answer = {
        questionId: currentQuestion.id,
        value,
      };

      setState((prev) => ({
        ...prev,
        answers: [
          ...prev.answers.filter((a) => a.questionId !== currentQuestion.id),
          newAnswer,
        ],
      }));
    },
    [currentQuestion.id]
  );

  const handleNext = useCallback(() => {
    if (currentQuestion.required && !currentAnswer) {
      return;
    }

    if (currentQuestion.id === "contact_info") {
      generateReport();
      return;
    }

    const nextIndex = getNextQuestionIndex(
      currentQuestion,
      state.currentQuestionIndex,
      currentAnswer,
      questions
    );

    if (nextIndex < questions.length) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: nextIndex,
      }));
    }
  }, [
    currentQuestion,
    currentAnswer,
    state.currentQuestionIndex,
    questions,
    generateReport,
  ]);

  const handlePrevious = useCallback(() => {
    if (state.currentQuestionIndex > 0) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  }, [state.currentQuestionIndex]);

  const generateProposal = useCallback(() => {
    if (!state.reportData) return;

    const contactInfo =
      (state.answers.find((a) => a.questionId === "contact_info")
        ?.value as string) || "";
    const personalizedProposal = generatePersonalizedProposal(
      state.reportData,
      contactInfo
    );

    setProposal(personalizedProposal);
    setShowProposal(true);
  }, [state.reportData, state.answers]);

  const progressPercentage = getProgressPercentage(
    state.currentQuestionIndex,
    questions.length
  );

  return {
    // State
    currentQuestionIndex: state.currentQuestionIndex,
    answers: state.answers,
    showReport: state.showReport,
    isGeneratingReport: state.isGeneratingReport,
    reportData: state.reportData,
    showProposal,
    proposal,
    currentQuestion,
    currentAnswer,
    questions,
    progressPercentage,

    // Actions
    handleAnswer,
    handleNext,
    handlePrevious,
    generateReport,
    generateProposal,
  };
};
