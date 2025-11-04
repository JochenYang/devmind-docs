export const configurationData = {
  zh: {
    sections: [
      {
        id: "basic-configuration",
        title: "基本配置",
        description: ".devmind.json 基础参数",
        fields: [
          {
            name: "database_path",
            type: "string",
            default: "~/.devmind/memory.db",
            description: "SQLite数据库文件路径",
          },
          {
            name: "max_contexts_per_session",
            type: "number",
            default: "1000",
            description: "每会话最大上下文数量",
          },
          {
            name: "quality_threshold",
            type: "number",
            default: "0.3",
            description: "质量阈值，低于该值可能被优化清理",
          },
          {
            name: "embedding_model",
            type: "string",
            default: '"local"',
            description: "嵌入模型选择(local或外部API)",
          },
          {
            name: "auto_save_interval",
            type: "number",
            default: "30000",
            description: "自动保存间隔(毫秒)",
          },
        ],
      },
      {
        id: "file-filtering",
        title: "文件过滤",
        description: "控制上下文提取与项目检测的文件范围",
        fields: [
          {
            name: "ignored_patterns",
            type: "string[]",
            default: '["node_modules/**", ".git/**", ...]',
            description: "忽略匹配模式",
          },
          {
            name: "included_extensions",
            type: "string[]",
            default: '[".js", ".ts", ".py", ...]',
            description: "包含的文件扩展名",
          },
        ],
      },
      {
        id: "project-detection",
        title: "项目检测",
        description: "启用各种项目分析功能",
        fields: [
          {
            name: "enable_git_analysis",
            type: "boolean",
            default: "true",
            description: "启用Git分析",
          },
          {
            name: "enable_package_detection",
            type: "boolean",
            default: "true",
            description: "启用包检测",
          },
          {
            name: "enable_language_detection",
            type: "boolean",
            default: "true",
            description: "启用语言检测",
          },
        ],
      },
      {
        id: "context-extraction",
        title: "上下文提取",
        description: "控制代码分块与分析行为",
        fields: [
          {
            name: "max_code_chunk_lines",
            type: "number",
            default: "100",
            description: "最大代码块行数",
          },
          {
            name: "enable_comment_analysis",
            type: "boolean",
            default: "true",
            description: "启用注释分析",
          },
          {
            name: "enable_structure_analysis",
            type: "boolean",
            default: "true",
            description: "启用结构分析",
          },
          {
            name: "enable_quality_scoring",
            type: "boolean",
            default: "true",
            description: "启用质量评分",
          },
        ],
      },
      {
        id: "storage-configuration",
        title: "存储配置",
        description: "控制存储与索引行为",
        fields: [
          {
            name: "enable_compression",
            type: "boolean",
            default: "false",
            description: "是否启用压缩",
          },
          {
            name: "enable_full_text_search",
            type: "boolean",
            default: "true",
            description: "是否启用全文检索",
          },
          {
            name: "enable_embeddings",
            type: "boolean",
            default: "false",
            description: "是否启用嵌入",
          },
          {
            name: "backup_interval",
            type: "number",
            default: "86400000",
            description: "备份间隔(毫秒)",
          },
        ],
      },
      {
        id: "intelligent-memory",
        title: "智能记忆",
        description: "智能自动记忆系统配置",
        fields: [
          {
            name: "intelligent_memory.enabled",
            type: "boolean",
            default: "true",
            description: "是否启用智能自动记忆功能",
          },
          {
            name: "intelligent_memory.thresholds.high_value",
            type: "number",
            default: "80",
            description: "高价值阈值，≥此值自动记忆",
          },
          {
            name: "intelligent_memory.thresholds.medium_value",
            type: "number",
            default: "50",
            description: "中等价值阈值，≥此值询问确认",
          },
          {
            name: "intelligent_memory.thresholds.low_value",
            type: "number",
            default: "25",
            description: "低价值阈值，<此值忽略",
          },
          {
            name: "intelligent_memory.weights.code_significance",
            type: "number",
            default: "0.3",
            description: "代码显著性权重(30%)",
          },
          {
            name: "intelligent_memory.weights.problem_complexity",
            type: "number",
            default: "0.25",
            description: "问题复杂度权重(25%)",
          },
          {
            name: "intelligent_memory.weights.solution_importance",
            type: "number",
            default: "0.25",
            description: "解决方案重要性权重(25%)",
          },
          {
            name: "intelligent_memory.weights.reusability",
            type: "number",
            default: "0.2",
            description: "可复用性权重(20%)",
          },
          {
            name: "intelligent_memory.learning.enabled",
            type: "boolean",
            default: "true",
            description: "是否启用反馈学习",
          },
          {
            name: "intelligent_memory.learning.min_feedback_samples",
            type: "number",
            default: "10",
            description: "最小反馈样本数",
          },
        ],
      },
    ],
    sidebar: {
      title: "配置指南",
      sections: [
        { id: "basic-configuration", title: "基本配置" },
        { id: "file-filtering", title: "文件过滤" },
        { id: "project-detection", title: "项目检测" },
        { id: "context-extraction", title: "上下文提取" },
        { id: "storage-configuration", title: "存储配置" },
        { id: "intelligent-memory", title: "智能记忆" },
      ],
      links: {
        title: "相关链接",
        items: [
          { text: "快速开始", to: "/getting-started" },
          { text: "MCP工具", to: "/tools" },
          { text: "API参考", to: "/api-reference" },
        ],
      },
    },
    tableHeaders: {
      paramName: "参数名",
      type: "类型",
      default: "默认值",
      description: "说明",
    },
  },
  en: {
    sections: [
      {
        id: "basic-configuration",
        title: "Basic Configuration",
        description: ".devmind.json basic parameters",
        fields: [
          {
            name: "database_path",
            type: "string",
            default: "~/.devmind/memory.db",
            description: "SQLite database file path",
          },
          {
            name: "max_contexts_per_session",
            type: "number",
            default: "1000",
            description: "Maximum contexts per session",
          },
          {
            name: "quality_threshold",
            type: "number",
            default: "0.3",
            description: "Quality threshold, below which may be cleaned",
          },
          {
            name: "embedding_model",
            type: "string",
            default: '"local"',
            description: "Embedding model selection (local or external API)",
          },
          {
            name: "auto_save_interval",
            type: "number",
            default: "30000",
            description: "Auto-save interval (milliseconds)",
          },
        ],
      },
      {
        id: "file-filtering",
        title: "File Filtering",
        description:
          "Control file scope for context extraction and project detection",
        fields: [
          {
            name: "ignored_patterns",
            type: "string[]",
            default: '["node_modules/**", ".git/**", ...]',
            description: "Ignore patterns",
          },
          {
            name: "included_extensions",
            type: "string[]",
            default: '[".js", ".ts", ".py", ...]',
            description: "Included file extensions",
          },
        ],
      },
      {
        id: "project-detection",
        title: "Project Detection",
        description: "Enable various project analysis features",
        fields: [
          {
            name: "enable_git_analysis",
            type: "boolean",
            default: "true",
            description: "Enable Git analysis",
          },
          {
            name: "enable_package_detection",
            type: "boolean",
            default: "true",
            description: "Enable package detection",
          },
          {
            name: "enable_language_detection",
            type: "boolean",
            default: "true",
            description: "Enable language detection",
          },
        ],
      },
      {
        id: "context-extraction",
        title: "Context Extraction",
        description: "Control code chunking and analysis behavior",
        fields: [
          {
            name: "max_code_chunk_lines",
            type: "number",
            default: "100",
            description: "Maximum code chunk lines",
          },
          {
            name: "enable_comment_analysis",
            type: "boolean",
            default: "true",
            description: "Enable comment analysis",
          },
          {
            name: "enable_structure_analysis",
            type: "boolean",
            default: "true",
            description: "Enable structure analysis",
          },
          {
            name: "enable_quality_scoring",
            type: "boolean",
            default: "true",
            description: "Enable quality scoring",
          },
        ],
      },
      {
        id: "storage-configuration",
        title: "Storage Configuration",
        description: "Control storage and indexing behavior",
        fields: [
          {
            name: "enable_compression",
            type: "boolean",
            default: "false",
            description: "Enable compression",
          },
          {
            name: "enable_full_text_search",
            type: "boolean",
            default: "true",
            description: "Enable full-text search",
          },
          {
            name: "enable_embeddings",
            type: "boolean",
            default: "false",
            description: "Enable embeddings",
          },
          {
            name: "backup_interval",
            type: "number",
            default: "86400000",
            description: "Backup interval (milliseconds)",
          },
        ],
      },
      {
        id: "intelligent-memory",
        title: "Intelligent Memory",
        description: "Intelligent auto-memory system configuration",
        fields: [
          {
            name: "intelligent_memory.enabled",
            type: "boolean",
            default: "true",
            description: "Enable intelligent auto-memory feature",
          },
          {
            name: "intelligent_memory.thresholds.high_value",
            type: "number",
            default: "80",
            description: "High value threshold, auto-remember if ≥ this value",
          },
          {
            name: "intelligent_memory.thresholds.medium_value",
            type: "number",
            default: "50",
            description:
              "Medium value threshold, ask for confirmation if ≥ this value",
          },
          {
            name: "intelligent_memory.thresholds.low_value",
            type: "number",
            default: "25",
            description: "Low value threshold, ignore if < this value",
          },
          {
            name: "intelligent_memory.weights.code_significance",
            type: "number",
            default: "0.3",
            description: "Code significance weight (30%)",
          },
          {
            name: "intelligent_memory.weights.problem_complexity",
            type: "number",
            default: "0.25",
            description: "Problem complexity weight (25%)",
          },
          {
            name: "intelligent_memory.weights.solution_importance",
            type: "number",
            default: "0.25",
            description: "Solution importance weight (25%)",
          },
          {
            name: "intelligent_memory.weights.reusability",
            type: "number",
            default: "0.2",
            description: "Reusability weight (20%)",
          },
          {
            name: "intelligent_memory.learning.enabled",
            type: "boolean",
            default: "true",
            description: "Enable feedback learning",
          },
          {
            name: "intelligent_memory.learning.min_feedback_samples",
            type: "number",
            default: "10",
            description: "Minimum feedback samples",
          },
        ],
      },
    ],
    sidebar: {
      title: "Configuration Guide",
      sections: [
        { id: "basic-configuration", title: "Basic Configuration" },
        { id: "file-filtering", title: "File Filtering" },
        { id: "project-detection", title: "Project Detection" },
        { id: "context-extraction", title: "Context Extraction" },
        { id: "storage-configuration", title: "Storage Configuration" },
        { id: "intelligent-memory", title: "Intelligent Memory" },
      ],
      links: {
        title: "Related Links",
        items: [
          { text: "Getting Started", to: "/getting-started" },
          { text: "MCP Tools", to: "/tools" },
          { text: "API Reference", to: "/api-reference" },
        ],
      },
    },
    tableHeaders: {
      paramName: "Parameter",
      type: "Type",
      default: "Default",
      description: "Description",
    },
  },
};
