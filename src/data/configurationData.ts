export const configurationData = {
  zh: {
    sections: [
      {
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
    ],
    sidebar: {
      title: "配置指南",
      sections: ["基本配置", "文件过滤", "项目检测", "上下文提取", "存储配置"],
      links: {
        title: "相关链接",
        items: [
          { text: "快速开始", to: "/getting-started" },
          { text: "CLI参考", to: "/cli-reference" },
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
    ],
    sidebar: {
      title: "Configuration Guide",
      sections: [
        "Basic Configuration",
        "File Filtering",
        "Project Detection",
        "Context Extraction",
        "Storage Configuration",
      ],
      links: {
        title: "Related Links",
        items: [
          { text: "Getting Started", to: "/getting-started" },
          { text: "CLI Reference", to: "/cli-reference" },
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
