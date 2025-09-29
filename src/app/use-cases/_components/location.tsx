"use client";

import { useTranslations } from "next-intl";
import {
  MapPin,
  Map,
  Plane,
  Train,
  ShoppingBag,
  Clock,
  Navigation,
} from "lucide-react";
import { motion } from "framer-motion";

export default function UseCasesLocation() {
  const t = useTranslations("UseCases");

  const distanceData = [
    {
      icon: Navigation,
      time: t("location.distances.center"),
      destination: t("location.destinations.center"),
      method: t("location.methods.byCar"),
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: Plane,
      time: t("location.distances.airport"),
      destination: t("location.destinations.airport"),
      method: t("location.methods.byCar"),
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      icon: Train,
      time: t("location.distances.metro"),
      destination: t("location.destinations.metro"),
      method: t("location.methods.walking"),
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      icon: ShoppingBag,
      time: t("location.distances.shops"),
      destination: t("location.destinations.shops"),
      method: t("location.methods.walking"),
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
  ];

  return (
    <section id="location" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("location.title")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t("location.description")}
            </p>

            {/* Enhanced Distance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {distanceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`p-4 rounded-xl border-2 ${item.bgColor} ${item.borderColor} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        {item.destination}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {item.method}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Location Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                {t("location.benefits.title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.benefits.cityCenter")}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.benefits.publicTransport")}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.benefits.shopping")}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.benefits.airport")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  {t("location.mapPlaceholder")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
