import React from "react";
import { Link } from "react-router-dom";
import { CLI_COMMANDS } from "../data/sourceData";
import { useLanguage } from "../i18n/LanguageContext";
import { CLI_COMMAND_TRANSLATIONS } from "../data/translationMappings";
import CodeBlock from "../components/CodeBlock";

const CliReferencePage: React.FC = () => {
  const { language } = useLanguage();

  const translate = (text: string) => {
    if (language === "zh") return text;
    return CLI_COMMAND_TRANSLATIONS[text] || text;
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        {/* 侧边导航 */}
        <aside className="w-80 h-screen border-r border-gray-300 bg-white p-6 overflow-y-auto fixed left-0 top-0">
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {language === "zh" ? "CLI命令" : "CLI Commands"}
              </h3>
              <ul className="space-y-2">
                {CLI_COMMANDS.map((cmd) => (
                  <li key={cmd.name}>
                    <a
                      href={`#${cmd.name}`}
                      className="text-sm text-gray-600 hover:text-black"
                    >
                      {cmd.name}
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
                    to="/tools"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {language === "zh" ? "MCP工具" : "MCP Tools"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/configuration"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {language === "zh" ? "配置指南" : "Configuration"}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 p-8 ml-80">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-black mb-6">
              {language === "zh" ? "CLI命令参考" : "CLI Command Reference"}
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              {language === "zh"
                ? "DevMind CLI提供完整的命令行界面，用于管理会话、搜索上下文、分析项目和优化内存。"
                : "DevMind CLI provides a complete command-line interface for managing sessions, searching contexts, analyzing projects, and optimizing memory."}
            </p>

            {/* 命令列表 */}
            {CLI_COMMANDS.map((cmd) => (
              <section key={cmd.name} id={cmd.name} className="mb-12">
                <div className="bg-white border border-gray-300 p-6">
                  <h2 className="text-2xl font-bold text-black mb-4">
                    devmind {cmd.name}
                  </h2>
                  <p className="text-base text-gray-700 mb-6">
                    {translate(cmd.description)}
                  </p>

                  {/* 选项 */}
                  {cmd.options.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-black mb-3">
                        {language === "zh" ? "选项" : "Options"}
                      </h3>
                      <div className="bg-gray-50 p-4 border border-gray-200">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-2 pr-4 font-medium text-black">
                                {language === "zh" ? "选项" : "Option"}
                              </th>
                              <th className="text-left py-2 pr-4 font-medium text-black">
                                {language === "zh" ? "说明" : "Description"}
                              </th>
                              <th className="text-left py-2 font-medium text-black">
                                {language === "zh" ? "默认值" : "Default"}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cmd.options.map((opt, idx) => (
                              <tr
                                key={idx}
                                className="border-b border-gray-200 last:border-0"
                              >
                                <td className="py-2 pr-4 font-mono text-gray-700">
                                  {opt.flag}
                                </td>
                                <td className="py-2 pr-4 text-gray-700">
                                  {translate(opt.description)}
                                </td>
                                <td className="py-2 font-mono text-gray-600">
                                  {opt.default || "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 示例 */}
                  <div>
                    <h3 className="text-lg font-medium text-black mb-3">
                      {language === "zh" ? "示例" : "Examples"}
                    </h3>
                    <div className="space-y-3">
                      {cmd.examples.map((example, idx) => (
                        <div key={idx}>
                          <CodeBlock code={`$ ${example}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* 常见用法 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-black mb-6">
                {translate("常见工作流")}
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-4">
                    {translate("初始化和启动")}
                  </h3>
                  <div className="font-mono text-sm text-gray-700 bg-white p-4 border border-gray-200">
                    <div className="mb-2"># 初始化配置</div>
                    <div className="mb-2">$ devmind init</div>
                    <div className="mb-4"></div>
                    <div className="mb-2"># 启动守护进程</div>
                    <div className="mb-2">$ devmind start</div>
                    <div className="mb-4"></div>
                    <div className="mb-2"># 检查状态</div>
                    <div>$ devmind status</div>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-4">
                    {translate("搜索和查询")}
                  </h3>
                  <div className="font-mono text-sm text-gray-700 bg-white p-4 border border-gray-200">
                    <div className="mb-2"># 搜索上下文</div>
                    <div className="mb-2">
                      $ devmind search "authentication implementation"
                    </div>
                    <div className="mb-4"></div>
                    <div className="mb-2"># 查看统计信息</div>
                    <div>$ devmind stats</div>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-4">
                    {translate("项目分析和优化")}
                  </h3>
                  <div className="font-mono text-sm text-gray-700 bg-white p-4 border border-gray-200">
                    <div className="mb-2"># 导出内存图</div>
                    <div className="mb-2">
                      $ devmind graph project-123 --output graph.html
                    </div>
                    <div className="mb-4"></div>
                    <div className="mb-2"># 优化内存（预览）</div>
                    <div className="mb-2">
                      $ devmind optimize project-123 --dry-run
                    </div>
                    <div className="mb-4"></div>
                    <div className="mb-2"># 更新质量分数</div>
                    <div>$ devmind quality --project project-123</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CliReferencePage;
