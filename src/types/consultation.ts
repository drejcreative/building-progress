export interface Question {
  id: string;
  question: string;
  type: "single" | "multiple" | "text" | "range";
  options?: string[];
  required: boolean;
  nextQuestion?: string;
  conditional?: {
    value: string;
    nextQuestion: string;
  }[];
  aiResponse?: string;
}

export interface Answer {
  questionId: string;
  value: string | string[];
}

export interface ReportData {
  propertyType: string;
  location: string;
  value: string;
  timeline: string;
  challenges: string[];
  budgetConcerns: string;
  goals: string[];
  experience: string;
  contactInfo: string;
  recommendations: {
    service: string;
    urgency: string;
    estimatedSavings: string;
    riskLevel: string;
    nextSteps: string[];
  };
}

export interface ConsultationState {
  currentQuestionIndex: number;
  answers: Answer[];
  showReport: boolean;
  isGeneratingReport: boolean;
  reportData: ReportData | null;
}

export type QuestionType = "single" | "multiple" | "text" | "range";
