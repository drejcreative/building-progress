"use client";

import { useTranslations } from "next-intl";
import {
  Image as ImageIcon,
  CheckCircle,
  Clock,
  Circle,
  ChevronRight,
  Calendar,
  Users,
  Wrench,
  Camera,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function UseCasesProgress() {
  const t = useTranslations("UseCases");
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(
    null
  );

  // Construction milestone images mapping
  const milestoneImages = {
    sitePreparation: {
      src: "/images/construction.jpg",
      alt: "Site preparation and excavation work",
      description:
        "Heavy machinery clearing the site and digging foundation trenches",
    },
    foundation: {
      src: "/images/construction.jpg",
      alt: "Foundation and basement construction",
      description:
        "Concrete foundation being poured and basement walls completed",
    },
    structural: {
      src: "/images/construction.jpg",
      alt: "Structural framework installation",
      description: "Steel structure being erected and floors being installed",
    },
    exterior: {
      src: "/images/construction.jpg",
      alt: "Exterior walls and roofing work",
      description: "Facade installation and roof waterproofing in progress",
    },
    mep: {
      src: "/images/construction.jpg",
      alt: "MEP systems installation",
      description: "Electrical, plumbing, and HVAC systems being installed",
    },
    interior: {
      src: "/images/construction.jpg",
      alt: "Interior finishing work",
      description: "Drywall installation, flooring, and kitchen setup",
    },
    amenities: {
      src: "/images/construction.jpg",
      alt: "Amenities and landscaping",
      description: "Gym, lounge, and garden installation",
    },
    inspection: {
      src: "/images/construction.jpg",
      alt: "Final inspection and handover",
      description: "Quality checks, permits, and final delivery preparation",
    },
  };

  return (
    <section id="progress" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-6">
            🚀 75% Complete - Limited Time Investment Opportunity
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("progress.title")}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t("progress.description")}
          </p>

          {/* Compelling Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                €2.4M
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Investment Value
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                18
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Units Already Sold
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                Q2 2024
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Completion Date
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("progress.overallProgress")}
                </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-3">
                {[
                  {
                    key: "sitePreparation",
                    status: "completed",
                    icon: CheckCircle,
                  },
                  { key: "foundation", status: "completed", icon: CheckCircle },
                  { key: "structural", status: "completed", icon: CheckCircle },
                  { key: "exterior", status: "completed", icon: CheckCircle },
                  { key: "mep", status: "completed", icon: CheckCircle },
                  { key: "interior", status: "current", icon: Clock },
                  { key: "amenities", status: "pending", icon: Circle },
                  { key: "inspection", status: "pending", icon: Circle },
                ].map((milestone) => {
                  const Icon = milestone.icon;
                  const isSelected = selectedMilestone === milestone.key;
                  const isClickable =
                    milestone.status === "completed" ||
                    milestone.status === "current";

                  return (
                    <div
                      key={milestone.key}
                      className={`group cursor-pointer transition-all duration-300 focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 focus:border-transparent ${
                        isClickable ? "hover:scale-[1.02] hover:shadow-lg" : ""
                      } ${isSelected ? "ring-2 ring-green-400 shadow-lg rounded-xl" : ""}`}
                      onClick={() =>
                        isClickable &&
                        setSelectedMilestone(
                          selectedMilestone === milestone.key
                            ? null
                            : milestone.key
                        )
                      }
                    >
                      <div
                        className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 ${
                          milestone.status === "completed"
                            ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                            : milestone.status === "current"
                              ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                              : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 ${
                            milestone.status === "completed"
                              ? "text-green-500"
                              : milestone.status === "current"
                                ? "text-blue-500"
                                : "text-gray-400"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              milestone.status === "current"
                                ? "animate-pulse"
                                : ""
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`font-medium ${
                              milestone.status === "completed"
                                ? "text-gray-900 dark:text-white"
                                : milestone.status === "current"
                                  ? "text-gray-900 dark:text-white"
                                  : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {t(`progress.milestones.${milestone.key}.title`)}
                          </div>
                          <div
                            className={`text-sm ${
                              milestone.status === "completed"
                                ? "text-gray-600 dark:text-gray-400"
                                : milestone.status === "current"
                                  ? "text-gray-600 dark:text-gray-400"
                                  : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {t(`progress.milestones.${milestone.key}.date`)}
                          </div>
                          <div
                            className={`text-xs ${
                              milestone.status === "completed"
                                ? "text-gray-500 dark:text-gray-400"
                                : milestone.status === "current"
                                  ? "text-gray-500 dark:text-gray-400"
                                  : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {t(
                              `progress.milestones.${milestone.key}.description`
                            )}
                          </div>
                        </div>
                        {isClickable && (
                          <ChevronRight
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              isSelected
                                ? "rotate-90"
                                : "group-hover:translate-x-1"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-6">
                {selectedMilestone ? (
                  <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {t(`progress.milestones.${selectedMilestone}.title`)}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(`progress.milestones.${selectedMilestone}.date`)}
                        </p>
                      </div>
                    </div>

                    {/* Construction Image */}
                    <div className="mb-6">
                      <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <Image
                          src={
                            milestoneImages[
                              selectedMilestone as keyof typeof milestoneImages
                            ].src
                          }
                          alt={
                            milestoneImages[
                              selectedMilestone as keyof typeof milestoneImages
                            ].alt
                          }
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3">
                            <Camera className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                        {
                          milestoneImages[
                            selectedMilestone as keyof typeof milestoneImages
                          ].description
                        }
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          What was accomplished:
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t(
                            `progress.milestones.${selectedMilestone}.description`
                          )}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {t(`progress.milestones.${selectedMilestone}.date`)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {selectedMilestone === "sitePreparation" &&
                              "12 workers"}
                            {selectedMilestone === "foundation" && "18 workers"}
                            {selectedMilestone === "structural" && "25 workers"}
                            {selectedMilestone === "exterior" && "15 workers"}
                            {selectedMilestone === "mep" && "20 workers"}
                            {selectedMilestone === "interior" && "22 workers"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon
                          className="w-12 h-12 text-gray-400 mx-auto mb-2"
                          aria-label="Construction photos placeholder"
                        />
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {t("progress.photosPlaceholder")}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                          Click on a completed milestone to see details
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
