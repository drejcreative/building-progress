import React from "react";

export default function VipCta() {
  return (
    <div className="mt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
          Limited Availability
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
          👉 Secure Your VIP Investor Spot
        </h2>
        <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Only <strong>2 VIP Properties Accepted Monthly</strong> — Extreme
          scarcity creates maximum urgency and ensures premium service quality.
          Join the elite investors who get exclusive access.
        </p>
        <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
          Apply Now
        </button>
      </div>
    </div>
  );
}
