"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  Video,
  Play,
  Phone,
  Mail,
  Heart,
  Menu,
  User,
  Bed,
  Bath,
  Square,
  Ruler,
  Layers,
} from "lucide-react";
export default function ApartmentDetails() {
  const t = useTranslations("ApartmentDetails");
  const [isFirstSticky, setIsFirstSticky] = useState(false);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (thirdSectionRef.current) {
        const rect = thirdSectionRef.current.getBoundingClientRect();
        // When the third section is completely out of view (above the viewport)
        setIsFirstSticky(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* ProInvest Showcase Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Building2 className="w-4 h-4" />
          <Link href="/" className="font-semibold hover:underline">
            {t("header.showcase")}
          </Link>
          <span className="text-blue-200">•</span>
          <span>{t("header.description")}</span>
          <span className="text-blue-200">•</span>
          <Link href="/use-cases" className="underline hover:no-underline">
            {t("header.backToBuilding")}
          </Link>
        </div>
      </div>

      {/* Building Website Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("header.title")}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("header.subtitle")}
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  {t("header.poweredBy")}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/use-cases"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.overview")}
              </Link>
              <Link
                href="/use-cases#apartments"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.apartments")}
              </Link>
              <Link
                href="/use-cases#location"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.location")}
              </Link>
              <Link
                href="/use-cases#progress"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.progress")}
              </Link>
              <Link
                href="/use-cases#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.contact")}
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+381 11 123 4567</span>
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Visit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              aria-label="Open mobile menu"
              title="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link
              href="/use-cases"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t("breadcrumb.buildingOverview")}
            </Link>
            <span>/</span>
            <Link
              href="/use-cases#apartments"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {t("breadcrumb.apartments")}
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">
              {t("breadcrumb.currentApartment")}
            </span>
          </div>
        </div>
      </div>

      {/* Apartment Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Apartment Images */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="col-span-2">
                  <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=400&fit=crop"
                      alt="Apartment A205 Living Room"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="text-sm font-bold text-gray-900">
                        A205
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="text-sm font-bold text-green-600">
                        {t("apartment.status")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                    alt="Kitchen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop"
                    alt="Bedroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Apartment Details */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("apartment.title")}
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {t("apartment.description")}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Bed className="w-6 h-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      3
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("apartment.bedrooms")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Bath className="w-6 h-6 flex-shrink-0 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      2
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("apartment.bathrooms")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Square className="w-6 h-6 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      120m²
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("apartment.totalArea")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Layers className="w-6 h-6 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      2nd
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("apartment.floor")}
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t("features.apartmentFeatures")}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.largeBalcony")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.undergroundParking")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.storageRoom")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.homeOffice")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.floorToCeiling")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.premiumKitchen")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {t("features.buildingAmenities")}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.security")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.fitnessCenter")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.gardenTerrace")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.coffeeLounge")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.highSpeedInternet")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {t("features.climateControl")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Tour Section */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 min-w-12 min-h-12 flex-shrink-0 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Video className="w-6 h-6 flex-shrink-0 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {t("virtualTour.title")}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      {t("virtualTour.subtitle")}
                    </p>
                  </div>
                </div>
                <div className="relative h-96 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=400&fit=crop"
                    alt="Virtual Tour Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      className="bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all"
                      aria-label="Play virtual tour video"
                      title="Play virtual tour video"
                    >
                      <Play className="w-12 h-12 text-gray-900" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {t("virtualTour.description")}
                </p>
              </div>

              {/* Floor Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t("floorPlan.title")}
                </h3>
                <div className="relative h-96 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Ruler className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">
                        {t("virtualTour.interactiveFloorPlan")}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        {t("virtualTour.clickToExplore")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div
                ref={firstSectionRef}
                className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 transition-all duration-300 ${
                  isFirstSticky ? "sticky top-6 z-10" : ""
                }`}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {t("pricing.price")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("pricing.pricePerM2")}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("pricing.monthlyPayment")}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      €1,850
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("pricing.maintenanceFee")}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      €180/month
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      {t("pricing.propertyTax")}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      €420/year
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>{t("actions.scheduleViewing")}</span>
                  </button>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>{t("actions.requestInformation")}</span>
                  </button>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>{t("actions.addToFavorites")}</span>
                  </button>
                </div>
              </div>

              {/* Contact Agent */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("contact.title")}
                </h3>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {t("contact.agentName")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("contact.agentTitle")}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t("contact.phone")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t("contact.email")}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4">
                  {t("actions.sendMessage")}
                </button>
              </div>

              {/* Similar Apartments */}
              <div
                ref={thirdSectionRef}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("similarApartments.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {t("similarApartments.apartment1.name")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("similarApartments.apartment1.description")}
                      </div>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {t("similarApartments.apartment1.price")}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {t("similarApartments.apartment2.name")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("similarApartments.apartment2.description")}
                      </div>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {t("similarApartments.apartment2.price")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">{t("footer.title")}</span>
              </div>
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/use-cases"
                    className="hover:text-white transition-colors"
                  >
                    {t("navigation.overview")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases#apartments"
                    className="hover:text-white transition-colors"
                  >
                    {t("navigation.apartments")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases#location"
                    className="hover:text-white transition-colors"
                  >
                    {t("navigation.location")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases#progress"
                    className="hover:text-white transition-colors"
                  >
                    {t("navigation.progress")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+381 11 123 4567</li>
                <li>info@belgradeluxury.com</li>
                <li>Belgrade, Serbia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.followUs")}</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">LI</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
