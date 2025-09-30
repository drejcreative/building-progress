"use client";

import { useTranslations } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Shield,
  Clock,
  ArrowRight,
  Building,
} from "lucide-react";

export default function UseCasesContact() {
  const t = useTranslations("UseCases");

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center text-slate-800 mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Building className="w-4 h-4 mr-2" />
            {t("contact.urgency.badge")}
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-slate-900 leading-tight">
            {t("contact.title")}
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="group flex flex-col items-center space-y-4 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                {t("contact.value.fast.title")}
              </h3>
              <p className="text-slate-600 text-center text-sm">
                {t("contact.value.fast.description")}
              </p>
            </div>
            <div className="group flex flex-col items-center space-y-4 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                {t("contact.value.expert.title")}
              </h3>
              <p className="text-slate-600 text-center text-sm">
                {t("contact.value.expert.description")}
              </p>
            </div>
            <div className="group flex flex-col items-center space-y-4 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                {t("contact.value.guaranteed.title")}
              </h3>
              <p className="text-slate-600 text-center text-sm">
                {t("contact.value.guaranteed.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Phone - Primary CTA */}
          <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-8 text-center border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <Phone className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {t("contact.call.title")}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              {t("contact.call.description")}
            </p>
            <div className="mt-auto">
              <a
                href={`tel:${t("contact.call.phone")}`}
                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-3" />
                {t("contact.call.phone")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <p className="text-emerald-600 text-sm mt-4 font-medium">
                {t("contact.call.urgency")}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 text-center border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {t("contact.email.title")}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              {t("contact.email.description")}
            </p>
            <div className="mt-auto">
              <a
                href={`mailto:${t("contact.email.address")}`}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-3" />
                {t("contact.email.cta")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <p className="text-blue-600 text-sm mt-4 font-medium">
                {t("contact.email.response")}
              </p>
            </div>
          </div>

          {/* Visit */}
          <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 text-center border-2 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {t("contact.visit.title")}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              {t("contact.visit.description")}
            </p>
            <div className="mt-auto">
              <button className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <MapPin className="w-5 h-5 mr-3" />
                {t("contact.visit.cta")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <p className="text-amber-600 text-sm mt-4 font-medium">
                {t("contact.visit.availability")}
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 mb-16 max-w-5xl mx-auto border border-slate-200 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              {t("contact.socialProof.title")}
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
              <span className="text-slate-700 ml-4 text-xl font-bold">
                {t("contact.socialProof.rating")}
              </span>
            </div>
            <p className="text-slate-600 text-lg">
              {t("contact.socialProof.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-3">
                {t("contact.stats.properties")}
              </div>
              <p className="text-slate-600 font-medium">
                {t("contact.stats.propertiesLabel")}
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">
                {t("contact.stats.sold")}
              </div>
              <p className="text-slate-600 font-medium">
                {t("contact.stats.soldLabel")}
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-3">
                {t("contact.stats.satisfaction")}
              </div>
              <p className="text-slate-600 font-medium">
                {t("contact.stats.satisfactionLabel")}
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-12 py-8 rounded-3xl max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Quality Guarantee</h3>
            </div>
            <p className="text-xl font-semibold text-emerald-50">
              {t("contact.finalCta.guarantee")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
