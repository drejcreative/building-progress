"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function HotIdeaBadge() {
  const t = useTranslations("HomePage.hero.stats");
  const [currentIndex, setCurrentIndex] = useState(0);

  const dynamicOptions = [
    t("dynamic.option1"),
    t("dynamic.option2"),
    t("dynamic.option3"),
    t("dynamic.option4"),
    t("dynamic.option5"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicOptions.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [dynamicOptions.length]);

  return (
    <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200">
      <div className="flex items-center space-x-3">
        <div
          className="w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full flex items-center justify-center animate-pulse"
          style={{ animationDuration: "2s" }}
        >
          <span className="text-white text-xl">🔥</span>
        </div>
        <div>
          <div className="font-bold text-gray-900 text-sm transition-all duration-500 ease-in-out">
            {dynamicOptions[currentIndex]}
          </div>
          <div className="text-xs text-gray-700 flex items-center font-semibold">
            <span className="ml-1">{t("trending")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
