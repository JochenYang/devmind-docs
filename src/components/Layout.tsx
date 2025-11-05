import React from "react";
import { Link } from "react-router-dom";
import SearchTrigger from "./SearchTrigger";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
  onSearchClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearchClick }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航 */}
      <nav className="h-16 border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-black font-bold text-lg">
              DevMind MCP
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/getting-started"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("nav.gettingStarted")}
              </Link>
              <Link
                to="/tools"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("nav.tools")}
              </Link>
              <Link
                to="/configuration"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("nav.configuration")}
              </Link>
              <Link
                to="/api-reference"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("nav.apiReference")}
              </Link>
              <Link
                to="/use-cases"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("nav.useCases")}
              </Link>
              <Link
                to="/faq"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("nav.faq")}
              </Link>
              <Link
                to="/auto-memory"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("nav.autoMemory")}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <SearchTrigger onClick={onSearchClick} />
            <a
              href="https://github.com/JochenYang/Devmind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
