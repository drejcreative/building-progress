import React from "react";
import {
  CheckCircle,
  Shield,
  Target,
  TrendingUp,
  Euro,
  Calendar,
  Star,
} from "lucide-react";
import { PersonalizedProposal } from "@/utils/proposalGenerator";

interface ProposalDisplayProps {
  proposal: PersonalizedProposal;
  onAccept: () => void;
  onSchedule: () => void;
}

export const ProposalDisplay: React.FC<ProposalDisplayProps> = ({
  proposal,
  onAccept,
  onSchedule,
}) => {
  // const t = useTranslations("Consultation");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-center mb-4">
          <Star className="w-8 h-8 text-yellow-300 mr-3" />
          <h2 className="text-3xl font-bold">Your Personalized Proposal</h2>
        </div>
        <p className="text-lg opacity-90">
          Proposal ID: {proposal.id} | Service Tier: {proposal.serviceTier}
        </p>
      </div>

      {/* Property Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Target className="w-6 h-6 text-purple-600 mr-3" />
          Property Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <span className="font-semibold text-gray-700">Property Type:</span>
            <span className="ml-2 text-gray-900">
              {proposal.propertyDetails.type}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Location:</span>
            <span className="ml-2 text-gray-900">
              {proposal.propertyDetails.location}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Value Range:</span>
            <span className="ml-2 text-gray-900">
              {proposal.propertyDetails.value}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Timeline:</span>
            <span className="ml-2 text-gray-900">
              {proposal.propertyDetails.timeline}
            </span>
          </div>
        </div>
      </div>

      {/* Pricing & ROI */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Euro className="w-6 h-6 text-yellow-300 mr-3" />
          Investment & Returns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Service Fee:</span>
              <span className="ml-2 text-yellow-200">
                {proposal.pricing.serviceFee}
              </span>
            </div>
            <div>
              <span className="font-semibold">Marketing Investment:</span>
              <span className="ml-2 text-yellow-200">
                {proposal.pricing.marketingInvestment}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Estimated Savings:</span>
              <span className="ml-2 text-yellow-200">
                {proposal.pricing.estimatedSavings}
              </span>
            </div>
            <div className="bg-green-600 p-3 rounded-lg">
              <span className="font-bold">Net Benefit:</span>
              <span className="ml-2 text-yellow-200 font-bold">
                {proposal.pricing.netBenefit}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
          What You&apos;ll Receive
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {proposal.deliverables.map((deliverable, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{deliverable}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Calendar className="w-6 h-6 text-blue-600 mr-3" />
          Project Timeline
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <span className="text-gray-700">{proposal.timeline.phase1}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <span className="text-gray-700">{proposal.timeline.phase2}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <span className="text-gray-700">{proposal.timeline.phase3}</span>
          </div>
        </div>
      </div>

      {/* Guarantees */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Shield className="w-6 h-6 text-yellow-300 mr-3" />
          Our Guarantees
        </h3>
        <div className="space-y-3">
          {proposal.guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-yellow-300 flex-shrink-0" />
              <span className="text-yellow-100">{guarantee}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
          Next Steps
        </h3>
        <div className="space-y-3">
          {proposal.nextSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">
                  {index + 1}
                </span>
              </div>
              <span className="text-gray-700">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onSchedule}
          className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Consultation
        </button>
        <button
          onClick={onAccept}
          className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-lg font-bold hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Accept Proposal
        </button>
      </div>
    </div>
  );
};
