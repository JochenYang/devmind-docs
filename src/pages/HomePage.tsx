import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_INFO } from "../data/sourceData";
import { useLanguage } from "../i18n/LanguageContext";

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  const features =
    language === "zh"
      ? [
          {
            title: "自动记忆监控",
            description:
              "监控文件变更、Git操作和搜索日志，将开发上下文自动沉淀为可检索记忆",
          },
          {
            title: "混合搜索",
            description:
              "结合语义搜索(40%) + 关键词(30%) + 质量评分(20%) + 新鲜度(10%)，精准定位相关上下文",
          },
          {
            title: "100%本地存储",
            description: "使用SQLite本地存储，零云端传输，完全掌控隐私数据",
          },
          {
            title: "18个MCP工具",
            description:
              "提供完整的记忆管理和项目分析工具包，覆盖全流程开发场景",
          },
        ]
      : [
          {
            title: "Automatic Memory Monitoring",
            description:
              "Monitor file changes, Git operations and search logs, automatically consolidate development context into searchable memory",
          },
          {
            title: "Hybrid Search",
            description:
              "Combine semantic search (40%) + keyword (30%) + quality score (20%) + freshness (10%) for precise context location",
          },
          {
            title: "100% Local Storage",
            description:
              "Use SQLite local storage, zero cloud transmission, full privacy control",
          },
          {
            title: "18 MCP Tools",
            description:
              "Complete memory management and project analysis toolkit covering full development scenarios",
          },
        ];

  return (
    <div className="bg-white">
      {/* Hero区域 */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-black mb-6">
              {PROJECT_INFO.name}
            </h1>
            <p className="text-xl text-gray-900 mb-4">{t("home.subtitle")}</p>
            <p className="text-sm text-gray-600 mb-8">
              v{PROJECT_INFO.version} | {PROJECT_INFO.license} License
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/getting-started"
              className="bg-red-600 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              {t("home.quickStart")}
            </Link>
            <a
              href={PROJECT_INFO.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* 核心特性网格 */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            {language === "zh" ? "核心特性" : "Core Features"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 border border-gray-300">
                <h3 className="text-lg font-medium text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-black mb-2">
                {PROJECT_INFO.toolCount}
              </div>
              <div className="text-sm text-gray-600">
                {language === "zh" ? "MCP工具" : "MCP Tools"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">
                v{PROJECT_INFO.version}
              </div>
              <div className="text-sm text-gray-600">
                {language === "zh" ? "当前版本" : "Current Version"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">24</div>
              <div className="text-sm text-gray-600">
                {language === "zh" ? "发布版本" : "Releases"}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <div className="text-sm text-gray-600">
                {language === "zh" ? "本地存储" : "Local Storage"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 快速开始CTA */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-12">
            {t("home.getStarted")}
          </h2>

          {/* 两种使用方式 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* MCP客户端使用 */}
            <div className="bg-white p-8 border border-gray-300">
              <div className="text-left mb-6">
                <h3 className="text-lg font-medium text-black mb-2">
                  {language === "zh"
                    ? "MCP客户端使用 (推荐)"
                    : "MCP Client Usage (Recommended)"}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {language === "zh"
                    ? "在Claude Desktop等MCP客户端中使用18个智能工具"
                    : "Use 18 intelligent tools in Claude Desktop and other MCP clients"}
                </p>
              </div>
              <div className="text-left mb-6">
                <div className="text-sm font-medium text-black mb-3">
                  {language === "zh"
                    ? "1. 配置MCP客户端"
                    : "1. Configure MCP Client"}
                </div>
                <div className="font-mono text-xs bg-gray-50 p-3 border border-gray-200 overflow-x-auto mb-3">
                  <pre>{`{
  "mcpServers": {
    "devmind": {
      "command": "npx",
      "args": ["-y", "devmind-mcp@latest"]
    }
  }
}`}</pre>
                </div>
                <div className="text-sm font-medium text-black mb-2">
                  {language === "zh" ? "2. 重启客户端" : "2. Restart Client"}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {language === "zh"
                    ? "即可使用18个MCP工具"
                    : "Use 18 MCP tools"}
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 mb-2">
                  {language === "zh" ? "适用于：" : "Suitable for:"}
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Claude Desktop</li>
                  <li>• Cursor</li>
                  <li>
                    •{" "}
                    {language === "zh"
                      ? "其他MCP兼容客户端"
                      : "Other MCP-compatible clients"}
                  </li>
                </ul>
              </div>
            </div>

            {/* CLI命令行使用 */}
            <div className="bg-white p-8 border border-gray-300">
              <div className="text-left mb-6">
                <h3 className="text-lg font-medium text-black mb-2">
                  {language === "zh" ? "CLI命令行使用" : "CLI Command Line"}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {language === "zh"
                    ? "全局安装后使用命令行工具管理记忆"
                    : "Manage memory with command-line tools after global installation"}
                </p>
              </div>
              <div className="text-left mb-6">
                <div className="text-sm font-medium text-black mb-3">
                  {language === "zh" ? "安装" : "Install"}
                </div>
                <div className="font-mono text-sm bg-gray-50 p-4 border border-gray-200 mb-3">
                  <div className="text-gray-800">
                    $ npm install -g devmind-mcp
                  </div>
                </div>
                <div className="text-sm font-medium text-black mb-2">
                  {language === "zh" ? "使用" : "Usage"}
                </div>
                <div className="font-mono text-sm bg-gray-50 p-4 border border-gray-200">
                  <div className="text-gray-800">$ devmind init</div>
                  <div className="text-gray-800">$ devmind start</div>
                  <div className="text-gray-800">$ devmind search "query"</div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 mb-2">
                  {language === "zh" ? "适用于：" : "Suitable for:"}
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>
                    •{" "}
                    {language === "zh"
                      ? "命令行操作"
                      : "Command line operations"}
                  </li>
                  <li>
                    • {language === "zh" ? "脚本自动化" : "Script automation"}
                  </li>
                  <li>
                    • {language === "zh" ? "守护进程监控" : "Daemon monitoring"}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link
            to="/getting-started"
            className="bg-red-600 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors"
          >
            {language === "zh" ? "查看完整指南" : "View Complete Guide"}
          </Link>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 px-6 border-t border-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2025 {PROJECT_INFO.name}. {PROJECT_INFO.license} License.
            <a
              href={PROJECT_INFO.repository}
              className="ml-2 text-gray-600 hover:text-black"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
