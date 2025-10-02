import React from "react";
import { Brain } from "lucide-react";

interface AIResponseProps {
  aiResponse: string;
}

export const AIResponse: React.FC<AIResponseProps> = ({ aiResponse }) => {
  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
      <div className="flex items-start space-x-3">
        <Brain className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
        <p className="text-blue-800 text-sm">{aiResponse}</p>
      </div>
    </div>
  );
};
