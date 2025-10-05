"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { sendApplicationEmails } from "@/utils/send-application-emails";

export default function ApplicationForm() {
  const t = useTranslations("GetStarted");
  const locale = useLocale();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    propertyLocation: "",
    propertyValue: "",
    timeline: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Log form data
      console.log("Form submitted with data:", formData);

      // Send emails using the new service
      await sendApplicationEmails({ ...formData, locale });

      // Log success
      console.log("Form submission and emails sent successfully!");
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        propertyLocation: "",
        propertyValue: "",
        timeline: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("applicationForm.title")}
          </h2>
          <p className="text-gray-700 dark:text-white/70">
            {t("applicationForm.description")}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t("applicationForm.form.firstName")} *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder={t("applicationForm.form.placeholders.firstName")}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t("applicationForm.form.lastName")} *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder={t("applicationForm.form.placeholders.lastName")}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t("applicationForm.form.email")} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder={t("applicationForm.form.placeholders.email")}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {t("applicationForm.form.phone")} *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder={t("applicationForm.form.placeholders.phone")}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {t("applicationForm.form.company")}
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder={t("applicationForm.form.placeholders.company")}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {t("applicationForm.form.propertyLocation")} *
            </label>
            <select
              name="propertyLocation"
              value={formData.propertyLocation}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="">
                {t("applicationForm.form.placeholders.propertyLocation")}
              </option>
              <option value="belgrade">
                {t("applicationForm.form.locations.belgrade")}
              </option>
              <option value="novi-sad">
                {t("applicationForm.form.locations.noviSad")}
              </option>
              <option value="nis">
                {t("applicationForm.form.locations.nis")}
              </option>
              <option value="budva">
                {t("applicationForm.form.locations.budva")}
              </option>
              <option value="kotor">
                {t("applicationForm.form.locations.kotor")}
              </option>
              <option value="podgorica">
                {t("applicationForm.form.locations.podgorica")}
              </option>
              <option value="zagreb">
                {t("applicationForm.form.locations.zagreb")}
              </option>
              <option value="dubrovnik">
                {t("applicationForm.form.locations.dubrovnik")}
              </option>
              <option value="split">
                {t("applicationForm.form.locations.split")}
              </option>
              <option value="other">
                {t("applicationForm.form.locations.other")}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {t("applicationForm.form.propertyValue")} *
            </label>
            <select
              name="propertyValue"
              value={formData.propertyValue}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="">
                {t("applicationForm.form.placeholders.propertyValue")}
              </option>
              <option value="under-100k">
                {t("applicationForm.form.valueRanges.under100k")}
              </option>
              <option value="100k-200k">
                {t("applicationForm.form.valueRanges.100k200k")}
              </option>
              <option value="200k-350k">
                {t("applicationForm.form.valueRanges.200k350k")}
              </option>
              <option value="350k-500k">
                {t("applicationForm.form.valueRanges.350k500k")}
              </option>
              <option value="500k-1m">
                {t("applicationForm.form.valueRanges.500k1m")}
              </option>
              <option value="over-1m">
                {t("applicationForm.form.valueRanges.over1m")}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {t("applicationForm.form.timeline")} *
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            >
              <option value="">
                {t("applicationForm.form.placeholders.timeline")}
              </option>
              <option value="immediate">
                {t("applicationForm.form.timelines.immediate")}
              </option>
              <option value="1-3-months">
                {t("applicationForm.form.timelines.1to3months")}
              </option>
              <option value="3-6-months">
                {t("applicationForm.form.timelines.3to6months")}
              </option>
              <option value="6-12-months">
                {t("applicationForm.form.timelines.6to12months")}
              </option>
              <option value="flexible">
                {t("applicationForm.form.timelines.flexible")}
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              {t("applicationForm.form.additionalInfo")}
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder={t(
                "applicationForm.form.placeholders.additionalInfo"
              )}
            ></textarea>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {t("applicationForm.nextSteps.title")}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-white/70">
                  {t
                    .raw("applicationForm.nextSteps.steps")
                    .map((step: string, index: number) => (
                      <li key={index}>• {step}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl text-xl font-bold hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span>
              {isSubmitting
                ? t("emails.confirmation.submitting")
                : submitStatus === "success"
                  ? t("emails.confirmation.successfullySubmitted")
                  : t("applicationForm.submitButton")}
            </span>
            {!isSubmitting && <ArrowRight className="w-6 h-6" />}
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-white/60">
            {t("applicationForm.disclaimer")}
            <br />
            <strong>{t("applicationForm.guarantee")}</strong>
          </p>

          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-center">
              <div className="flex items-center justify-center space-x-2 text-green-700 dark:text-green-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">
                  {t("emails.confirmation.successMessage")}
                </span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                {t("emails.confirmation.successDescription")}
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-center">
              <div className="flex items-center justify-center space-x-2 text-red-700 dark:text-red-300">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">
                  {t("emails.confirmation.errorMessage")}
                </span>
              </div>
              <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                {t("emails.confirmation.errorDescription")}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
