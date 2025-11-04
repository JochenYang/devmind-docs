import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_INFO } from "../data/sourceData";
import { useLanguage } from "../i18n/LanguageContext";
import CodeBlock from "../components/CodeBlock";

const GettingStartedPage: React.FC = () => {
  const { language } = useLanguage();

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

  const content =
    language === "zh"
      ? {
          title: "快速开始",
          subtitle:
            "在几分钟内安装并配置DevMind MCP，开始构建您的智能记忆系统。",
          sidebar: {
            title: "快速开始",
            sections: ["系统要求", "安装方式", "配置步骤", "首次运行"],
            links: {
              title: "相关链接",
              items: [
                { text: "MCP工具", to: "/tools" },
                { text: "配置指南", to: "/configuration" },
              ],
            },
          },
          requirements: {
            title: "系统要求",
            items: [
              { label: "Node.js", value: `版本 ${PROJECT_INFO.nodeVersion}` },
              { label: "MCP兼容客户端", value: "(如Claude Desktop、Cursor)" },
              { label: "操作系统", value: "macOS/Linux/Windows" },
            ],
          },
          installation: {
            title: "安装方式",
            npx: {
              title: "NPX方式 (推荐)",
              desc: "无需安装，每次自动使用最新版本",
            },
            global: {
              title: "全局安装 (可选)",
              desc: "固定版本，启动更快，适合稳定环境",
            },
            source: {
              title: "源码安装 (开发者)",
              desc: "可调试与修改源码，适合贡献开发",
            },
          },
          configuration: {
            title: "配置步骤",
            step1: {
              title: "1. 添加到MCP客户端",
              desc: "编辑您的MCP客户端配置文件：",
              windows: "Windows:",
              macos: "macOS/Linux:",
            },
            step2: { title: "2. NPX方式配置" },
            step3: { title: "3. 全局安装配置" },
          },
          verification: {
            title: "首次运行与验证",
            stepsTitle: "验证步骤",
            steps: [
              {
                title: "重启MCP客户端:",
                desc: "完全退出并重新启动Claude Desktop或其他MCP客户端",
              },
              {
                title: "验证工具可用:",
                desc: `在客户端中应该能看到DevMind的${PROJECT_INFO.toolCount}个MCP工具`,
              },
              {
                title: "测试基本功能:",
                desc: "尝试使用 create_session 创建会话，然后使用 record_context 记录上下文",
              },
            ],
            outputTitle: "预期输出",
          },
          nextSteps: {
            title: "下一步",
            tools: {
              title: "探索MCP工具",
              desc: `了解${PROJECT_INFO.toolCount}个MCP工具的详细用法`,
            },
          },
        }
      : {
          title: "Getting Started",
          subtitle:
            "Install and configure DevMind MCP in minutes to start building your intelligent memory system.",
          sidebar: {
            title: "Getting Started",
            sections: [
              "Requirements",
              "Installation",
              "Configuration",
              "First Run",
            ],
            links: {
              title: "Related Links",
              items: [
                { text: "MCP Tools", to: "/tools" },
                { text: "Configuration", to: "/configuration" },
              ],
            },
          },
          requirements: {
            title: "System Requirements",
            items: [
              {
                label: "Node.js",
                value: `version ${PROJECT_INFO.nodeVersion}`,
              },
              {
                label: "MCP-compatible client",
                value: "(e.g., Claude Desktop, Cursor)",
              },
              { label: "Operating System", value: "macOS/Linux/Windows" },
            ],
          },
          installation: {
            title: "Installation Methods",
            npx: {
              title: "NPX Method (Recommended)",
              desc: "No installation needed, always uses the latest version",
            },
            global: {
              title: "Global Installation (Optional)",
              desc: "Fixed version, faster startup, suitable for stable environments",
            },
            source: {
              title: "Source Installation (Developers)",
              desc: "Debug and modify source code, suitable for contributing development",
            },
          },
          configuration: {
            title: "Configuration Steps",
            step1: {
              title: "1. Add to MCP Client",
              desc: "Edit your MCP client configuration file:",
              windows: "Windows:",
              macos: "macOS/Linux:",
            },
            step2: { title: "2. NPX Method Configuration" },
            step3: {
              title: "3. Global Installation Configuration",
            },
          },
          verification: {
            title: "First Run and Verification",
            stepsTitle: "Verification Steps",
            steps: [
              {
                title: "Restart MCP Client:",
                desc: "Completely exit and restart Claude Desktop or other MCP clients",
              },
              {
                title: "Verify Tools Available:",
                desc: `You should see DevMind's ${PROJECT_INFO.toolCount} MCP tools in the client`,
              },
              {
                title: "Test Basic Functions:",
                desc: "Try using create_session to create a session, then use record_context to record context",
              },
            ],
            outputTitle: "Expected Output",
          },
          nextSteps: {
            title: "Next Steps",
            tools: {
              title: "Explore MCP Tools",
              desc: `Learn about ${PROJECT_INFO.toolCount} MCP tools in detail`,
            },
          },
        };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        {/* 侧边导航 */}
        <aside className="w-80 h-screen border-r border-gray-300 bg-white p-6 overflow-y-auto fixed left-0 top-0">
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {content.sidebar.title}
              </h3>
              <ul className="space-y-2">
                {content.sidebar.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${
                        [
                          "requirements",
                          "installation",
                          "configuration",
                          "verification",
                        ][index]
                      }`}
                      onClick={(e) =>
                        handleNavClick(
                          e,
                          [
                            "requirements",
                            "installation",
                            "configuration",
                            "verification",
                          ][index]
                        )
                      }
                      className="text-sm text-gray-600 hover:text-black cursor-pointer"
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {content.sidebar.links.title}
              </h3>
              <ul className="space-y-2">
                {content.sidebar.links.items.map((link, index) => (
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
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-black mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-gray-700 mb-12">{content.subtitle}</p>

            {/* 系统要求 */}
            <section id="requirements" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.requirements.title}
              </h2>
              <div className="bg-gray-100 p-6 border border-gray-300 mb-6">
                <ul className="space-y-3">
                  {content.requirements.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black font-medium mr-3">•</span>
                      <div>
                        <strong className="text-black">{item.label}</strong>{" "}
                        {item.value}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 安装方式 */}
            <section id="installation" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.installation.title}
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.installation.npx.title}
                </h3>
                <CodeBlock code="npx -y devmind-mcp@latest" />
                <p className="text-sm text-gray-600 mt-3">
                  {content.installation.npx.desc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.installation.global.title}
                </h3>
                <CodeBlock code="npm install -g devmind-mcp" />
                <p className="text-sm text-gray-600 mt-3">
                  {content.installation.global.desc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.installation.source.title}
                </h3>
                <CodeBlock
                  code={`git clone ${PROJECT_INFO.repository}.git\ncd Devmind\nnpm install`}
                />
                <p className="text-sm text-gray-600 mt-3">
                  {content.installation.source.desc}
                </p>
              </div>
            </section>

            {/* 配置步骤 */}
            <section id="configuration" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.configuration.title}
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.configuration.step1.title}
                </h3>
                <p className="text-base text-gray-700 mb-4">
                  {content.configuration.step1.desc}
                </p>
                <div className="bg-gray-100 p-4 border border-gray-300 mb-4">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>{content.configuration.step1.windows}</strong>{" "}
                    C:\Users\&lt;YourUsername&gt;\AppData\Roaming\Claude\claude_desktop_config.json
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>{content.configuration.step1.macos}</strong>{" "}
                    ~/Library/Application
                    Support/Claude/claude_desktop_config.json
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.configuration.step2.title}
                </h3>
                <CodeBlock
                  code={`{
  "mcpServers": {
    "devmind": {
      "command": "npx",
      "args": ["-y", "devmind-mcp@latest"]
    }
  }
}`}
                  language="json"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.configuration.step3.title}
                </h3>
                <CodeBlock
                  code={`{
  "mcpServers": {
    "devmind": {
      "command": "devmind-mcp"
    }
  }
}`}
                  language="json"
                />
              </div>
            </section>

            {/* 首次运行 */}
            <section id="verification" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.verification.title}
              </h2>

              <div className="bg-gray-100 p-6 border border-gray-300 mb-6">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.verification.stepsTitle}
                </h3>
                <ol className="space-y-3">
                  {content.verification.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black font-bold mr-3">
                        {index + 1}.
                      </span>
                      <div>
                        <strong className="text-black">{step.title}</strong>
                        <div className="text-sm text-gray-700 mt-1">
                          {step.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white p-6 border border-gray-300">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.verification.outputTitle}
                </h3>
                <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200">
                  <div className="mb-2">
                    {language === "zh"
                      ? "✅ MCP 服务器已启动"
                      : "✅ MCP Server Started"}
                  </div>
                  <div className="mb-2 text-green-600">
                    {language === "zh"
                      ? `🔧 ${PROJECT_INFO.toolCount} 个 MCP 工具已就绪`
                      : `🔧 ${PROJECT_INFO.toolCount} MCP Tools Ready`}
                  </div>
                  <div className="text-gray-600">
                    {language === "zh"
                      ? "💡 在 AI 助手中尝试: 'use semantic_search to find...'"
                      : "💡 Try in AI assistant: 'use semantic_search to find...'"}
                  </div>
                </div>
              </div>
            </section>

            {/* 下一步 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.nextSteps.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/tools"
                  className="block p-6 border border-gray-300 hover:border-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {content.nextSteps.tools.title}
                  </h3>
                  <p className="text-base text-gray-700">
                    {content.nextSteps.tools.desc}
                  </p>
                </Link>
                <Link
                  to="/configuration"
                  className="block p-6 border border-gray-300 hover:border-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {language === "zh" ? "配置指南" : "Configuration Guide"}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "了解高级配置选项和最佳实践"
                      : "Learn advanced configuration options and best practices"}
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

export default GettingStartedPage;
