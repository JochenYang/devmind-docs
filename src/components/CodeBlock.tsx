import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "bash",
  showLineNumbers = false,
}) => {
  const [copied, setCopied] = useState(false);
  const { language: lang } = useLanguage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const lines = code.split("\n");

  const copyText = lang === "zh" ? "复制" : "Copy";
  const copiedText = lang === "zh" ? "已复制" : "Copied";
  const copyTitle = copied
    ? copiedText + "!"
    : lang === "zh"
    ? "复制代码"
    : "Copy code";

  return (
    <div className="relative group">
      <div className="bg-white p-6 border border-gray-300">
        <div className="relative">
          {/* 复制按钮 */}
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all opacity-0 group-hover:opacity-100"
            title={copyTitle}
          >
            {copied ? (
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {copiedText}
              </span>
            ) : (
              <span className="flex items-center gap-1">
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copyText}
              </span>
            )}
          </button>

          {/* 代码内容 */}
          <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200 overflow-x-auto">
            {showLineNumbers ? (
              <div className="flex">
                <div className="select-none text-gray-400 pr-4 border-r border-gray-300 mr-4">
                  {lines.map((_, index) => (
                    <div key={index} className="text-right">
                      {index + 1}
                    </div>
                  ))}
                </div>
                <pre className="flex-1">{code}</pre>
              </div>
            ) : (
              <pre>{code}</pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
