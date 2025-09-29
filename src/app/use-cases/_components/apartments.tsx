"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Filter, ChevronDown, Grid, Eye, Heart } from "lucide-react";

export default function UseCasesApartments() {
  const t = useTranslations("UseCases");

  const apartments = [
    {
      id: "A101",
      type: "2 Bedroom",
      size: "85m²",
      price: "€285,000",
      floor: "1st Floor",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Balcony", "Parking", "Storage"],
    },
    {
      id: "A205",
      type: "3 Bedroom",
      size: "120m²",
      price: "€420,000",
      floor: "2nd Floor",
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Large Balcony", "Parking", "Storage", "Study"],
    },
    {
      id: "A301",
      type: "Penthouse",
      size: "180m²",
      price: "€750,000",
      floor: "3rd Floor",
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Terrace", "Parking", "Storage", "Study", "Garden"],
    },
  ];

  return (
    <section id="apartments" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("apartments.title")}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("apartments.description")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between mb-8 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
              <Filter className="w-4 h-4" />
              <span>{t("apartments.filter")}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
              <Grid className="w-4 h-4" />
              <span>{t("apartments.view")}</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {t("apartments.availableCount")}
            </span>
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={apartment.image}
                  alt={apartment.type}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t("apartments.status")}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="text-sm font-bold text-gray-900">
                    {apartment.id}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {apartment.type}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {apartment.floor}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {apartment.price}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {apartment.size}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {apartment.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Link
                    href="/use-cases/apartment-details"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{t("apartments.viewDetails")}</span>
                  </Link>
                  <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
