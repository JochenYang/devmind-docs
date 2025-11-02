import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface SearchTriggerProps {
  onClick: () => void;
}

const SearchTrigger: React.FC<SearchTriggerProps> = ({ onClick }) => {
  const { language } = useLanguage();
  const searchText = language === "zh" ? "搜索" : "Search";

  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
      title={`${searchText} (⌘K)`}
    >
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span className="hidden sm:inline text-sm">{searchText}</span>
      <kbd className="hidden sm:inline px-1.5 py-0.5 text-xs bg-gray-100 border border-gray-300 rounded">
        ⌘K
      </kbd>
    </button>
  );
};

export default SearchTrigger;
