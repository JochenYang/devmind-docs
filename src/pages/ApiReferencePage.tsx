import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const ApiReferencePage: React.FC = () => {
  const { t, language } = useLanguage();

  const apiMethods =
    language === "zh"
      ? [
          {
            name: "record_context",
            description: "记录开发上下文",
            params: [
              {
                name: "content",
                type: "string",
                description: "上下文内容文本",
              },
              {
                name: "type",
                type: "string",
                description: "类型(如bug_fix、design_decision)",
              },
              { name: "tags", type: "string[]", description: "标签集合" },
              {
                name: "metadata",
                type: "object",
                description: "元数据(如file、line_range)",
              },
            ],
            returns: "contextId",
            example: `const id = await record_context({
  content: "修复了用户认证模块中的SQL注入漏洞",
  type: "bug_fix",
  tags: ["security", "authentication", "sql"],
  metadata: {
    file: "src/auth/login.ts",
    line_range: [45, 67]
  }
});`,
          },
          {
            name: "semantic_search",
            description: "语义搜索相关上下文",
            params: [
              {
                name: "query",
                type: "string",
                description: "检索语义短语或关键词",
              },
              { name: "limit", type: "number", description: "返回条数上限" },
              { name: "type", type: "string", description: "上下文类型过滤" },
              { name: "tags", type: "string[]", description: "标签过滤" },
              {
                name: "timeRange",
                type: "object",
                description: "时间范围过滤(如{days: 30})",
              },
            ],
            returns: "匹配上下文列表",
            example: `const results = await semantic_search({
  query: "authentication implementation",
  limit: 10,
  type: "code",
  tags: ["auth"],
  timeRange: { days: 30 }
});`,
          },
        ]
      : [
          {
            name: "record_context",
            description: "Record development context",
            params: [
              {
                name: "content",
                type: "string",
                description: "Context content text",
              },
              {
                name: "type",
                type: "string",
                description: "Type (e.g., bug_fix, design_decision)",
              },
              { name: "tags", type: "string[]", description: "Tag collection" },
              {
                name: "metadata",
                type: "object",
                description: "Metadata (e.g., file, line_range)",
              },
            ],
            returns: "contextId",
            example: `const id = await record_context({
  content: "Fixed SQL injection vulnerability in user authentication module",
  type: "bug_fix",
  tags: ["security", "authentication", "sql"],
  metadata: {
    file: "src/auth/login.ts",
    line_range: [45, 67]
  }
});`,
          },
          {
            name: "semantic_search",
            description: "Semantic search for related contexts",
            params: [
              {
                name: "query",
                type: "string",
                description: "Search semantic phrase or keywords",
              },
              {
                name: "limit",
                type: "number",
                description: "Maximum number of results",
              },
              {
                name: "type",
                type: "string",
                description: "Context type filter",
              },
              { name: "tags", type: "string[]", description: "Tag filter" },
              {
                name: "timeRange",
                type: "object",
                description: "Time range filter (e.g., {days: 30})",
              },
            ],
            returns: "Matched context list",
            example: `const results = await semantic_search({
  query: "authentication implementation",
  limit: 10,
  type: "code",
  tags: ["auth"],
  timeRange: { days: 30 }
});`,
          },
        ];

  const ApiMethodCard = ({ method }: { method: any }) => (
    <div className="bg-white p-8 border border-gray-300 mb-8">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-black mb-2">{method.name}</h3>
        <p className="text-base text-gray-700 mb-4">{method.description}</p>
        <div className="text-sm text-gray-600">
          <strong>{t("common.returns")}:</strong> {method.returns}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-black mb-3">
            {t("common.parameters")}
          </h4>
          <div className="bg-gray-100 border border-gray-300 overflow-hidden">
            <table className="w-full">
              <thead className="bg-swiss-surface-subtle">
                <tr>
                  <th className="text-left p-3 text-sm font-medium text-black">
                    {t("common.name")}
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-black">
                    {t("common.type")}
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-black">
                    {t("common.description")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {method.params.map((param: any, index: number) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="p-3 text-sm font-code text-gray-700">
                      {param.name}
                    </td>
                    <td className="p-3 text-sm text-gray-600">{param.type}</td>
                    <td className="p-3 text-sm text-gray-700">
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-black mb-3">
            {t("common.examples")}
          </h4>
          <div className="bg-white border border-gray-300 p-4">
            <pre className="font-mono text-sm text-gray-700 text-sm whitespace-pre-wrap">
              {method.example}
            </pre>
          </div>
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
                {language === "zh" ? "API方法" : "API Methods"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#record-context"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("apiReference.recordContext")}
                  </a>
                </li>
                <li>
                  <a
                    href="#semantic-search"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("apiReference.semanticSearch")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {t("common.relatedLinks")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/tools"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("nav.tools")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/configuration"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("nav.configuration")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/use-cases"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("nav.useCases")}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 p-8 ml-80">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-black mb-6">
              {t("apiReference.title")}
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              {t("apiReference.subtitle")}
            </p>

            {/* API概述 */}
            <section className="mb-16">
              <div className="bg-gray-100 p-6 border border-gray-300">
                <h2 className="text-2xl font-bold text-black mb-6">
                  {t("apiReference.apiOverview")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {apiMethods.map((method, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-300 bg-white"
                    >
                      <h3 className="text-lg font-medium text-black mb-2">
                        {method.name}
                      </h3>
                      <p className="text-base text-gray-700">
                        {method.description}
                      </p>
                      <div className="text-sm text-gray-600 mt-2">
                        {t("common.returns")}: {method.returns}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* API方法详解 */}
            {apiMethods.map((method, index) => (
              <section
                key={index}
                id={method.name.replace("_", "-")}
                className="mb-16"
              >
                <ApiMethodCard method={method} />
              </section>
            ))}

            {/* 下一步 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-8">
                {t("common.nextSteps")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Link
                  to="/tools"
                  className="block p-6 border border-gray-300 hover:border-swiss-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("nav.tools")}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "了解18个MCP工具的详细用法"
                      : "Learn about 18 MCP tools in detail"}
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

export default ApiReferencePage;
