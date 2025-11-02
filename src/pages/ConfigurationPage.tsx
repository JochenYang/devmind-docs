import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { configurationData } from "../data/configurationData";

const ConfigurationPage: React.FC = () => {
  const { t, language } = useLanguage();
  const data = configurationData[language];
  const configSections = data.sections;

  const ConfigTable = ({ section }: { section: any }) => (
    <div className="mb-12">
      <h3 className="text-lg font-medium text-black mb-3">{section.title}</h3>
      <p className="text-base text-gray-700 mb-6">{section.description}</p>
      <div className="bg-white border border-gray-300 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-swiss-surface-subtle">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-black">
                  {data.tableHeaders.paramName}
                </th>
                <th className="text-left p-4 text-sm font-medium text-black">
                  {data.tableHeaders.type}
                </th>
                <th className="text-left p-4 text-sm font-medium text-black">
                  {data.tableHeaders.default}
                </th>
                <th className="text-left p-4 text-sm font-medium text-black">
                  {data.tableHeaders.description}
                </th>
              </tr>
            </thead>
            <tbody>
              {section.fields.map((field: any, index: number) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="p-4 text-sm font-code text-gray-700">
                    {field.name}
                  </td>
                  <td className="p-4 text-sm text-gray-600">{field.type}</td>
                  <td className="p-4 text-sm font-code text-gray-600">
                    {field.default}
                  </td>
                  <td className="p-4 text-sm text-gray-700">
                    {field.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="relative">
        {/* 固定侧边导航 */}
        <aside className="w-80 h-screen border-r border-gray-300 bg-white p-6 overflow-y-auto fixed left-0 top-0">
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {data.sidebar.title}
              </h3>
              <ul className="space-y-2">
                {data.sidebar.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-gray-600 hover:text-black"
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {data.sidebar.links.title}
              </h3>
              <ul className="space-y-2">
                {data.sidebar.links.items.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-600 hover:text-black"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 p-8 ml-80">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-black mb-6">
              {t("configuration.title")}
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              {t("configuration.subtitle")}
            </p>

            {/* 完整配置示例 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-8">
                {t("configuration.fullExample")}
              </h2>
              <div className="bg-white border border-gray-300">
                <div className="p-6">
                  <div className="font-mono text-sm text-gray-700 text-sm">
                    <div>{"{"}</div>
                    <div className="ml-4">
                      "database_path": "~/.devmind/memory.db",
                    </div>
                    <div className="ml-4">
                      "max_contexts_per_session": 1000,
                    </div>
                    <div className="ml-4">"quality_threshold": 0.3,</div>
                    <div className="ml-4">"embedding_model": "local",</div>
                    <div className="ml-4">"auto_save_interval": 30000,</div>
                    <div className="ml-4">"ignored_patterns": [</div>
                    <div className="ml-8">"node_modules/**",</div>
                    <div className="ml-8">".git/**",</div>
                    <div className="ml-8">"dist/**"</div>
                    <div className="ml-4">],</div>
                    <div className="ml-4">"included_extensions": [</div>
                    <div className="ml-8">".js", ".ts", ".py", ".go"</div>
                    <div className="ml-4">],</div>
                    <div className="ml-4">"project_detection": {"{"}</div>
                    <div className="ml-8">"enable_git_analysis": true,</div>
                    <div className="ml-8">
                      "enable_package_detection": true,
                    </div>
                    <div className="ml-8">
                      "enable_language_detection": true
                    </div>
                    <div className="ml-4">{"}"},</div>
                    <div className="ml-4">"context_extraction": {"{"}</div>
                    <div className="ml-8">"max_code_chunk_lines": 100,</div>
                    <div className="ml-8">"enable_comment_analysis": true,</div>
                    <div className="ml-8">
                      "enable_structure_analysis": true,
                    </div>
                    <div className="ml-8">"enable_quality_scoring": true</div>
                    <div className="ml-4">{"}"},</div>
                    <div className="ml-4">"storage": {"{"}</div>
                    <div className="ml-8">"enable_compression": false,</div>
                    <div className="ml-8">"enable_full_text_search": true,</div>
                    <div className="ml-8">"enable_embeddings": false,</div>
                    <div className="ml-8">"backup_interval": 86400000</div>
                    <div className="ml-4">{"}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 配置参数详解 */}
            {configSections.map((section, index) => (
              <section
                key={index}
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
                className="mb-16"
              >
                <ConfigTable section={section} />
              </section>
            ))}

            {/* 配置建议 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-8">
                {t("configuration.configSuggestions")}
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("configuration.performanceOptimization")}
                  </h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    {t("configuration.performanceTips").map(
                      (tip: string, index: number) => (
                        <li key={index}>• {tip}</li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("configuration.qualityControl")}
                  </h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    {t("configuration.qualityTips").map(
                      (tip: string, index: number) => (
                        <li key={index}>• {tip}</li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("configuration.privacyStorage")}
                  </h3>
                  <ul className="space-y-2 text-base text-gray-700">
                    {t("configuration.privacyTips").map(
                      (tip: string, index: number) => (
                        <li key={index}>• {tip}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* 下一步 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-8">
                {t("common.nextSteps")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/api-reference"
                  className="block p-6 border border-gray-300 hover:border-swiss-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("nav.apiReference")}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "了解JavaScript API的使用方法"
                      : "Learn how to use JavaScript APIs"}
                  </p>
                </Link>
                <Link
                  to="/use-cases"
                  className="block p-6 border border-gray-300 hover:border-swiss-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("nav.useCases")}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "探索实际应用场景和最佳实践"
                      : "Explore real-world use cases and best practices"}
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConfigurationPage;
