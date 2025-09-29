import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle,
  Video,
  Eye,
  Phone,
  Mail,
  Heart,
  Menu,
  ChevronDown,
  Filter,
  Grid,
  Image,
  Map,
} from "lucide-react";

export default function UseCases() {
  const t = useTranslations("UseCases");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* ProInvest Showcase Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Building2 className="w-4 h-4" />
          <span className="font-semibold">{t("header.showcase")}</span>
          <span className="text-blue-200">•</span>
          <span>{t("header.description")}</span>
          <span className="text-blue-200">•</span>
          <Link href="/" className="underline hover:no-underline">
            {t("header.backToProInvest")}
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
              <a
                href="#overview"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.overview")}
              </a>
              <a
                href="#apartments"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.apartments")}
              </a>
              <a
                href="#location"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.location")}
              </a>
              <a
                href="#progress"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.progress")}
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("navigation.contact")}
              </a>
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
            <button className="md:hidden text-gray-700 dark:text-gray-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Belgrade Luxury Residences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {t("hero.constructionStatus")}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                {t("hero.title")}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>{t("hero.viewUnits")}</span>
                </button>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Video className="w-5 h-5" />
                  <span>{t("hero.virtualTour")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-sm text-gray-600">
                  {t("stats.totalUnits")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">18</div>
                <div className="text-sm text-gray-600">{t("stats.sold")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6</div>
                <div className="text-sm text-gray-600">
                  {t("stats.available")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">€2.1M</div>
                <div className="text-sm text-gray-600">
                  {t("stats.totalValue")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t("overview.title")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {t("overview.description")}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("overview.features.premiumLocation")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("overview.features.security")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("overview.features.parking")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("overview.features.fitness")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("overview.features.garden")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("overview.features.lounge")}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
                alt="Luxury Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {t("overview.completion.title")}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("overview.completion.date")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Section */}
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
            {[
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
            ].map((apartment, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={apartment.image}
                    alt={apartment.type}
                    className="w-full h-full object-cover"
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

      {/* Location Section */}
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

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.distances.center")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.distances.airport")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.distances.metro")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {t("location.distances.shops")}
                  </span>
                </div>
              </div>
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

      {/* Progress Section */}
      <section id="progress" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("progress.title")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t("progress.description")}
            </p>
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

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t("progress.milestones.sitePreparation.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("progress.milestones.sitePreparation.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.sitePreparation.description")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t("progress.milestones.foundation.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("progress.milestones.foundation.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.foundation.description")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t("progress.milestones.structural.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("progress.milestones.structural.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.structural.description")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t("progress.milestones.exterior.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("progress.milestones.exterior.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.exterior.description")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t("progress.milestones.mep.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("progress.milestones.mep.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.mep.description")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t("progress.milestones.interior.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("progress.milestones.interior.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.interior.description")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.amenities.title")}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.amenities.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.amenities.description")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.inspection.title")}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.inspection.date")}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("progress.milestones.inspection.description")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {t("progress.photosPlaceholder")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("contact.title")}</h2>
            <p className="text-xl text-blue-100">{t("contact.description")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t("contact.call.title")}
              </h3>
              <p className="text-blue-100">{t("contact.call.phone")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t("contact.email.title")}
              </h3>
              <p className="text-blue-100">{t("contact.email.address")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t("contact.visit.title")}
              </h3>
              <p className="text-blue-100">{t("contact.visit.location")}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t("contact.scheduleVisit")}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                  <a href="#" className="hover:text-white transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Apartments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Progress
                  </a>
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
