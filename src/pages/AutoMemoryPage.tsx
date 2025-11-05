import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import CodeBlock from "../components/CodeBlock";

const AutoMemoryPage: React.FC = () => {
  const { language } = useLanguage();

  const content =
    language === "zh"
      ? {
          title: "智能自动记忆 (v2.0)",
          subtitle:
            "AI 自动评估内容价值并决定是否记忆，支持过程识别、价值评估和用户反馈学习",
          overview: {
            title: "概述",
            desc: "DevMind 现在具备智能自动记忆功能，可以自动评估内容价值并决定是否记忆。无需手动决策 - 让 AI 智能管理您的记忆！",
          },
          workflow: {
            title: "工作原理",
            steps: [
              { name: "内容输入", desc: "输入需要记录的内容" },
              { name: "过程识别", desc: "识别类型 (bug修复等)" },
              { name: "价值评估", desc: "4维度评分 (代码、问题等)" },
              { name: "智能决策", desc: "自动/询问/忽略 (80/50/25)" },
              { name: "记忆/跳过", desc: "存储与否" },
            ],
          },
          modes: {
            title: "三种记忆模式",
            ai: {
              title: "1. AI 主动记忆（默认）",
              desc: "AI 自动评估并决策：",
              rules: [
                "评分 ≥ 80：自动记忆",
                "评分 50-79：询问确认",
                "评分 < 50：忽略",
              ],
            },
            user: {
              title: "2. 用户显式记忆（最高优先级）",
              desc: "强制记忆重要内容",
            },
            traditional: {
              title: "3. 传统记忆（向后兼容）",
              desc: "禁用智能评估",
            },
          },
          dimensions: {
            title: "价值评估维度",
            items: [
              {
                name: "代码显著性 (30%)",
                desc: "算法复杂度、代码质量、代码长度",
              },
              {
                name: "问题复杂度 (25%)",
                desc: "技术难度、技术栈深度、影响范围",
              },
              {
                name: "解决方案重要性 (25%)",
                desc: "创新性、通用性、完整性",
              },
              {
                name: "可复用性 (20%)",
                desc: "抽象程度、文档完善度、适用性",
              },
            ],
          },
          processTypes: {
            title: "过程识别",
            desc: "自动识别 6 种开发过程类型：",
            types: [
              { name: "bug_fix", desc: "Bug 修复和错误纠正" },
              { name: "refactor", desc: "代码重构和改进" },
              { name: "solution_design", desc: "架构和设计决策" },
              { name: "code_change", desc: "常规代码修改" },
              { name: "testing", desc: "测试编写和验证" },
              { name: "documentation", desc: "文档更新" },
            ],
          },
        }
      : {
          title: "Intelligent Auto-Memory (v2.0)",
          subtitle:
            "AI automatically evaluates content value and decides what to remember, with process recognition, value assessment and user feedback learning",
          overview: {
            title: "Overview",
            desc: "DevMind now features Intelligent Auto-Memory that automatically evaluates content value and decides what to remember. No more manual decisions - let AI manage your memory intelligently!",
          },
          workflow: {
            title: "How It Works",
            steps: [
              { name: "Content Input", desc: "Input content to record" },
              { name: "Process Recognition", desc: "Identify type (bug_fix, etc.)" },
              { name: "Value Assessment", desc: "Score 4 dimensions (code, problem, etc.)" },
              { name: "Smart Decision", desc: "Auto/Ask/Ignore (80/50/25)" },
              { name: "Memory/Skip", desc: "Store or not" },
            ],
          },
          modes: {
            title: "Three Memory Modes",
            ai: {
              title: "1. AI Proactive Memory (Default)",
              desc: "AI automatically evaluates and decides:",
              rules: [
                "Score ≥ 80: Auto-remember",
                "Score 50-79: Ask for confirmation",
                "Score < 50: Ignore",
              ],
            },
            user: {
              title: "2. User Explicit Memory (Highest Priority)",
              desc: "Force remember important content",
            },
            traditional: {
              title: "3. Traditional Memory (Backward Compatible)",
              desc: "Disable intelligent evaluation",
            },
          },
          dimensions: {
            title: "Value Assessment Dimensions",
            items: [
              {
                name: "Code Significance (30%)",
                desc: "Algorithm complexity, code quality, code length",
              },
              {
                name: "Problem Complexity (25%)",
                desc: "Technical difficulty, tech stack depth, impact scope",
              },
              {
                name: "Solution Importance (25%)",
                desc: "Innovation, generality, completeness",
              },
              {
                name: "Reusability (20%)",
                desc: "Abstraction level, documentation, applicability",
              },
            ],
          },
          processTypes: {
            title: "Process Recognition",
            desc: "Automatically identifies 6 development process types:",
            types: [
              { name: "bug_fix", desc: "Bug fixes and error corrections" },
              { name: "refactor", desc: "Code refactoring and improvements" },
              { name: "solution_design", desc: "Architecture and design decisions" },
              { name: "code_change", desc: "Regular code modifications" },
              { name: "testing", desc: "Test writing and validation" },
              { name: "documentation", desc: "Documentation updates" },
            ],
          },
        };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        {/* 固定侧边导航 */}
        <aside className="w-80 h-screen border-r border-gray-300 bg-white p-6 overflow-y-auto fixed left-0 top-0">
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-black mb-3">
                {content.title}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#/auto-memory#overview"
                    className="text-sm text-gray-600 hover:text-black"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {content.overview.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#/auto-memory#workflow"
                    className="text-sm text-gray-600 hover:text-black"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {content.workflow.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#/auto-memory#modes"
                    className="text-sm text-gray-600 hover:text-black"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('modes')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {content.modes.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#/auto-memory#dimensions"
                    className="text-sm text-gray-600 hover:text-black"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('dimensions')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {content.dimensions.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#/auto-memory#process-types"
                    className="text-sm text-gray-600 hover:text-black"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('process-types')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {content.processTypes.title}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        
        {/* 主内容区域 */}
        <main className="ml-80 px-12 py-12">
          <div className="max-w-4xl">
            {/* 标题 */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-black mb-4">
                {content.title}
              </h1>
              <p className="text-lg text-gray-700">{content.subtitle}</p>
            </div>

            {/* 概述 */}
            <section id="overview" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.overview.title}
              </h2>
              <p className="text-gray-700 mb-6">{content.overview.desc}</p>
            </section>

            {/* 工作原理 */}
            <section id="workflow" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.workflow.title}
              </h2>
              <div className="bg-gray-50 p-6 border border-gray-300">
                <div className="flex items-center overflow-x-auto">
                  {content.workflow.steps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="min-w-[150px] text-center">
                        <div className="text-sm font-medium text-black mb-2">
                          {step.name}
                        </div>
                        <div className="text-xs text-gray-600">{step.desc}</div>
                      </div>
                      {index < content.workflow.steps.length - 1 && (
                        <div className="mx-4 text-gray-400">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>

            {/* 三种记忆模式 */}
            <section id="modes" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.modes.title}
              </h2>

              {/* AI 主动记忆 */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.modes.ai.title}
                </h3>
                <p className="text-gray-700 mb-4">{content.modes.ai.desc}</p>
                <ul className="space-y-2 mb-6">
                  {content.modes.ai.rules.map((rule, index) => (
                    <li key={index} className="text-gray-700">
                      • {rule}
                    </li>
                  ))}
                </ul>
                <CodeBlock
                  code={`// AI 自动决策（默认行为）
await record_context({
  content: "${language === "zh" ? "修复事件监听器中的严重内存泄漏" : "Fixed critical memory leak in event listeners"}",
  type: "bug_fix",
  project_path: "./my-project"
  // auto_evaluate: true (${language === "zh" ? "默认" : "default"})
});

// ${language === "zh" ? "输出" : "Output"}:
// ✓ ${language === "zh" ? "已自动记忆" : "Auto-remembered"}
// 
// ${language === "zh" ? "评估结果" : "Evaluation Result"}:
// - ${language === "zh" ? "过程类型" : "Process Type"}: Bug ${language === "zh" ? "修复" : "Fix"} (${language === "zh" ? "置信度" : "Confidence"} 90%)
// - ${language === "zh" ? "价值评分" : "Value Score"}: 85/100
//   * ${language === "zh" ? "代码显著性" : "Code Significance"}: 80
//   * ${language === "zh" ? "问题复杂度" : "Problem Complexity"}: 90
//   * ${language === "zh" ? "解决方案重要性" : "Solution Importance"}: 85
//   * ${language === "zh" ? "可复用性" : "Reusability"}: 80`}
                  language="typescript"
                />
              </div>

              {/* 用户显式记忆 */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.modes.user.title}
                </h3>
                <p className="text-gray-700 mb-4">{content.modes.user.desc}</p>
                <CodeBlock
                  code={`// ${language === "zh" ? "始终记忆，跳过评估" : "Always remember, skip evaluation"}
await record_context({
  content: "${language === "zh" ? "微服务迁移的关键架构决策" : "Critical architecture decision for microservices migration"}",
  type: "solution_design",
  project_path: "./my-project",
  force_remember: true  // ${language === "zh" ? "始终记忆" : "Always remember"}
});`}
                  language="typescript"
                />
              </div>

              {/* 传统记忆 */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-black mb-4">
                  {content.modes.traditional.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {content.modes.traditional.desc}
                </p>
                <CodeBlock
                  code={`// ${language === "zh" ? "传统行为" : "Traditional behavior"}
await record_context({
  content: "${language === "zh" ? "常规代码变更" : "Regular code change"}",
  type: "code",
  project_path: "./my-project",
  auto_evaluate: false  // ${language === "zh" ? "禁用智能评估" : "Disable intelligent evaluation"}
});`}
                  language="typescript"
                />
              </div>
            </section>

            {/* 价值评估维度 */}
            <section id="dimensions" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.dimensions.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.dimensions.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 border border-gray-300">
                    <div className="text-sm font-medium text-black mb-2">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 过程识别 */}
            <section id="process-types" className="mb-16">
              <h2 className="text-2xl font-bold text-black mb-6">
                {content.processTypes.title}
              </h2>
              <p className="text-gray-700 mb-6">{content.processTypes.desc}</p>
              <div className="space-y-4">
                {content.processTypes.types.map((type, index) => (
                  <div key={index} className="flex items-start">
                    <code className="bg-gray-100 px-2 py-1 text-sm font-mono mr-4 min-w-[180px]">
                      {type.name}
                    </code>
                    <span className="text-gray-700">{type.desc}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AutoMemoryPage;
