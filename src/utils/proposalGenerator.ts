import { ReportData } from "@/types/consultation";

export interface PersonalizedProposal {
  id: string;
  customerName: string;
  propertyDetails: {
    type: string;
    location: string;
    value: string;
    timeline: string;
  };
  serviceTier: "Standard" | "VIP Premium";
  pricing: {
    serviceFee: string;
    marketingInvestment: string;
    estimatedSavings: string;
    netBenefit: string;
  };
  deliverables: string[];
  timeline: {
    phase1: string;
    phase2: string;
    phase3: string;
  };
  guarantees: string[];
  nextSteps: string[];
  urgencyLevel: "HIGH" | "MEDIUM" | "LOW";
}

export const generatePersonalizedProposal = (
  reportData: ReportData,
  contactInfo: string
): PersonalizedProposal => {
  const isHighValue =
    reportData.value.includes("€1,000,000") ||
    reportData.value.includes("€5,000,000");
  const isUrgent =
    reportData.timeline.includes("Immediately") ||
    reportData.timeline.includes("1-3 months");

  const serviceTier = isHighValue || isUrgent ? "VIP Premium" : "Standard";

  const pricing = getPricingForTier(serviceTier);
  const deliverables = getDeliverablesForTier(serviceTier);
  const timeline = getTimelineForUrgency(reportData.timeline);
  const guarantees = getGuaranteesForTier(serviceTier);

  return {
    id: `PROP-${Date.now()}`,
    customerName: contactInfo.split("@")[0] || "Valued Client",
    propertyDetails: {
      type: reportData.propertyType,
      location: reportData.location,
      value: reportData.value,
      timeline: reportData.timeline,
    },
    serviceTier,
    pricing,
    deliverables,
    timeline,
    guarantees,
    nextSteps: getNextStepsForProposal(serviceTier, isUrgent),
    urgencyLevel: isUrgent
      ? "HIGH"
      : reportData.timeline.includes("3-6 months")
        ? "MEDIUM"
        : "LOW",
  };
};

const getPricingForTier = (tier: string) => {
  if (tier === "VIP Premium") {
    return {
      serviceFee: "€5,000 - €15,000",
      marketingInvestment: "€10,000 - €25,000",
      estimatedSavings: "€25,000 - €100,000",
      netBenefit: "€10,000 - €60,000",
    };
  }

  return {
    serviceFee: "€2,000 - €5,000",
    marketingInvestment: "€3,000 - €8,000",
    estimatedSavings: "€10,000 - €25,000",
    netBenefit: "€5,000 - €12,000",
  };
};

const getDeliverablesForTier = (tier: string) => {
  const baseDeliverables = [
    "Professional property photography & videography",
    "Comprehensive market analysis report",
    "Multi-platform marketing campaign",
    "Qualified buyer screening & vetting",
    "Negotiation support & guidance",
    "Legal documentation assistance",
  ];

  if (tier === "VIP Premium") {
    return [
      ...baseDeliverables,
      "Exclusive VIP buyer network access",
      "Discrete marketing for privacy",
      "Premium staging consultation",
      "International buyer outreach",
      "Dedicated account manager",
      "Priority support & communication",
    ];
  }

  return baseDeliverables;
};

const getTimelineForUrgency = (timeline: string) => {
  if (timeline.includes("Immediately")) {
    return {
      phase1: "Week 1: Emergency marketing launch",
      phase2: "Week 2-3: Buyer outreach & showings",
      phase3: "Week 4: Negotiation & closing",
    };
  }

  if (timeline.includes("1-3 months")) {
    return {
      phase1: "Week 1-2: Market analysis & strategy",
      phase2: "Week 3-8: Marketing campaign execution",
      phase3: "Week 9-12: Buyer negotiations & closing",
    };
  }

  return {
    phase1: "Month 1: Comprehensive market analysis",
    phase2: "Month 2-4: Strategic marketing campaign",
    phase3: "Month 5-6: Buyer engagement & closing",
  };
};

const getGuaranteesForTier = (tier: string) => {
  const baseGuarantees = [
    "Zero upfront costs - pay only when property sells",
    "30-day money-back guarantee if not satisfied",
    "Free market analysis worth €500",
  ];

  if (tier === "VIP Premium") {
    return [
      ...baseGuarantees,
      "Guaranteed qualified buyer within 60 days",
      "Premium buyer network access",
      "Dedicated VIP support team",
    ];
  }

  return baseGuarantees;
};

const getNextStepsForProposal = (tier: string, isUrgent: boolean) => {
  const baseSteps = [
    "Schedule 30-minute strategy consultation",
    "Receive detailed proposal document",
    "Review terms and conditions",
  ];

  if (isUrgent) {
    return [
      "URGENT: Book immediate consultation (today/tomorrow)",
      ...baseSteps,
      "Emergency marketing launch within 48 hours",
    ];
  }

  if (tier === "VIP Premium") {
    return [
      ...baseSteps,
      "VIP buyer network introduction",
      "Premium service onboarding",
    ];
  }

  return baseSteps;
};
