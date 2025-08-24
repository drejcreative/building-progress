import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  CheckCircle,
  Euro,
  Video,
  Camera,
  Globe,
  Shield,
  Zap,
  Star,
  Users,
  TrendingUp,
  Home,
  Car,
  Wifi,
  Coffee,
  Dumbbell,
  TreePine,
  Play,
  Eye,
  Phone,
  Mail,
  Share2,
  Heart,
  Download,
  ArrowRight,
  Clock,
  Target,
  Award,
  BarChart3,
  Menu,
  X,
  ChevronDown,
  Search,
  Filter,
  Grid,
  List,
  BookOpen,
  FileText,
  Image,
  Map,
  Settings,
  User,
  Bell,
  ShoppingCart,
  Bed,
  Bath,
  Square,
  Ruler,
  Maximize2,
  Layers,
  Sun,
  Moon,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";

export default function ApartmentDetails() {
  const t = useTranslations("ApartmentDetails");

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* ProInvest Showcase Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Building2 className="w-4 h-4" />
          <span className="font-semibold">ProInvest Showcase</span>
          <span className="text-blue-200">•</span>
          <span>This is how individual apartment pages will look</span>
          <span className="text-blue-200">•</span>
          <Link href="/use-cases" className="underline hover:no-underline">
            Back to Building Overview
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
              <Link
                href="/use-cases"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Overview
              </Link>
              <Link
                href="/use-cases#apartments"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Apartments
              </Link>
              <Link
                href="/use-cases#location"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Location
              </Link>
              <Link
                href="/use-cases#progress"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Progress
              </Link>
              <Link
                href="/use-cases#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
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
            <button className="md:hidden text-gray-700 dark:text-gray-300">
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
              Building Overview
            </Link>
            <span>/</span>
            <Link
              href="/use-cases#apartments"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Apartments
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">
              Apartment A205
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
                    <img
                      src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=400&fit=crop"
                      alt="Apartment A205 Living Room"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="text-sm font-bold text-gray-900">
                        A205
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="text-sm font-bold text-green-600">
                        Available
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                    alt="Kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop"
                    alt="Bedroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Apartment Details */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Apartment A205 - 3 Bedroom
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Spacious 3-bedroom apartment with stunning city views, premium
                  finishes, and modern amenities. Perfect for families seeking
                  luxury living in the heart of Belgrade.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Bed className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      3
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Bedrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Bath className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      2
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Bathrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Square className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      120m²
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Total Area
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Layers className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      2nd
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Floor
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Apartment Features
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Large balcony with city views
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Underground parking space
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Storage room included
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Home office/study area
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Floor-to-ceiling windows
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Premium kitchen appliances
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Building Amenities
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          24/7 security & concierge
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Fitness center
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Garden terrace
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Coffee lounge
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          High-speed internet
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Climate control system
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Tour Section */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Virtual Tour
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      360° Interactive Experience
                    </p>
                  </div>
                </div>
                <div className="relative h-96 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=400&fit=crop"
                    alt="Virtual Tour Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all">
                      <Play className="w-12 h-12 text-gray-900" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Explore every corner of this beautiful apartment with our
                  immersive 360° virtual tour. Experience the space as if you
                  were there in person.
                </p>
              </div>

              {/* Floor Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Floor Plan
                </h3>
                <div className="relative h-96 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Ruler className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">
                        Interactive Floor Plan
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Click to explore room dimensions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 sticky top-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    €420,000
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    €3,500 per m²
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Monthly Payment
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      €1,850
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Maintenance Fee
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      €180/month
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">
                      Property Tax
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      €420/year
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Schedule Viewing</span>
                  </button>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Request Information</span>
                  </button>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Add to Favorites</span>
                  </button>
                </div>
              </div>

              {/* Contact Agent */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Agent
                </h3>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Milan Petrović
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Senior Sales Agent
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      +381 11 123 4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      milan@belgradeluxury.com
                    </span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4">
                  Send Message
                </button>
              </div>

              {/* Similar Apartments */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Similar Apartments
                </h3>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Apartment A101
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        2 Bedroom • 85m²
                      </div>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        €285,000
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Apartment A301
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Penthouse • 180m²
                      </div>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        €750,000
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
                  <Link
                    href="/use-cases"
                    className="hover:text-white transition-colors"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases#apartments"
                    className="hover:text-white transition-colors"
                  >
                    Apartments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases#location"
                    className="hover:text-white transition-colors"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases#progress"
                    className="hover:text-white transition-colors"
                  >
                    Progress
                  </Link>
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
