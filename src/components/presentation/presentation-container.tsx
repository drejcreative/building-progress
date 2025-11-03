"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide4a from "./slides/slide4a";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import Slide8 from "./slides/slide8";
import Slide9 from "./slides/slide9";
import Slide10 from "./slides/slide10";
import Slide12 from "./slides/slide12";

const TOTAL_SLIDES = 12;

interface PresentationContainerProps {
  onClose?: () => void;
  startFullscreen?: boolean;
}

export default function PresentationContainer({
  onClose,
  startFullscreen = false,
}: PresentationContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(startFullscreen);
  const t = useTranslations("Presentation");

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape" && isFullscreen) {
        toggleFullscreen();
      } else if (e.key === "f" || e.key === "F") {
        if (e.target === document.body) {
          toggleFullscreen();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, isFullscreen]);

  // Fullscreen management
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setCurrentSlide(index);
    }
  };

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide4a key="4a" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
    <Slide12 key="12" />,
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label={t("controls.previous")}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
          <span className="text-sm font-medium">
            {t("controls.slide")} {currentSlide + 1} {t("controls.of")} {TOTAL_SLIDES}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label={t("controls.next")}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-amber-400"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`${t("controls.slide")} ${index + 1}`}
          />
        ))}
      </div>

      {/* Top Controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
          aria-label={isFullscreen ? t("controls.exitFullscreen") : t("controls.fullscreen")}
        >
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Keyboard Hints (only show on first load) */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 right-8 z-50 text-xs text-white/50 space-y-1"
        >
          <div>← → Navigate</div>
          <div>F Fullscreen</div>
          <div>ESC Exit</div>
        </motion.div>
      )}
    </div>
  );
}

