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
    paymentModel: string;
  };
  deliverables: string[];
  timeline: {
    phase1: string;
    phase2: string;
    phase3: string;
  };
  guarantees: string[];
  qaSection: {
    question: string;
    answer: string;
  }[];
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
  const isExclusive =
    reportData.exclusiveSales ===
    "Yes, I can commit to exclusive sales partnership";

  const serviceTier = isHighValue || isUrgent ? "VIP Premium" : "Standard";

  const pricing = getPricingForTier(serviceTier, isExclusive, reportData.value);
  const deliverables = getDeliverablesForTier(serviceTier);
  const timeline = getTimelineForUrgency(reportData.timeline);
  const guarantees = getGuaranteesForTier(serviceTier, isExclusive);
  const qaSection = getQASection(isExclusive, serviceTier);

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
    qaSection,
    nextSteps: getNextStepsForProposal(serviceTier, isUrgent),
    urgencyLevel: isUrgent
      ? "HIGH"
      : reportData.timeline.includes("3-6 months")
        ? "MEDIUM"
        : "LOW",
  };
};

const getPricingForTier = (
  tier: string,
  isExclusive: boolean,
  _propertyValue: string
) => {
  if (isExclusive) {
    // Exclusive sales - percentage-based pricing
    if (tier === "VIP Premium") {
      return {
        serviceFee: "3-5% of sale price",
        marketingInvestment: "Included in service fee",
        estimatedSavings: "€25,000 - €100,000",
        netBenefit: "€25,000 - €100,000",
        paymentModel: "Pay only when property sells",
      };
    }

    return {
      serviceFee: "2-4% of sale price",
      marketingInvestment: "Included in service fee",
      estimatedSavings: "€10,000 - €25,000",
      netBenefit: "€10,000 - €25,000",
      paymentModel: "Pay only when property sells",
    };
  } else {
    // Non-exclusive sales - upfront payment required
    if (tier === "VIP Premium") {
      return {
        serviceFee: "€8,000 - €20,000 upfront",
        marketingInvestment: "€15,000 - €30,000 upfront",
        estimatedSavings: "€25,000 - €100,000",
        netBenefit: "€2,000 - €50,000",
        paymentModel: "Upfront payment required",
      };
    }

    return {
      serviceFee: "€3,000 - €8,000 upfront",
      marketingInvestment: "€5,000 - €12,000 upfront",
      estimatedSavings: "€10,000 - €25,000",
      netBenefit: "€2,000 - €5,000",
      paymentModel: "Upfront payment required",
    };
  }
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

const getGuaranteesForTier = (tier: string, isExclusive: boolean) => {
  const baseGuarantees = isExclusive
    ? [
        "Zero upfront costs - pay only when property sells",
        "30-day money-back guarantee if not satisfied",
        "Free market analysis worth €500",
      ]
    : [
        "30-day money-back guarantee if not satisfied",
        "Free market analysis worth €500",
        "Transparent pricing with no hidden fees",
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

const getQASection = (isExclusive: boolean, serviceTier: string) => {
  const baseQA = [
    {
      question:
        "What makes your service different from traditional real estate agents?",
      answer:
        "We provide comprehensive marketing, buyer screening, and legal support with performance-based pricing. Unlike traditional agents, we invest in professional marketing upfront and only get paid when your property sells.",
    },
    {
      question: "How do you find qualified buyers?",
      answer:
        "We use a combination of digital marketing, our exclusive buyer network, international outreach, and targeted advertising to reach qualified buyers who are actively looking for properties like yours.",
    },
    {
      question: "Investment & Returns - How does your pricing work?",
      answer: isExclusive
        ? "With exclusive sales partnership, you pay ZERO upfront. We invest in all marketing costs and only get paid a small percentage (2-5%) when your property sells. This means zero risk for you - we're fully invested in your success."
        : "For non-exclusive sales, we require upfront investment because you're keeping other options open. This covers our marketing costs while you maintain flexibility. With exclusive partnership, you pay nothing upfront - only when we sell your property.",
    },
    {
      question: "What if my property doesn't sell?",
      answer: isExclusive
        ? "With our exclusive partnership, you pay nothing if the property doesn't sell. We're fully invested in your success and will continue working until we find the right buyer."
        : "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll refund your upfront investment.",
    },
  ];

  const exclusiveQA = [
    {
      question: "Why do you require exclusive sales partnership?",
      answer:
        "Exclusive partnerships allow us to invest heavily in marketing your property without competition. This ensures maximum exposure and faster sales at better prices.",
    },
    {
      question: "What's included in the percentage-based pricing?",
      answer:
        "Everything - professional photography, videography, marketing campaigns, buyer screening, negotiation support, and legal assistance. No hidden fees or additional costs.",
    },
    {
      question: "Why do you only ask for money upfront if we're NOT exclusive?",
      answer:
        "With exclusive partnership, we're confident in our ability to sell your property, so we invest our own money upfront. For non-exclusive sales, since you're keeping other options open, we need to cover our marketing investment upfront to ensure we can still provide professional service while you maintain flexibility.",
    },
  ];

  const nonExclusiveQA = [
    {
      question: "Why do you require upfront payment for non-exclusive sales?",
      answer:
        "Since you're keeping other options open, we need to cover our marketing investment upfront. This ensures we can still provide professional service while you maintain flexibility.",
    },
    {
      question: "Investment & Returns - Why the difference in payment models?",
      answer:
        "Exclusive partnership = Zero upfront, percentage-based payment (we're confident we'll sell, so we invest our own money). Non-exclusive = Upfront payment required (since you're keeping options open, we need to cover our marketing costs upfront to provide professional service while you maintain flexibility).",
    },
    {
      question: "Can I switch to exclusive partnership later?",
      answer:
        "Yes! If you decide to commit to exclusive partnership, we can adjust our pricing model and refund a portion of your upfront investment.",
    },
  ];

  const vipQA =
    serviceTier === "VIP Premium"
      ? [
          {
            question: "What's included in VIP Premium service?",
            answer:
              "VIP service includes everything in Standard plus exclusive buyer network access, discrete marketing for privacy, premium staging consultation, international buyer outreach, and dedicated account management.",
          },
        ]
      : [];

  return [...baseQA, ...(isExclusive ? exclusiveQA : nonExclusiveQA), ...vipQA];
};
