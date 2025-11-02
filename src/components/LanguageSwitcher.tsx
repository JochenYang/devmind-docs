import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: "zh" | "en") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguageLabel = language === "zh" ? "中文" : "EN";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
        title={language === "zh" ? "切换语言" : "Switch Language"}
      >
        {/* 地球图标 */}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-sm">{currentLanguageLabel}</span>
        {/* 下拉箭头 */}
        <svg
          className={`w-3 h-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <button
            onClick={() => handleLanguageChange("zh")}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
              language === "zh" ? "bg-gray-100 font-medium" : ""
            }`}
          >
            中文
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
              language === "en" ? "bg-gray-100 font-medium" : ""
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
