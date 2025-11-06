import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import CodeBlock from "../components/CodeBlock";

const AutoMemoryPage: React.FC = () => {
  const { language } = useLanguage();

  const content =
    language === "zh"
      ? {
          title: "类型化三层自动记忆 (v2.1.2)",
          subtitle:
            "基于内容类型直接决定记忆行为，决策速度提升50倍，内存使用减少15%",
          overview: {
            title: "概述",
            desc: "DevMind v2.1.2 采用简化的三层自动记忆策略，相比复杂的评估系统，决策速度提升50倍（从50ms降至<1ms），内存使用减少15%。",
          },
          workflow: {
            title: "工作原理",
            steps: [
              { name: "内容输入", desc: "输入需要记录的内容" },
              { name: "类型识别", desc: "识别内容类型 (bug_fix等)" },
              { name: "层级匹配", desc: "匹配到三层策略" },
              { name: "自动决策", desc: "静默/通知/不记录" },
              { name: "记忆/跳过", desc: "执行决策结果" },
            ],
          },
          modes: {
            title: "三层记忆策略",
            ai: {
              title: "第1层: 静默自动记录",
              desc: "技术执行类 - 自动记录，无需确认",
              rules: [
                "bug_fix - Bug修复和错误纠正",
                "feature_add/update - 功能开发",
                "code_modify/refactor - 代码修改与重构",
                "test/commit - 测试与提交",
              ],
            },
            user: {
              title: "第2层: 通知后自动记录",
              desc: "设计方案类 - 自动记录，提供删除选项",
            },
            traditional: {
              title: "第3层: 默认不记录",
              desc: "conversation/error - 需force_remember=true",
            },
          },
          dimensions: {
            title: "后台质量更新",
            items: [
              {
                name: "懒加载策略",
                desc: "在semantic_search时触发，24小时周期更新",
              },
              {
                name: "非阻塞执行",
                desc: "异步后台更新，不影响用户搜索操作",
              },
              {
                name: "批量处理",
                desc: "每次最多更新200个上下文，跳过7天内已更新",
              },
              {
                name: "性能提升",
                desc: "决策延迟50ms→<1ms，内存使用-15%",
              },
            ],
          },
          processTypes: {
            title: "支持的上下文类型",
            desc: "v2.1.2 支持的内容类型：",
            types: [
              { name: "code_create/modify/delete", desc: "代码创建/修改/删除 (第1层)" },
              { name: "code_refactor/optimize", desc: "代码重构/优化 (第1层)" },
              { name: "bug_fix/report", desc: "Bug修复/报告 (第1层)" },
              { name: "feature_add/update/remove", desc: "功能开发 (第1层)" },
              { name: "solution/design/learning", desc: "方案/设计/学习 (第2层)" },
              { name: "conversation/error", desc: "对话/错误 (第3层)" },
            ],
          },
        }
      : {
          title: "Type-Based 3-Tier Auto-Memory (v2.1.2)",
          subtitle:
            "Direct memory decision based on content type, 50x faster decision speed, 15% less memory usage",
          overview: {
            title: "Overview",
            desc: "DevMind v2.1.2 uses simplified 3-tier auto-memory strategy. Compared to complex evaluation system, decision speed improved 50x (from 50ms to <1ms), memory usage reduced 15%.",
          },
          workflow: {
            title: "How It Works",
            steps: [
              { name: "Content Input", desc: "Input content to record" },
              { name: "Type Recognition", desc: "Identify content type (bug_fix, etc.)" },
              { name: "Tier Matching", desc: "Match to 3-tier strategy" },
              { name: "Auto Decision", desc: "Silent/Notify/Skip" },
              { name: "Memory/Skip", desc: "Execute decision" },
            ],
          },
          modes: {
            title: "Three-Tier Memory Strategy",
            ai: {
              title: "Tier 1: Silent Auto-Record",
              desc: "Technical execution - Auto-record without confirmation",
              rules: [
                "bug_fix - Bug fixes and error corrections",
                "feature_add/update - Feature development",
                "code_modify/refactor - Code changes and refactoring",
                "test/commit - Testing and commits",
              ],
            },
            user: {
              title: "Tier 2: Notify Auto-Record",
              desc: "Design & solutions - Auto-record with delete option",
            },
            traditional: {
              title: "Tier 3: Default Skip",
              desc: "conversation/error - Requires force_remember=true",
            },
          },
          dimensions: {
            title: "Background Quality Update",
            items: [
              {
                name: "Lazy-Loading Strategy",
                desc: "Triggered during semantic_search, 24-hour cycle",
              },
              {
                name: "Non-Blocking Execution",
                desc: "Async background update, no impact on user search",
              },
              {
                name: "Batch Processing",
                desc: "Update max 200 contexts, skip recently updated (7 days)",
              },
              {
                name: "Performance Boost",
                desc: "Decision latency 50ms→<1ms, memory usage -15%",
              },
            ],
          },
          processTypes: {
            title: "Supported Context Types",
            desc: "v2.1.2 supported content types:",
            types: [
              { name: "code_create/modify/delete", desc: "Code creation/modification/deletion (Tier 1)" },
              { name: "code_refactor/optimize", desc: "Code refactoring/optimization (Tier 1)" },
              { name: "bug_fix/report", desc: "Bug fixes/reports (Tier 1)" },
              { name: "feature_add/update/remove", desc: "Feature development (Tier 1)" },
              { name: "solution/design/learning", desc: "Solutions/design/learning (Tier 2)" },
              { name: "conversation/error", desc: "Conversations/errors (Tier 3)" },
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
