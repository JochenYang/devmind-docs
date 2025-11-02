import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_INFO } from "../data/sourceData";
import { useLanguage } from "../i18n/LanguageContext";

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
                { text: "CLI参考", to: "/cli-reference" },
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
              title: "NPX方式 (推荐快速测试)",
              desc: "无需全局安装，适合临时体验或CI验证",
            },
            global: {
              title: "全局安装 (日常开发)",
              desc: "本地命令可用，启动快速，适合长期使用",
            },
            source: {
              title: "源码安装 (贡献开发)",
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
            step2: { title: "2. MCP配置示例 (NPX方式)" },
            step3: { title: "3. MCP配置示例 (全局安装)" },
            step4: {
              title: "4. 初始化DevMind (可选)",
              desc: "如果您全局安装了DevMind，可以使用CLI命令初始化配置：",
            },
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
              {
                title: "启动守护进程 (可选):",
                desc: "守护进程会自动监控文件变化并记录上下文",
              },
            ],
            outputTitle: "预期输出 (CLI)",
          },
          nextSteps: {
            title: "下一步",
            tools: {
              title: "探索MCP工具",
              desc: `了解${PROJECT_INFO.toolCount}个MCP工具的详细用法`,
            },
            cli: {
              title: "CLI命令参考",
              desc: "掌握完整的命令行界面使用",
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
                { text: "CLI Reference", to: "/cli-reference" },
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
              title: "NPX Method (Recommended for Quick Testing)",
              desc: "No global installation required, suitable for temporary testing or CI verification",
            },
            global: {
              title: "Global Installation (Daily Development)",
              desc: "Local commands available, fast startup, suitable for long-term use",
            },
            source: {
              title: "Source Installation (Contributing Development)",
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
            step2: { title: "2. MCP Configuration Example (NPX Method)" },
            step3: {
              title: "3. MCP Configuration Example (Global Installation)",
            },
            step4: {
              title: "4. Initialize DevMind (Optional)",
              desc: "If you have globally installed DevMind, you can use CLI commands to initialize configuration:",
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
              {
                title: "Start Daemon (Optional):",
                desc: "The daemon will automatically monitor file changes and record context",
              },
            ],
            outputTitle: "Expected Output (CLI)",
          },
          nextSteps: {
            title: "Next Steps",
            tools: {
              title: "Explore MCP Tools",
              desc: `Learn about ${PROJECT_INFO.toolCount} MCP tools in detail`,
            },
            cli: {
              title: "CLI Command Reference",
              desc: "Master the complete command-line interface usage",
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
                <div className="bg-white p-6 border border-gray-300">
                  <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200">
                    <div className="mb-2">npx -y devmind-mcp@latest</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  {content.installation.npx.desc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.installation.global.title}
                </h3>
                <div className="bg-white p-6 border border-gray-300">
                  <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200">
                    <div className="mb-2">npm install -g devmind-mcp</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  {content.installation.global.desc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.installation.source.title}
                </h3>
                <div className="bg-white p-6 border border-gray-300">
                  <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200">
                    <div className="mb-2">
                      git clone {PROJECT_INFO.repository}.git
                    </div>
                    <div className="mb-2">cd Devmind</div>
                    <div>npm install</div>
                  </div>
                </div>
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
                <div className="bg-white p-6 border border-gray-300">
                  <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200 overflow-x-auto">
                    <pre>{`{
  "mcpServers": {
    "devmind": {
      "command": "npx",
      "args": ["-y", "devmind-mcp@latest"]
    }
  }
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.configuration.step3.title}
                </h3>
                <div className="bg-white p-6 border border-gray-300">
                  <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200 overflow-x-auto">
                    <pre>{`{
  "mcpServers": {
    "devmind": {
      "command": "devmind-mcp"
    }
  }
}`}</pre>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.configuration.step4.title}
                </h3>
                <p className="text-base text-gray-700 mb-4">
                  {content.configuration.step4.desc}
                </p>
                <div className="bg-white p-6 border border-gray-300">
                  <div className="font-mono text-sm text-gray-700 bg-gray-50 p-4 border border-gray-200">
                    <div className="mb-2">
                      #{" "}
                      {language === "zh"
                        ? "初始化配置"
                        : "Initialize configuration"}
                    </div>
                    <div className="mb-2">devmind init</div>
                    <div className="mb-4"></div>
                    <div className="mb-2">
                      #{" "}
                      {language === "zh"
                        ? "启动监控守护进程"
                        : "Start monitoring daemon"}
                    </div>
                    <div>devmind start</div>
                  </div>
                </div>
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
                        {index === 3 && (
                          <div className="font-mono text-sm text-gray-700 mt-1 bg-gray-50 p-2 border border-gray-200">
                            devmind start
                          </div>
                        )}
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
                  <div className="mb-2">$ devmind init</div>
                  <div className="mb-2 text-green-600">
                    Created config file: .devmind.json
                  </div>
                  <div className="mb-4"></div>
                  <div className="mb-2">$ devmind start</div>
                  <div className="mb-2 text-green-600">
                    🚀{" "}
                    {language === "zh"
                      ? "启动 DevMind 守护进程..."
                      : "Starting DevMind daemon..."}
                  </div>
                  <div className="mb-2 text-green-600">
                    ✅{" "}
                    {language === "zh"
                      ? "守护进程启动成功"
                      : "Daemon started successfully"}
                  </div>
                  <div className="mb-2 text-green-600"> PID: 12345</div>
                  <div className="mb-4"></div>
                  <div className="mb-2">$ devmind status</div>
                  <div className="text-green-600">
                    {language === "zh"
                      ? " 状态: ✅ 运行中"
                      : " Status: ✅ Running"}
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
                  to="/cli-reference"
                  className="block p-6 border border-gray-300 hover:border-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {content.nextSteps.cli.title}
                  </h3>
                  <p className="text-base text-gray-700">
                    {content.nextSteps.cli.desc}
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
