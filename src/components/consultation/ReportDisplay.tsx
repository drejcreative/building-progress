import React from "react";
import { useRouter } from "@/i18n/navigation";
import {
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import { ReportData } from "@/types/consultation";
import { useTranslations } from "next-intl";

interface ReportDisplayProps {
  reportData: ReportData;
  onGenerateProposal: () => void;
}

export const ReportDisplay: React.FC<ReportDisplayProps> = ({
  reportData,
  onGenerateProposal,
}) => {
  const t = useTranslations("Consultation");
  // const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {t("report.title")}
        </h2>
        <p className="text-xl text-gray-600 mb-8">{t("report.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Property Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-6 h-6 text-purple-600 mr-3" />
            {t("report.propertyAnalysis")}
          </h3>
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-gray-700">
                {t("report.propertyType")}:
              </span>
              <span className="ml-2 text-gray-900">
                {reportData.propertyType}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                {t("report.location")}:
              </span>
              <span className="ml-2 text-gray-900">{reportData.location}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                {t("report.value")}:
              </span>
              <span className="ml-2 text-gray-900">{reportData.value}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                {t("report.timeline")}:
              </span>
              <span className="ml-2 text-gray-900">{reportData.timeline}</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Zap className="w-6 h-6 text-yellow-300 mr-3" />
            {t("report.recommendations")}
          </h3>
          <div className="space-y-4">
            <div>
              <span className="font-semibold">
                {t("report.recommendedService")}:
              </span>
              <span className="ml-2 text-yellow-200">
                {reportData.recommendations.service}
              </span>
            </div>
            <div>
              <span className="font-semibold">{t("report.urgency")}:</span>
              <span className="ml-2 text-yellow-200">
                {reportData.recommendations.urgency}
              </span>
            </div>
            <div>
              <span className="font-semibold">
                {t("report.estimatedSavings")}:
              </span>
              <span className="ml-2 text-yellow-200">
                {reportData.recommendations.estimatedSavings}
              </span>
            </div>
            <div>
              <span className="font-semibold">{t("report.riskLevel")}:</span>
              <span className="ml-2 text-yellow-200">
                {reportData.recommendations.riskLevel}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
          {t("report.nextSteps")}
        </h3>
        <div className="space-y-3">
          {reportData.recommendations.nextSteps.map((step, index) => (
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

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          {t("report.valueProposition")}
        </h3>
        <p className="text-lg mb-6">{t("report.valueDescription")}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-yellow-300 mb-2" />
            <span className="font-semibold">{t("report.zeroRisk")}</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-yellow-300 mb-2" />
            <span className="font-semibold">{t("report.fastResults")}</span>
          </div>
          <div className="flex flex-col items-center">
            <Target className="w-8 h-8 text-yellow-300 mb-2" />
            <span className="font-semibold">{t("report.professional")}</span>
          </div>
        </div>
        <button
          onClick={onGenerateProposal}
          className="mt-8 bg-white text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
        >
          {t("report.cta")} <ArrowRight className="inline w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};
