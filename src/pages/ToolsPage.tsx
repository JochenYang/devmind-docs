import React from "react";
import { Link } from "react-router-dom";
import {
  MCP_TOOLS,
  TOOL_CATEGORIES,
  getToolsByCategory,
  getAllCategories,
} from "../data/sourceData";
import { useLanguage } from "../i18n/LanguageContext";
import { MCP_TOOL_TRANSLATIONS } from "../data/translationMappings";

const ToolsPage: React.FC = () => {
  const { language } = useLanguage();
  const categories = getAllCategories();

  const translate = (text: string) => {
    if (language === "zh") return text;
    return MCP_TOOL_TRANSLATIONS[text] || text;
  };

  // 处理导航点击，滚动到对应章节
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ToolCard = ({ tool }: { tool: any }) => {
    const requiredParams = tool.inputSchema.required || [];
    const allParams = Object.keys(tool.inputSchema.properties);
    const properties = tool.inputSchema.properties;

    // 渲染参数详情
    const renderParamDetails = (paramName: string, isRequired: boolean) => {
      const param = properties[paramName];
      if (!param) return null;

      return (
        <div
          key={paramName}
          className="mb-3 pb-3 border-b border-gray-200 last:border-0"
        >
          <div className="flex items-start gap-2">
            <code className="text-sm font-mono text-red-600">{paramName}</code>
            {isRequired && (
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                {language === "zh" ? "必需" : "required"}
              </span>
            )}
          </div>
          {param.description && (
            <p className="text-sm text-gray-600 mt-1">{param.description}</p>
          )}
          <div className="text-xs text-gray-500 mt-1">
            <span className="font-medium">
              {language === "zh" ? "类型:" : "Type:"}
            </span>{" "}
            {param.type}
            {param.enum && (
              <>
                <br />
                <span className="font-medium">
                  {language === "zh" ? "可选值:" : "Values:"}
                </span>{" "}
                <code className="text-xs bg-gray-100 px-1">
                  {param.enum.join(" | ")}
                </code>
              </>
            )}
          </div>
        </div>
      );
    };

    return (
      <div className="bg-white p-6 border border-gray-300 hover:border-black transition-colors">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-black mb-2">{tool.name}</h3>
          <p className="text-base text-gray-700">
            {translate(tool.description)}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-sm font-medium text-gray-600">
              {language === "zh" ? "类别:" : "Category:"}
            </span>
            <span className="text-sm text-gray-700 ml-2">
              {translate(tool.category)}
            </span>
          </div>

          {/* 必需参数详情 */}
          {requiredParams.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                {language === "zh" ? "必需参数" : "Required Parameters"}
              </h4>
              <div className="bg-gray-50 p-3 rounded">
                {requiredParams.map((param) => renderParamDetails(param, true))}
              </div>
            </div>
          )}

          {/* 可选参数详情 */}
          {allParams.filter((p) => !requiredParams.includes(p)).length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                {language === "zh" ? "可选参数" : "Optional Parameters"}
              </h4>
              <div className="bg-gray-50 p-3 rounded">
                {allParams
                  .filter((p) => !requiredParams.includes(p))
                  .map((param) => renderParamDetails(param, false))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        {/* 侧边导航 */}
        <aside className="w-80 h-screen border-r border-gray-300 bg-white p-6 overflow-y-auto fixed left-0 top-0">
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {language === "zh" ? "MCP工具" : "MCP Tools"}
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <a
                      href={`#${category}`}
                      onClick={(e) => handleNavClick(e, category)}
                      className="text-sm text-gray-600 hover:text-black cursor-pointer"
                    >
                      {translate(category)} (
                      {
                        TOOL_CATEGORIES[
                          category as keyof typeof TOOL_CATEGORIES
                        ]
                      }
                      )
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {language === "zh" ? "相关链接" : "Related Links"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/getting-started"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {language === "zh" ? "快速开始" : "Getting Started"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api-reference"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {language === "zh" ? "API参考" : "API Reference"}
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
              {language === "zh" ? "MCP工具" : "MCP Tools"}
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              {language === "zh"
                ? "DevMind MCP提供18个工具，分为5大类，覆盖会话管理、上下文操作、项目分析、内存优化与系统状态。"
                : "DevMind MCP provides 18 tools in 5 categories, covering session management, context operations, project analysis, memory optimization, and system status."}
            </p>

            {/* 工具总览 */}
            <section className="mb-16">
              <div className="bg-gray-100 p-6 border border-gray-300">
                <h2 className="text-2xl font-bold text-black mb-6">
                  {language === "zh"
                    ? "工具分类总览"
                    : "Tool Categories Overview"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {categories.map((category) => (
                    <div key={category} className="text-center">
                      <div className="text-2xl font-bold text-black mb-2">
                        {
                          TOOL_CATEGORIES[
                            category as keyof typeof TOOL_CATEGORIES
                          ]
                        }
                      </div>
                      <div className="text-sm text-gray-600">
                        {translate(category)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 按分类显示工具 */}
            {categories.map((category) => {
              const tools = getToolsByCategory(category);
              return (
                <section key={category} id={category} className="mb-16">
                  <h2 className="text-2xl font-bold text-black mb-8">
                    {translate(category)} ({tools.length}
                    {language === "zh" ? "个" : " tools"})
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {tools.map((tool, index) => (
                      <ToolCard key={index} tool={tool} />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* 使用示例 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-8">
                {language === "zh" ? "使用示例" : "Usage Examples"}
              </h2>

              <div className="space-y-8">
                {/* record_context 示例 */}
                <div className="bg-white p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-4">
                    {language === "zh"
                      ? "记录上下文示例"
                      : "Record Context Example"}
                  </h3>
                  <div className="font-mono text-sm text-gray-700 mb-4 bg-gray-50 p-4 border border-gray-200 overflow-x-auto">
                    <pre>{`{
  "tool": "record_context",
  "arguments": {
    "type": "bug_fix",
    "content": "修复用户认证模块中的SQL注入漏洞",
    "file_path": "src/auth/login.ts",
    "line_ranges": [[45, 67]],
    "tags": ["security", "authentication", "sql"],
    "change_type": "modify",
    "impact_level": "major"
  }
}`}</pre>
                  </div>
                </div>

                {/* semantic_search 示例 */}
                <div className="bg-white p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-4">
                    {language === "zh"
                      ? "语义搜索示例"
                      : "Semantic Search Example"}
                  </h3>
                  <div className="font-mono text-sm text-gray-700 mb-4 bg-gray-50 p-4 border border-gray-200 overflow-x-auto">
                    <pre>{`{
  "tool": "semantic_search",
  "arguments": {
    "query": "如何实现用户认证",
    "limit": 10,
    "similarity_threshold": 0.7
  }
}`}</pre>
                  </div>
                </div>

                {/* project_analysis_engineer 示例 */}
                <div className="bg-white p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-4">
                    {language === "zh"
                      ? "项目分析示例"
                      : "Project Analysis Example"}
                  </h3>
                  <div className="font-mono text-sm text-gray-700 mb-4 bg-gray-50 p-4 border border-gray-200 overflow-x-auto">
                    <pre>{`{
  "tool": "project_analysis_engineer",
  "arguments": {
    "project_path": "/path/to/project",
    "doc_style": "devmind",
    "language": "zh",
    "auto_save": true
  }
}`}</pre>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-6">
                {language === "zh"
                  ? "更多示例请查看 "
                  : "For more examples, see "}
                <Link
                  to="/api-reference"
                  className="text-red-600 hover:underline"
                >
                  {language === "zh" ? "API参考" : "API Reference"}
                </Link>
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ToolsPage;
