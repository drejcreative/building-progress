"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ChevronDown, Grid, List, Eye, Heart } from "lucide-react";

export default function UseCasesApartments() {
  const t = useTranslations("UseCases");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedFloor, setSelectedFloor] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");

  const apartments = [
    {
      id: "A101",
      type: "2 Bedroom",
      size: "85m²",
      price: "€285,000",
      priceValue: 285000,
      floor: "1st Floor",
      floorValue: 1,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Balcony", "Parking", "Storage"],
    },
    {
      id: "A102",
      type: "2 Bedroom",
      size: "90m²",
      price: "€295,000",
      priceValue: 295000,
      floor: "1st Floor",
      floorValue: 1,
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Balcony", "Parking", "Storage", "Study"],
    },
    {
      id: "A201",
      type: "3 Bedroom",
      size: "110m²",
      price: "€380,000",
      priceValue: 380000,
      floor: "2nd Floor",
      floorValue: 2,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Large Balcony", "Parking", "Storage"],
    },
    {
      id: "A205",
      type: "3 Bedroom",
      size: "120m²",
      price: "€420,000",
      priceValue: 420000,
      floor: "2nd Floor",
      floorValue: 2,
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
      priceValue: 750000,
      floor: "3rd Floor",
      floorValue: 3,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Terrace", "Parking", "Storage", "Study", "Garden"],
    },
    {
      id: "A302",
      type: "Penthouse",
      size: "200m²",
      price: "€850,000",
      priceValue: 850000,
      floor: "3rd Floor",
      floorValue: 3,
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop",
      status: "Available",
      features: ["Terrace", "Parking", "Storage", "Study", "Garden", "Pool"],
    },
  ];

  // Filter apartments based on selected filters
  const filteredApartments = apartments.filter((apartment) => {
    const typeMatch =
      selectedType === "all" ||
      apartment.type.toLowerCase().includes(selectedType.toLowerCase());
    const floorMatch =
      selectedFloor === "all" ||
      apartment.floorValue === parseInt(selectedFloor);
    const priceMatch =
      selectedPrice === "all" ||
      (selectedPrice === "low" && apartment.priceValue < 400000) ||
      (selectedPrice === "medium" &&
        apartment.priceValue >= 400000 &&
        apartment.priceValue < 600000) ||
      (selectedPrice === "high" && apartment.priceValue >= 600000);

    return typeMatch && floorMatch && priceMatch;
  });

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

        {/* Enhanced Filters */}
        <motion.div
          className="mb-8 p-6 bg-gray-50 dark:bg-slate-800 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
                onClick={() => setShowFilters(!showFilters)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Filter className="w-4 h-4" />
                <span className="font-medium">{t("apartments.filter")}</span>
                <motion.div
                  animate={{ rotate: showFilters ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <div className="flex items-center space-x-2 bg-white dark:bg-slate-700 rounded-lg p-1">
                <motion.button
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setViewMode("grid")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid className="w-4 h-4" />
                  <span className="text-sm font-medium">Grid</span>
                </motion.button>
                <motion.button
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setViewMode("list")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List className="w-4 h-4" />
                  <span className="text-sm font-medium">List</span>
                </motion.button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {filteredApartments.length} {t("apartments.availableCount")}
              </span>
            </div>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Apartment Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                    >
                      <option value="all">All Types</option>
                      <option value="2 bedroom">2 Bedroom</option>
                      <option value="3 bedroom">3 Bedroom</option>
                      <option value="penthouse">Penthouse</option>
                    </select>
                  </div>

                  {/* Floor Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Floor
                    </label>
                    <select
                      value={selectedFloor}
                      onChange={(e) => setSelectedFloor(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                    >
                      <option value="all">All Floors</option>
                      <option value="1">1st Floor</option>
                      <option value="2">2nd Floor</option>
                      <option value="3">3rd Floor</option>
                    </select>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Price Range
                    </label>
                    <select
                      value={selectedPrice}
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400"
                    >
                      <option value="all">All Prices</option>
                      <option value="low">Under €400k</option>
                      <option value="medium">€400k - €600k</option>
                      <option value="high">Over €600k</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Apartments Display */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredApartments.map((apartment, index) => (
                <motion.div
                  key={apartment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={apartment.image}
                      alt={apartment.type}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {t("apartments.status")}
                    </motion.div>
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
                        <motion.span
                          key={idx}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs"
                          whileHover={{ scale: 1.05 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        href="/use-cases/apartment-details"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                      >
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">
                          {t("apartments.viewDetails")}
                        </span>
                      </Link>
                      <motion.button
                        className="bg-white dark:bg-slate-700 text-gray-700 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredApartments.map((apartment, index) => (
                <motion.div
                  key={apartment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-80 h-48 md:h-auto">
                      <Image
                        src={apartment.image}
                        alt={apartment.type}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <motion.div
                        className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {t("apartments.status")}
                      </motion.div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {apartment.type}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            {apartment.floor} • {apartment.size}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {apartment.id}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {apartment.price}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {apartment.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <Link
                          href="/use-cases/apartment-details"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                        >
                          <Eye className="w-5 h-5" />
                          <span className="font-medium">
                            {t("apartments.viewDetails")}
                          </span>
                        </Link>
                        <motion.button
                          className="bg-white dark:bg-slate-700 text-gray-700 dark:text-white py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Heart className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
