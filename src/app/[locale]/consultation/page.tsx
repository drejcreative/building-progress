"use client";

import React from "react";
import { useConsultation } from "@/hooks/useConsultation";
import { ConsultationHeader } from "@/components/consultation/ConsultationHeader";
import { QuestionCard } from "@/components/consultation/QuestionCard";
import { LoadingState } from "@/components/consultation/LoadingState";
import { ReportDisplay } from "@/components/consultation/ReportDisplay";
import { ProposalDisplay } from "@/components/consultation/ProposalDisplay";
import ComingSoon from "@/components/consultation/ComingSoon";
import { features } from "@/config/features";

export default function ConsultationPage() {
  const {
    currentQuestionIndex,
    showReport,
    isGeneratingReport,
    reportData,
    showProposal,
    proposal,
    currentQuestion,
    currentAnswer,
    questions,
    progressPercentage,
    handleAnswer,
    handleNext,
    handlePrevious,
    generateProposal,
  } = useConsultation();

  const handleScheduleConsultation = () => {
    // TODO: Implement scheduling logic
    console.log("Schedule consultation for:", proposal?.customerName);
  };

  const handleAcceptProposal = () => {
    // TODO: Implement proposal acceptance logic
    console.log("Accept proposal:", proposal?.id);
  };

  const renderContent = () => {
    if (isGeneratingReport) {
      return <LoadingState />;
    }

    if (showProposal && proposal) {
      return (
        <ProposalDisplay
          proposal={proposal}
          onAccept={handleAcceptProposal}
          onSchedule={handleScheduleConsultation}
        />
      );
    }

    if (showReport && reportData) {
      return (
        <ReportDisplay
          reportData={reportData}
          onGenerateProposal={generateProposal}
        />
      );
    }

    return (
      <div className="space-y-8">
        <ConsultationHeader />
        <QuestionCard
          question={currentQuestion}
          currentAnswer={currentAnswer}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          progressPercentage={progressPercentage}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    );
  };

  // Check if consultation feature is enabled
  if (!features.consultation.enabled) {
    return <ComingSoon />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">{renderContent()}</div>
    </div>
  );
}
