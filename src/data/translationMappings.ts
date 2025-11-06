// CLI命令描述的英文翻译
export const CLI_COMMAND_TRANSLATIONS: Record<string, string> = {
  // 命令描述
  初始化DevMind配置: "Initialize DevMind configuration",
  启动文件监控守护进程: "Start file monitoring daemon",
  停止文件监控守护进程: "Stop file monitoring daemon",
  检查守护进程状态: "Check daemon status",
  显示内存数据库统计信息: "Display memory database statistics",
  搜索上下文: "Search contexts",
  从文件提取上下文: "Extract context from file",
  导出内存图可视化: "Export memory graph visualization",
  更新上下文的质量分数: "Update context quality scores",
  优化内存存储: "Optimize memory storage",
  数据库维护操作: "Database maintenance operations",

  // 选项描述
  配置文件路径: "Config file path",
  "Project path": "Project path",
  禁用终端命令监控: "Disable terminal command monitoring",
  当前目录: "Current directory",
  搜索查询: "Search query",
  最大结果数: "Maximum results",
  会话ID: "Session ID",
  记录提取的上下文: "Record extracted context",
  最大节点数: "Maximum nodes",
  按类型过滤: "Filter by type",
  最大更新数: "Maximum updates",
  强制更新所有上下文: "Force update all contexts",
  预览而不应用: "Preview without applying",
  "操作: vacuum, backup, restore": "Action: vacuum, backup, restore",
  "备份文件路径（用于restore）": "Backup file path (for restore)",
  备份输出路径: "Backup output path",
  强制恢复而不确认: "Force restore without confirmation",

  // 工作流标题
  常见工作流: "Common Workflows",
  初始化和启动: "Initialize and Start",
  搜索和查询: "Search and Query",
  项目分析和优化: "Project Analysis and Optimization",
};

// MCP工具描述的英文翻译
export const MCP_TOOL_TRANSLATIONS: Record<string, string> = {
  // 工具描述
  "为项目创建新的开发会话（或重用现有活动会话）":
    "Create a new development session for a project (or reuse existing active session)",
  获取项目的当前活动会话: "Get the current active session for a project",
  结束开发会话: "End a development session",
  "删除会话及其所有上下文（谨慎使用）":
    "Delete a session and all its contexts (use with caution)",
  "记录开发上下文，支持丰富的元数据和智能质量过滤":
    "Record development context with rich metadata and intelligent quality filtering",
  "记录开发上下文，支持多文件跟踪、变更检测和影响分析":
    "Record development context with multi-file tracking, change detection, and impact analysis",
  "多维度AI搜索（语义40% + 关键词30% + 质量20% + 新鲜度10%）":
    "Multi-dimensional AI search (semantic 40% + keyword 30% + quality 20% + freshness 10%)",
  "列出记录的上下文（搜索历史、调试会话、代码变更）":
    "List recorded contexts (search history, debug sessions, code changes)",
  "列出已记录的上下文（搜索历史、调试会话、代码变更）":
    "List recorded contexts (search history, debug sessions, code changes)",
  删除特定的记录上下文: "Delete a specific recorded context",
  删除特定的已记录上下文: "Delete a specific recorded context",
  "更新上下文内容、元数据、标签或文件关联":
    "Update context content, metadata, tags, or file associations",
  "更新上下文内容、元数据、标签、质量评分或文件关联":
    "Update context content, metadata, tags, quality score, or file associations",
  获取与特定上下文相关的上下文: "Get contexts related to a specific context",
  "从单个文件提取结构化元数据（类、函数、导入）":
    "Extract structured metadata from a single file (classes, functions, imports)",
  "全面的项目分析和文档生成器（DEVMIND.md、CLAUDE.md）":
    "Comprehensive project analysis and documentation generator (DEVMIND.md, CLAUDE.md)",
  综合项目分析和文档生成器:
    "Comprehensive project analysis and documentation generator",
  "列出所有项目及内存统计信息（上下文数、会话数、最后活动）":
    "List all projects with memory statistics (context count, session count, last activity)",
  列出所有项目及其内存统计信息: "List all projects with memory statistics",
  优化项目内存存储和性能: "Optimize project memory storage and performance",
  "重新计算上下文的多维度质量分数（新鲜度、相关性、有用性）":
    "Recalculate multi-dimensional quality scores for contexts (freshness, relevance, usefulness)",
  重新计算上下文的多维度质量评分:
    "Recalculate multi-dimensional quality scores for contexts",
  "使用并行处理生成向量嵌入（快5倍）":
    "Generate vector embeddings with parallel processing (5x faster)",
  "生成向量嵌入，支持并行处理":
    "Generate vector embeddings with parallel processing",
  将项目内存关系导出为交互式HTML可视化:
    "Export project memory relationships as interactive HTML visualization",
  导出项目内存关系为交互式HTML可视化:
    "Export project memory relationships as interactive HTML visualization",
  "获取内存系统状态信息（监控状态、上下文数、缓存统计）":
    "Get memory system status information (monitoring state, context count, cache statistics)",
  获取内存系统状态信息: "Get memory system status information",

  // 分类
  会话管理: "Session Management",
  上下文操作: "Context Operations",
  项目分析: "Project Analysis",
  可视化: "Visualization",
  内存优化: "Memory Optimization",
  系统状态: "System Status",
};

// 通用翻译
export const COMMON_TRANSLATIONS: Record<string, string> = {
  默认值: "Default",
  无: "None",
};
