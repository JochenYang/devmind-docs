import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const UseCasesPage: React.FC = () => {
  const { t, language } = useLanguage();

  const useCases =
    language === "zh"
      ? [
          {
            title: "软件开发",
            description:
              "跟踪代码变更历史，维护开发上下文，存储解决方案和最佳实践，记录项目演进过程",
            tools: [
              "record_context",
              "search_contexts",
              "extract_file_context",
            ],
            benefits: ["提升问题定位速度", "代码复用率提升", "开发知识沉淀"],
            scenarios: [
              "跟踪代码变更历史",
              "维护开发上下文",
              "存储解决方案和最佳实践",
              "记录项目演进过程",
            ],
          },
          {
            title: "研究与学习",
            description:
              "保存研究笔记与发现，维护知识库，跟踪学习进度，组织研究资料",
            tools: ["record_context", "semantic_search", "list_contexts"],
            benefits: ["构建个人/团队知识资产", "快速知识检索", "学习进度跟踪"],
            scenarios: [
              "保存研究笔记和发现",
              "维护知识库",
              "跟踪学习进度",
              "组织研究资料",
            ],
          },
          {
            title: "项目管理",
            description:
              "记录项目里程碑，维护项目历史，跟踪决策过程，生成项目报告",
            tools: [
              "record_context",
              "generate_documentation",
              "analyze_project",
            ],
            benefits: [
              "透明决策与可追溯演进",
              "项目文档自动化",
              "团队知识共享",
            ],
            scenarios: [
              "记录项目里程碑",
              "维护项目历史",
              "跟踪决策过程",
              "生成项目报告",
            ],
          },
          {
            title: "AI助手增强",
            description:
              "为AI提供持久记忆，维护对话上下文，存储用户偏好，支持长期AI关系建立",
            tools: [
              "semantic_search",
              "project_analysis_engineer",
              "record_context",
            ],
            benefits: [
              "提升AI回答相关性与一致性",
              "多轮对话上下文保持",
              "个性化AI体验",
            ],
            scenarios: [
              "为AI提供持久记忆",
              "维护对话上下文",
              "存储用户偏好",
              "支持长期AI关系建立",
            ],
          },
        ]
      : [
          {
            title: "Software Development",
            description:
              "Track code change history, maintain development context, store solutions and best practices, record project evolution",
            tools: [
              "record_context",
              "search_contexts",
              "extract_file_context",
            ],
            benefits: [
              "Faster problem location",
              "Improved code reuse",
              "Development knowledge retention",
            ],
            scenarios: [
              "Track code change history",
              "Maintain development context",
              "Store solutions and best practices",
              "Record project evolution",
            ],
          },
          {
            title: "Research & Learning",
            description:
              "Save research notes and findings, maintain knowledge base, track learning progress, organize research materials",
            tools: ["record_context", "semantic_search", "list_contexts"],
            benefits: [
              "Build personal/team knowledge assets",
              "Fast knowledge retrieval",
              "Learning progress tracking",
            ],
            scenarios: [
              "Save research notes and findings",
              "Maintain knowledge base",
              "Track learning progress",
              "Organize research materials",
            ],
          },
          {
            title: "Project Management",
            description:
              "Record project milestones, maintain project history, track decision process, generate project reports",
            tools: [
              "record_context",
              "generate_documentation",
              "analyze_project",
            ],
            benefits: [
              "Transparent decisions and traceable evolution",
              "Automated project documentation",
              "Team knowledge sharing",
            ],
            scenarios: [
              "Record project milestones",
              "Maintain project history",
              "Track decision process",
              "Generate project reports",
            ],
          },
          {
            title: "AI Assistant Enhancement",
            description:
              "Provide persistent memory for AI, maintain conversation context, store user preferences, support long-term AI relationships",
            tools: [
              "semantic_search",
              "project_analysis_engineer",
              "record_context",
            ],
            benefits: [
              "Improved AI response relevance and consistency",
              "Multi-turn conversation context retention",
              "Personalized AI experience",
            ],
            scenarios: [
              "Provide persistent memory for AI",
              "Maintain conversation context",
              "Store user preferences",
              "Support long-term AI relationships",
            ],
          },
        ];

  const UseCaseCard = ({ useCase }: { useCase: any }) => (
    <div className="bg-white p-8 border border-gray-300">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-black mb-3">{useCase.title}</h3>
        <p className="text-base text-gray-700 mb-4">{useCase.description}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-black mb-2">
            {t("useCases.relatedTools")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {useCase.tools.map((tool: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-sm text-gray-600 border border-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-black mb-2">
            {t("useCases.benefits")}
          </h4>
          <ul className="space-y-1">
            {useCase.benefits.map((benefit: string, index: number) => (
              <li
                key={index}
                className="text-sm text-gray-700 flex items-start"
              >
                <span className="text-black mr-2">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-black mb-2">
            {t("useCases.scenarios")}
          </h4>
          <ul className="space-y-1">
            {useCase.scenarios.map((scenario: string, index: number) => (
              <li
                key={index}
                className="text-sm text-gray-700 flex items-start"
              >
                <span className="text-black mr-2">•</span>
                {scenario}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        {/* 固定侧边导航 */}
        <aside className="w-80 h-screen border-r border-gray-300 bg-white p-6 overflow-y-auto fixed left-0 top-0">
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {language === "zh" ? "使用场景" : "Use Cases"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#software-development"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("useCases.softwareDevelopment")}
                  </a>
                </li>
                <li>
                  <a
                    href="#research-learning"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("useCases.researchLearning")}
                  </a>
                </li>
                <li>
                  <a
                    href="#project-management"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("useCases.projectManagement")}
                  </a>
                </li>
                <li>
                  <a
                    href="#ai-enhancement"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("useCases.aiEnhancement")}
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
                    to="/api-reference"
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t("nav.apiReference")}
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
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-black mb-6">
              {t("useCases.title")}
            </h1>
            <p className="text-xl text-gray-700 mb-12">
              {t("useCases.subtitle")}
            </p>

            {/* 场景-任务-工具映射表 */}
            <section className="mb-16">
              <div className="bg-gray-100 p-6 border border-gray-300">
                <h2 className="text-2xl font-bold text-black mb-6">
                  {t("useCases.scenarioTaskToolMapping")}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-swiss-surface-subtle">
                      <tr>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("useCases.scenario")}
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("useCases.keyTask")}
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("useCases.suggestedTools")}
                        </th>
                        <th className="text-left p-4 text-sm font-medium text-black">
                          {t("useCases.expectedBenefits")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {useCases.map((useCase, index) => (
                        <tr key={index} className="border-t border-gray-300">
                          <td className="p-4 text-sm font-medium text-black">
                            {useCase.title}
                          </td>
                          <td className="p-4 text-sm text-gray-700">
                            {useCase.scenarios[0]}
                          </td>
                          <td className="p-4 text-sm font-code text-gray-600">
                            {useCase.tools[0]}
                          </td>
                          <td className="p-4 text-sm text-gray-700">
                            {useCase.benefits[0]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 详细使用场景 */}
            {useCases.map((useCase, index) => (
              <section
                key={index}
                id={useCase.title.toLowerCase().replace(/\s+/g, "-")}
                className="mb-16"
              >
                <UseCaseCard useCase={useCase} />
              </section>
            ))}

            {/* 下一步 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-8">
                {t("common.nextSteps")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  to="/tools"
                  className="block p-6 border border-gray-300 hover:border-swiss-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {language === "zh" ? "探索MCP工具" : "Explore MCP Tools"}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "了解18个MCP工具的详细用法"
                      : "Learn about 18 MCP tools in detail"}
                  </p>
                </Link>
                <Link
                  to="/api-reference"
                  className="block p-6 border border-gray-300 hover:border-swiss-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {t("nav.apiReference")}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "编程接口使用指南"
                      : "Programming interface usage guide"}
                  </p>
                </Link>
                <Link
                  to="/faq"
                  className="block p-6 border border-gray-300 hover:border-swiss-black transition-colors"
                >
                  <h3 className="text-lg font-medium text-black mb-3">
                    {language === "zh" ? "常见问题" : "FAQ"}
                  </h3>
                  <p className="text-base text-gray-700">
                    {language === "zh"
                      ? "FAQ和故障排除指南"
                      : "FAQ and troubleshooting guide"}
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

export default UseCasesPage;
