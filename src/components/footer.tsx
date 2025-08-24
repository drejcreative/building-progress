import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="w-8 h-8 text-blue-400" />
              <div>
                <span className="text-2xl font-bold">ProInvest</span>
                <div className="text-sm text-gray-400">
                  <a
                    href="https://livion.rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400"
                  >
                    by Livion Real Estate
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Serbia&apos;s premier property sales service for investors. Zero
              upfront costs, professional marketing, and guaranteed results.
              Part of the Livion Real Estate family.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://livion.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                livion.rs
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Property Marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Virtual Tours
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Legal Support
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Sales Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Progress Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+381 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@proinvest.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Belgrade, Serbia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <a
                  href="https://livion.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  livion.rs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ProInvest by Livion Real Estate. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
