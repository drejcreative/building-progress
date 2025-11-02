import { Question, Answer, ReportData } from "@/types/consultation";

export const getQuestions = (): Question[] => [
  {
    id: "property_type",
    question: "What type of property are you looking to sell?",
    type: "single",
    options: [
      "Residential Building",
      "Commercial Building",
      "Mixed-Use Building",
      "Land/Development Site",
    ],
    required: true,
    aiResponse:
      "Understanding your property type helps me tailor the perfect strategy for your specific situation.",
    nextQuestion: "exclusive_sales",
  },
  {
    id: "exclusive_sales",
    question: "Can you commit to our exclusive sales partnership?",
    type: "single",
    options: [
      "Yes, I can commit to exclusive sales partnership",
      "No, I need to keep other options open",
      "I'm not sure, I need more information",
    ],
    required: true,
    aiResponse:
      "This is the most important question. Exclusive partnerships allow us to invest heavily in marketing your property with zero upfront costs. Non-exclusive partnerships require custom negotiation.",
    nextQuestion: "property_location",
  },
  {
    id: "property_location",
    question: "Where is your property located?",
    type: "single",
    options: ["Belgrade", "Novi Sad", "Niš", "Montenegro", "Croatia", "Other"],
    required: true,
    aiResponse:
      "Location is crucial for market analysis and buyer targeting strategies.",
  },
  {
    id: "property_value",
    question: "What is the estimated value of your property?",
    type: "single",
    options: [
      "Under €100,000",
      "€100,000 - €500,000",
      "€500,000 - €1,000,000",
      "€1,000,000 - €5,000,000",
      "Over €5,000,000",
    ],
    required: true,
    conditional: [
      {
        value: "Under €100,000",
        nextQuestion: "timeline",
      },
      {
        value: "€100,000 - €500,000",
        nextQuestion: "timeline",
      },
      {
        value: "€500,000 - €1,000,000",
        nextQuestion: "timeline",
      },
      {
        value: "€1,000,000 - €5,000,000",
        nextQuestion: "premium_analysis",
      },
      {
        value: "Over €5,000,000",
        nextQuestion: "premium_analysis",
      },
    ],
    aiResponse:
      "Property value determines the level of service and marketing investment needed.",
  },
  {
    id: "premium_analysis",
    question: "For high-value properties, what's your biggest concern?",
    type: "single",
    options: [
      "Finding qualified high-net-worth buyers",
      "Maximizing sale price",
      "Discretion and privacy",
      "Complex legal requirements",
      "Time sensitivity",
    ],
    required: true,
    nextQuestion: "timeline",
    aiResponse:
      "High-value properties require specialized strategies and premium buyer networks.",
  },
  {
    id: "timeline",
    question: "When do you need to sell your property?",
    type: "single",
    options: [
      "Immediately (within 1 month)",
      "1-3 months",
      "3-6 months",
      "6-12 months",
      "Flexible timeline",
    ],
    required: true,
    conditional: [
      {
        value: "Immediately (within 1 month)",
        nextQuestion: "urgency_challenges",
      },
      {
        value: "1-3 months",
        nextQuestion: "current_marketing",
      },
      {
        value: "3-6 months",
        nextQuestion: "current_marketing",
      },
      {
        value: "6-12 months",
        nextQuestion: "current_marketing",
      },
      {
        value: "Flexible timeline",
        nextQuestion: "current_marketing",
      },
    ],
    aiResponse:
      "Timeline affects our marketing strategy and urgency of implementation.",
  },
  {
    id: "urgency_challenges",
    question: "What's causing the urgency to sell quickly?",
    type: "multiple",
    options: [
      "Financial pressure",
      "Relocation requirements",
      "Market conditions",
      "Legal obligations",
      "Investment opportunity",
    ],
    required: true,
    nextQuestion: "current_marketing",
    aiResponse:
      "Understanding urgency helps me prioritize the most effective strategies for fast results.",
  },
  {
    id: "current_marketing",
    question: "What marketing efforts have you tried so far?",
    type: "multiple",
    options: [
      "None yet",
      "Online listings",
      "Real estate agents",
      "Social media",
      "Print advertising",
      "Word of mouth",
    ],
    required: true,
    nextQuestion: "challenges",
    aiResponse:
      "I'll analyze what's worked and what hasn't to avoid repeating ineffective strategies.",
  },
  {
    id: "challenges",
    question: "What's your biggest challenge with selling this property?",
    type: "single",
    options: [
      "Finding qualified buyers",
      "Marketing costs and ROI",
      "Time and effort required",
      "Legal and paperwork complexity",
      "Pricing and market knowledge",
      "All of the above",
    ],
    required: true,
    nextQuestion: "budget_concerns",
    aiResponse:
      "Identifying your main pain points helps me create a targeted solution.",
  },
  {
    id: "budget_concerns",
    question: "What's your biggest concern about marketing costs?",
    type: "single",
    options: [
      "High upfront investment with no guarantee",
      "Uncertain ROI and results",
      "Ongoing monthly costs",
      "Hidden fees and surprises",
      "I prefer to pay only when I get results",
    ],
    required: true,
    nextQuestion: "investment_goals",
    aiResponse:
      "Your cost concerns are valid - that's exactly why our zero-risk model exists.",
  },
  {
    id: "investment_goals",
    question: "What's most important to you in this sale?",
    type: "multiple",
    options: [
      "Maximum sale price",
      "Fastest possible sale",
      "Minimal effort on my part",
      "Zero upfront costs",
      "Professional marketing",
      "Legal support and guidance",
    ],
    required: true,
    nextQuestion: "previous_experience",
    aiResponse:
      "Your priorities will shape the service level and approach I recommend.",
  },
  {
    id: "previous_experience",
    question: "Have you sold properties before?",
    type: "single",
    options: [
      "Yes, successfully",
      "Yes, but with challenges",
      "No, this is my first time",
      "I've tried but failed",
    ],
    required: true,
    nextQuestion: "contact_info",
    aiResponse:
      "Your experience level helps me understand how much guidance and support you'll need.",
  },
  {
    id: "contact_info",
    question:
      "Let's get your contact information to send your personalized report",
    type: "text",
    required: true,
    nextQuestion: "complete",
    aiResponse:
      "I'll generate a comprehensive analysis and send it directly to you.",
  },
];

