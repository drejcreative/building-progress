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
          <span className="font-semibold">ProInvest Showcase</span>
          <span className="text-blue-200">•</span>
          <span>This is how your building website will look</span>
          <span className="text-blue-200">•</span>
          <Link href="/" className="underline hover:no-underline">
            Back to ProInvest
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
                  Belgrade Luxury Residences
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Premium Living in the Heart of Belgrade
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  Powered by ProInvest • Livion Real Estate
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#overview"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Overview
              </a>
              <a
                href="#apartments"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Apartments
              </a>
              <a
                href="#location"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Location
              </a>
              <a
                href="#progress"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Progress
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
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
                Construction: 75% Complete
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Belgrade Luxury Residences
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
                Premium living in the heart of Belgrade. 24 luxury apartments
                with world-class amenities and stunning city views.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>View Available Units</span>
                </button>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Video className="w-5 h-5" />
                  <span>Virtual Tour</span>
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
                <div className="text-sm text-gray-600">Total Units</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">18</div>
                <div className="text-sm text-gray-600">Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">€2.1M</div>
                <div className="text-sm text-gray-600">Total Value</div>
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
                Luxury Living Redefined
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Belgrade Luxury Residences offers an unparalleled living
                experience in the heart of Serbia&apos;s capital. Each apartment
                is designed with premium materials and finishes, featuring
                open-concept layouts, floor-to-ceiling windows, and private
                balconies with stunning city views.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Premium Location
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    24/7 Security
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Underground Parking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Fitness Center
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Garden Terrace
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Coffee Lounge
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
                      Completion
                    </div>
                    <div className="text-sm text-gray-600">Q2 2024</div>
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
              Available Apartments
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Choose from our selection of premium apartments, each designed for
              modern luxury living
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between mb-8 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                <Grid className="w-4 h-4" />
                <span>View</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                6 apartments available
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
                    {apartment.status}
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
                      <span>View Details</span>
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
                Prime Location
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Located in the heart of Belgrade, our residences offer easy
                access to the city&apos;s finest amenities, cultural
                attractions, and business districts. Everything you need is just
                minutes away.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    5 min to Belgrade Center
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    10 min to Airport
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    2 min to Metro Station
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Walking distance to shops
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    Interactive Map
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
              Construction Progress
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Stay updated on our construction progress with real-time updates
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Overall Progress
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
                        Site Preparation & Excavation
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        January 15, 2024
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Site cleared, foundation trenches dug
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Foundation & Basement
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        February 28, 2024
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Concrete foundation poured, basement walls completed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Structural Framework
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        March 15, 2024
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Steel structure erected, floors installed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Exterior Walls & Roofing
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        April 10, 2024
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Facade installation, roof waterproofing
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        MEP Systems
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        April 30, 2024
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Electrical, plumbing, HVAC installation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        Interior Finishing
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        In Progress - 60%
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Drywall, flooring, kitchen installations
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-500 dark:text-gray-400">
                        Amenities & Landscaping
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        May 15, 2024
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Gym, lounge, garden installation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-500 dark:text-gray-400">
                        Final Inspection & Handover
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        June 1, 2024
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Quality checks, permits, delivery
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Latest Construction Photos
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
            <h2 className="text-4xl font-bold mb-4">
              Ready to Make This Your Home?
            </h2>
            <p className="text-xl text-blue-100">
              Contact our sales team to schedule a visit or learn more about
              available units
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">+381 11 123 4567</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Us
              </h3>
              <p className="text-blue-100">info@belgradeluxury.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Visit Us
              </h3>
              <p className="text-blue-100">Belgrade, Serbia</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Visit
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
                <span className="text-xl font-bold">
                  Belgrade Luxury Residences
                </span>
              </div>
              <p className="text-gray-400">
                Premium living in the heart of Belgrade. Experience luxury
                redefined.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
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
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+381 11 123 4567</li>
                <li>info@belgradeluxury.com</li>
                <li>Belgrade, Serbia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
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
            <p>&copy; 2024 Belgrade Luxury Residences. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
