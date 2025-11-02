import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import HomePage from "./pages/HomePage";
import GettingStartedPage from "./pages/GettingStartedPage";
import ToolsPage from "./pages/ToolsPage";
import CliReferencePage from "./pages/CliReferencePage";
import ConfigurationPage from "./pages/ConfigurationPage";
import ApiReferencePage from "./pages/ApiReferencePage";
import UseCasesPage from "./pages/UseCasesPage";
import FAQPage from "./pages/FAQPage";
import SearchModal from "./components/SearchModal";
import Layout from "./components/Layout";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 监听快捷键 Cmd/Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 检查是否按下了 Cmd+K (Mac) 或 Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Layout onSearchClick={() => setIsSearchOpen(true)}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getting-started" element={<GettingStartedPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/cli-reference" element={<CliReferencePage />} />
            <Route path="/configuration" element={<ConfigurationPage />} />
            <Route path="/api-reference" element={<ApiReferencePage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>

          {/* 搜索模态框 */}
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