export const getNextQuestionIndex = (
  currentQuestion: Question,
  currentQuestionIndex: number,
  currentAnswer: Answer | undefined,
  questions: Question[]
): number => {
  if (currentQuestion.conditional) {
    const answerValue = currentAnswer?.value as string;
    const condition = currentQuestion.conditional.find(
      (c) => c.value === answerValue
    );
    if (condition) {
      const nextIndex = questions.findIndex(
        (q) => q.id === condition.nextQuestion
      );
      return nextIndex !== -1 ? nextIndex : currentQuestionIndex + 1;
    }
  }
  return currentQuestionIndex + 1;
};

export const getProgressPercentage = (
  currentQuestionIndex: number,
  totalQuestions: number
): number => {
  return ((currentQuestionIndex + 1) / totalQuestions) * 100;
};

export const getRecommendedService = (
  answers: Record<string, string | string[]>
): string => {
  const value = answers.property_value;
  const timeline = answers.timeline;
  const goals = answers.investment_goals;

  if (value === "Over €5,000,000" || value === "€1,000,000 - €5,000,000") {
    return "VIP Premium Service";
  }
  if (timeline === "Immediately (within 1 month)") {
    return "VIP Premium Service";
  }
  if (goals && goals.includes("Zero upfront costs")) {
    return "Standard Service";
  }
  return "Standard Service";
};

export const getUrgencyLevel = (
  answers: Record<string, string | string[]>
): string => {
  const timeline = answers.timeline;
  if (timeline === "Immediately (within 1 month)") {
    return "HIGH - Immediate action required";
  }
  if (timeline === "1-3 months") {
    return "MEDIUM - Quick implementation needed";
  }
  return "LOW - Strategic planning approach";
};

export const getEstimatedSavings = (
  answers: Record<string, string | string[]>
): string => {
  const value = answers.property_value;
  if (value === "Over €5,000,000") {
    return "€50,000 - €100,000";
  }
  if (value === "€1,000,000 - €5,000,000") {
    return "€25,000 - €75,000";
  }
  if (value === "€500,000 - €1,000,000") {
    return "€15,000 - €35,000";
  }
  return "€10,000 - €25,000";
};

export const getRiskLevel = (
  answers: Record<string, string | string[]>
): string => {
  const experience = answers.previous_experience;
  const challenges = answers.challenges;

  if (
    experience === "I've tried but failed" ||
    challenges === "All of the above"
  ) {
    return "HIGH - Professional guidance essential";
  }
  if (experience === "No, this is my first time") {
    return "MEDIUM - Expert support recommended";
  }
  return "LOW - You have experience, but optimization possible";
};

export const getNextSteps = (
  answers: Record<string, string | string[]>
): string[] => {
  const steps = [
    "Schedule 30-minute strategy call",
    "Receive detailed market analysis",
    "Get customized marketing plan",
  ];

  if (answers.timeline === "Immediately (within 1 month)") {
    steps.unshift("URGENT: Book immediate consultation");
  }

  if (answers.property_value === "Over €5,000,000") {
    steps.push("Access exclusive VIP buyer network");
  }

  return steps;
};

export const generateReportData = (answers: Answer[]): ReportData => {
  const answersMap = answers.reduce(
    (acc, answer) => {
      acc[answer.questionId] = answer.value;
      return acc;
    },
    {} as Record<string, string | string[]>
  );

  return {
    propertyType: (answersMap.property_type as string) || "Unknown",
    location: (answersMap.property_location as string) || "Unknown",
    value: (answersMap.property_value as string) || "Unknown",
    timeline: (answersMap.timeline as string) || "Unknown",
    challenges: Array.isArray(answersMap.challenges)
      ? (answersMap.challenges as string[])
      : [answersMap.challenges as string],
    budgetConcerns: (answersMap.budget_concerns as string) || "Unknown",
    goals: Array.isArray(answersMap.investment_goals)
      ? (answersMap.investment_goals as string[])
      : [answersMap.investment_goals as string],
    experience: (answersMap.previous_experience as string) || "Unknown",
    exclusiveSales: (answersMap.exclusive_sales as string) || "Unknown",
    contactInfo: (answersMap.contact_info as string) || "",
    recommendations: {
      service: getRecommendedService(answersMap),
      urgency: getUrgencyLevel(answersMap),
      estimatedSavings: getEstimatedSavings(answersMap),
      riskLevel: getRiskLevel(answersMap),
      nextSteps: getNextSteps(answersMap),
    },
  };
};
