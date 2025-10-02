"use client";

import { Globe, ChevronDown } from "lucide-react";
import { useTransition, useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { type Locale } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { setUserLocale } from "@/services/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function onChange(value: string) {
    const locale = value as Locale;
    setSelectedValue(value);
    setIsOpen(false);

    startTransition(async () => {
      // Persist the locale choice in cookies
      await setUserLocale(locale);

      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale }
      );
    });
  }

  const selectedItem = items.find((item) => item.value === selectedValue);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        aria-label={label}
        className="flex items-center space-x-2 rounded-full bg-gray-900/10 backdrop-blur-sm border border-gray-900/20 text-gray-900 hover:bg-gray-900/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all px-4 py-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-sm font-medium"
      >
        <Globe className="w-4 h-4" />
        <span>{selectedItem?.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50 backdrop-blur-sm">
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => onChange(item.value)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${
                selectedValue === item.value
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              } ${item.value === items[0].value ? "rounded-t-xl" : ""} ${
                item.value === items[items.length - 1].value
                  ? "rounded-b-xl"
                  : ""
              }`}
            >
              <span className="text-lg">
                {item.value === "en" ? "🇺🇸" : "🇷🇸"}
              </span>
              <span className="font-medium">{item.label}</span>
              {selectedValue === item.value && (
                <div className="ml-auto w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
