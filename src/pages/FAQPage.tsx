import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const FAQPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqCategories =
    language === "zh"
      ? [
          {
            title: "安装问题",
            questions: [
              {
                question: "Node版本过低导致安装失败怎么办？",
                answer:
                  "升级Node.js至18+版本后重试安装。可以使用nvm管理多个Node版本。",
              },
              {
                question: "全局安装权限不足怎么处理？",
                answer:
                  "调整npm权限或使用合适的安装方式。可以通过配置npm前缀或使用sudo权限解决。",
              },
              {
                question: "客户端不识别DevMind服务器？",
                answer:
                  "确认配置文件路径与JSON格式正确，重启客户端使配置生效。",
              },
            ],
          },
          {
            title: "配置问题",
            questions: [
              {
                question: "MCP客户端配置有哪些注意事项？",
                answer:
                  "确认command/args字段正确，使用标准NPX示例，检查客户端版本兼容性。",
              },
              {
                question: "数据库路径不可写如何解决？",
                answer:
                  "创建目录并修正权限，或更改数据库路径到有写权限的位置。",
              },
              {
                question: "嵌入模型加载失败怎么办？",
                answer:
                  "检查embedding_model配置与资源可用性，切换至local模式或补充必要资源。",
              },
            ],
          },
          {
            title: "使用问题",
            questions: [
              {
                question: "搜索效果不佳怎么优化？",
                answer:
                  "调整质量阈值与过滤器，降低threshold、扩展tags与timeRange范围。",
              },
              {
                question: "上下文质量如何提升？",
                answer:
                  "启用quality_scoring、comment_analysis和structure_analysis，提升语义可检索性。",
              },
              {
                question: "性能瓶颈如何解决？",
                answer:
                  "定期执行optimize和cleanup_duplicates，启用压缩需评估CPU开销。",
              },
            ],
          },
        ]
      : [
          {
            title: "Installation Issues",
            questions: [
              {
                question: "What if installation fails due to low Node version?",
                answer:
                  "Upgrade Node.js to version 18+ and retry installation. You can use nvm to manage multiple Node versions.",
              },
              {
                question:
                  "How to handle insufficient permissions for global installation?",
                answer:
                  "Adjust npm permissions or use appropriate installation methods. You can configure npm prefix or use sudo permissions.",
              },
              {
                question: "Client doesn't recognize DevMind server?",
                answer:
                  "Confirm configuration file path and JSON format are correct, restart client to apply configuration.",
              },
            ],
          },
          {
            title: "Configuration Issues",
            questions: [
              {
                question:
                  "What should I pay attention to in MCP client configuration?",
                answer:
                  "Confirm command/args fields are correct, use standard NPX examples, check client version compatibility.",
              },
              {
                question: "How to solve database path not writable?",
                answer:
                  "Create directory and fix permissions, or change database path to a location with write permissions.",
              },
              {
                question: "What if embedding model fails to load?",
                answer:
                  "Check embedding_model configuration and resource availability, switch to local mode or supplement necessary resources.",
              },
            ],
          },
          {
            title: "Usage Issues",
            questions: [
              {
                question: "How to optimize poor search results?",
                answer:
                  "Adjust quality threshold and filters, lower threshold, expand tags and timeRange scope.",
              },
              {
                question: "How to improve context quality?",
                answer:
                  "Enable quality_scoring, comment_analysis and structure_analysis to improve semantic retrievability.",
              },
              {
                question: "How to solve performance bottlenecks?",
                answer:
                  "Regularly execute optimize and cleanup_duplicates, evaluate CPU overhead when enabling compression.",
              },
            ],
          },
        ];

  const troubleshootingSteps =
    language === "zh"
      ? [
          {
            problem: "Node版本过低",
            cause: "运行环境不满足>=18.0.0",
            solution: "升级Node并重试安装",
            reference: "npm包页面",
          },
          {
            problem: "全局安装权限不足",
            cause: "npm全局目录权限/路径问题",
            solution: "使用合适权限或配置npm前缀",
            reference: "npm包页面",
          },
          {
            problem: "MCP客户端未识别服务器",
            cause: "配置文件路径/JSON格式错误",
            solution: "校验路径与JSON语法，重启客户端",
            reference: "项目主页",
          },
        ]
      : [
          {
            problem: "Node version too low",
            cause: "Runtime environment doesn't meet >=18.0.0",
            solution: "Upgrade Node and retry installation",
            reference: "npm package page",
          },
          {
            problem: "Insufficient global installation permissions",
            cause: "npm global directory permission/path issues",
            solution: "Use appropriate permissions or configure npm prefix",
            reference: "npm package page",
          },
          {
            problem: "MCP client doesn't recognize server",
            cause: "Configuration file path/JSON format error",
            solution: "Verify path and JSON syntax, restart client",
            reference: "Project homepage",
          },
        ];

  const FAQItem = ({
    question,
    answer,
    index,
  }: {
    question: string;
    answer: string;
    index: number;
  }) => {
    const isOpen = openItems.includes(index);

    return (
      <div className="border border-gray-300 bg-white">
        <button
          className="w-full p-6 text-left flex justify-between items-center hover:bg-swiss-surface-subtle transition-colors"
          onClick={() => toggleItem(index)}
        >
          <h3 className="text-lg font-medium text-black">{question}</h3>
          <span
            className={`text-gray-600 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        {isOpen && (
          <div className="p-6 pt-0 border-t border-gray-300">
            <p className="text-base text-gray-700">{answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="relative">
        {/* 固定侧边导航 */}
        <aside className="w-80 h-screen border-r border-gray-300 bg-white p-6 overflow-y-auto fixed left-0 top-0">
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {language === "zh" ? "常见问题" : "FAQ"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#installation"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("faq.installationIssues")}
                  </a>
                </li>
                <li>
                  <a
                    href="#configuration"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("faq.configurationIssues")}
                  </a>
                </li>
                <li>
                  <a
                    href="#usage"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("faq.usageIssues")}
                  </a>
                </li>
                <li>
                  <a
                    href="#troubleshooting"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("faq.troubleshootingTable")}
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
                    to="/getting-started"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("nav.gettingStarted")}
                  </Link>
                </li>
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
              </ul>
            </div>
          </nav>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 p-8 ml-80">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-black mb-6">
              {t("faq.title")}
            </h1>
            <p className="text-xl text-gray-700 mb-12">{t("faq.subtitle")}</p>

            {/* 故障排除速查表 */}
            <section id="troubleshooting" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-8">
                {t("faq.troubleshootingTable")}
              </h2>
              <div className="bg-white border border-gray-300 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-swiss-surface-subtle">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("faq.problem")}
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("faq.possibleCause")}
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("faq.solutionSteps")}
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("faq.reference")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {troubleshootingSteps.map((step, index) => (
                        <tr key={index} className="border-t border-gray-300">
                          <td className="p-4 text-sm font-medium text-black">
                            {step.problem}
                          </td>
                          <td className="p-4 text-sm text-gray-700">
                            {step.cause}
                          </td>
                          <td className="p-4 text-sm text-gray-700">
                            {step.solution}
                          </td>
                          <td className="p-4 text-sm text-gray-600">
                            {step.reference}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* FAQ分类 */}
            {faqCategories.map((category, categoryIndex) => (
              <section
                key={categoryIndex}
                id={category.title.toLowerCase()}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold text-black mb-8">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      question={faq.question}
                      answer={faq.answer}
                      index={categoryIndex * 100 + faqIndex}
                    />
                  ))}
                </div>
              </section>
            ))}

            {/* 支持与反馈 */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-8">
                {t("faq.supportFeedback")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("faq.githubIssues")}
                  </h3>
                  <p className="text-base text-gray-700 mb-4">
                    {t("faq.reportBugs")}
                  </p>
                  <a
                    href="https://github.com/JochenYang/Devmind/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline text-sm"
                  >
                    {language === "zh" ? "访问 Issues →" : "Visit Issues →"}
                  </a>
                </div>

                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("faq.githubDiscussions")}
                  </h3>
                  <p className="text-base text-gray-700 mb-4">
                    {t("faq.experienceExchange")}
                  </p>
                  <a
                    href="https://github.com/JochenYang/Devmind/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline text-sm"
                  >
                    {language === "zh"
                      ? "访问 Discussions →"
                      : "Visit Discussions →"}
                  </a>
                </div>

                <div className="bg-gray-100 p-6 border border-gray-300">
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("faq.npmPage")}
                  </h3>
                  <p className="text-base text-gray-700 mb-4">
                    {t("faq.installVersionInfo")}
                  </p>
                  <a
                    href="https://www.npmjs.com/package/devmind-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline text-sm"
                  >
                    {language === "zh" ? "访问 npm →" : "Visit npm →"}
                  </a>
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
                  to="/getting-started"
                  className="block p-6 border border-gray-300 hover:border-swiss-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("nav.gettingStarted")}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "重新查看安装和配置指南"
                      : "Review installation and configuration guide"}
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

export default FAQPage;
