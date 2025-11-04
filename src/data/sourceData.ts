/**
 * DevMind MCP 项目数据源
 * 从实际源代码提取的准确信息
 */

export interface MCPTool {
  name: string;
  description: string;
  category: string;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required: string[];
  };
}

export interface ProjectInfo {
  name: string;
  version: string;
  description: string;
  license: string;
  repository: string;
  nodeVersion: string;
  toolCount: number;
  features: Array<{
    title: string;
    description: string;
  }>;
}

// 18个MCP工具定义
export const MCP_TOOLS: MCPTool[] = [
  // === 会话管理 (4个工具) ===
  {
    name: "create_session",
    description: "为项目创建新的开发会话（或重用现有活动会话）",
    category: "会话管理",
    inputSchema: {
      type: "object",
      properties: {
        project_path: { type: "string", description: "项目目录路径" },
        tool_used: {
          type: "string",
          description: "使用的工具 (vscode, cli等)",
        },
        name: { type: "string", description: "可选的会话名称" },
        metadata: { type: "object", description: "可选的元数据" },
        force: {
          type: "boolean",
          description: "强制创建新会话，即使存在活动会话 (默认: false)",
        },
      },
      required: ["project_path", "tool_used"],
    },
  },
  {
    name: "get_current_session",
    description: "获取项目的当前活动会话",
    category: "会话管理",
    inputSchema: {
      type: "object",
      properties: {
        project_path: { type: "string", description: "项目目录路径" },
      },
      required: ["project_path"],
    },
  },
  {
    name: "end_session",
    description: "结束开发会话",
    category: "会话管理",
    inputSchema: {
      type: "object",
      properties: {
        session_id: { type: "string", description: "要结束的会话ID" },
      },
      required: ["session_id"],
    },
  },
  {
    name: "delete_session",
    description: "删除会话及其所有上下文（谨慎使用）",
    category: "会话管理",
    inputSchema: {
      type: "object",
      properties: {
        session_id: { type: "string", description: "要删除的会话ID" },
      },
      required: ["session_id"],
    },
  },

  // === 上下文操作 (7个工具) ===
  {
    name: "record_context",
    description: "记录开发上下文，支持丰富的元数据和智能质量过滤",
    category: "上下文操作",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: [
            "code_create",
            "code_modify",
            "code_delete",
            "code_refactor",
            "code_optimize",
            "bug_fix",
            "bug_report",
            "feature_add",
            "feature_update",
            "feature_remove",
            "code",
            "conversation",
            "error",
            "solution",
            "documentation",
            "test",
            "configuration",
            "commit",
          ],
          description: "上下文类型",
        },
        content: { type: "string", description: "上下文内容" },
        session_id: {
          type: "string",
          description: "会话ID（如果提供project_path则可选）",
        },
        project_path: {
          type: "string",
          description: "项目路径，用于自动检测会话",
        },
        file_path: { type: "string", description: "可选的文件路径" },
        line_ranges: {
          type: "array",
          items: {
            type: "array",
            items: { type: "number" },
            minItems: 2,
            maxItems: 2,
          },
          description: "多个行范围: [[10,15], [50,60]]",
        },
        tags: {
          type: "array",
          items: { type: "string" },
          description: "可选标签",
        },
        change_type: {
          type: "string",
          enum: ["add", "modify", "delete", "refactor", "rename"],
          description: "变更类型（如未提供则自动检测）",
        },
        impact_level: {
          type: "string",
          enum: ["breaking", "major", "minor", "patch"],
          description: "影响级别（如未提供则自动评估）",
        },
        files_changed: {
          type: "array",
          items: {
            type: "object",
            properties: {
              file_path: { type: "string" },
              change_type: {
                type: "string",
                enum: ["add", "modify", "delete", "rename"],
              },
              line_ranges: { type: "array" },
              diff_stats: { type: "object" },
            },
          },
          description: "跟踪多个文件的变更",
        },
      },
      required: ["type", "content"],
    },
  },
  {
    name: "semantic_search",
    description: "多维度AI搜索（语义40% + 关键词30% + 质量20% + 新鲜度10%）",
    category: "上下文操作",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "搜索查询文本" },
        project_id: {
          type: "string",
          description: "可选的项目ID，限定搜索范围",
        },
        session_id: {
          type: "string",
          description: "可选的会话ID，限定搜索范围",
        },
        file_path: { type: "string", description: "过滤到特定文件" },
        limit: { type: "number", description: "最大结果数（默认: 10）" },
        similarity_threshold: {
          type: "number",
          description: "最小相似度 0-1（默认: 0.5）",
        },
        hybrid_weight: {
          type: "number",
          description: "语义vs关键词权重 0-1（默认: 0.7）",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "list_contexts",
    description: "列出记录的上下文（搜索历史、调试会话、代码变更）",
    category: "上下文操作",
    inputSchema: {
      type: "object",
      properties: {
        session_id: { type: "string", description: "可选的会话ID过滤" },
        project_id: { type: "string", description: "可选的项目ID过滤" },
        limit: { type: "number", description: "最大结果数（默认: 20）" },
      },
      required: [],
    },
  },
  {
    name: "delete_context",
    description: "删除特定的记录上下文",
    category: "上下文操作",
    inputSchema: {
      type: "object",
      properties: {
        context_id: { type: "string", description: "要删除的上下文ID" },
      },
      required: ["context_id"],
    },
  },
  {
    name: "update_context",
    description: "更新上下文内容、元数据、标签或文件关联",
    category: "上下文操作",
    inputSchema: {
      type: "object",
      properties: {
        context_id: { type: "string", description: "要更新的上下文ID" },
        content: { type: "string", description: "新内容" },
        tags: {
          type: "array",
          items: { type: "string" },
          description: "新标签",
        },
        quality_score: { type: "number", description: "新质量分数 (0-1)" },
        metadata: { type: "object", description: "新元数据" },
      },
      required: ["context_id"],
    },
  },
  {
    name: "extract_file_context",
    description: "从单个文件提取结构化元数据（类、函数、导入）",
    category: "上下文操作",
    inputSchema: {
      type: "object",
      properties: {
        file_path: { type: "string", description: "文件路径" },
        session_id: {
          type: "string",
          description: "可选的会话ID，用于记录上下文",
        },
        record: { type: "boolean", description: "是否记录提取的上下文" },
      },
      required: ["file_path"],
    },
  },
  {
    name: "get_related_contexts",
    description: "获取与特定上下文相关的上下文",
    category: "上下文操作",
    inputSchema: {
      type: "object",
      properties: {
        context_id: {
          type: "string",
          description: "要查找相关上下文的上下文ID",
        },
        relation_type: {
          type: "string",
          enum: [
            "depends_on",
            "related_to",
            "fixes",
            "implements",
            "tests",
            "documents",
          ],
          description: "可选的特定关系类型",
        },
      },
      required: ["context_id"],
    },
  },

  // === 项目分析 (2个工具) ===
  {
    name: "project_analysis_engineer",
    description: "全面的项目分析和文档生成器（DEVMIND.md、CLAUDE.md）",
    category: "项目分析",
    inputSchema: {
      type: "object",
      properties: {
        project_path: { type: "string", description: "要分析的项目目录路径" },
        analysis_focus: {
          type: "string",
          description:
            "关注领域：architecture, entities, apis, business_logic, security, performance（逗号分隔）",
        },
        doc_style: {
          type: "string",
          enum: ["devmind", "claude", "technical", "readme"],
          description: "文档样式",
        },
        language: {
          type: "string",
          enum: ["en", "zh", "auto"],
          description: "文档语言（默认: auto）",
        },
        auto_save: {
          type: "boolean",
          description: "自动保存到内存（默认: true）",
        },
      },
      required: ["project_path"],
    },
  },
  {
    name: "list_projects",
    description: "列出所有项目及内存统计信息（上下文数、会话数、最后活动）",
    category: "项目分析",
    inputSchema: {
      type: "object",
      properties: {
        include_stats: {
          type: "boolean",
          description: "包含详细统计信息（默认: true）",
        },
        limit: { type: "number", description: "最大项目数（默认: 50）" },
      },
      required: [],
    },
  },

  // === 内存优化 (4个工具) ===
  {
    name: "optimize_project_memory",
    description: "优化项目内存存储和性能",
    category: "内存优化",
    inputSchema: {
      type: "object",
      properties: {
        project_id: { type: "string", description: "要优化的项目ID" },
        strategies: {
          type: "array",
          items: {
            type: "string",
            enum: [
              "clustering",
              "compression",
              "deduplication",
              "summarization",
              "ranking",
              "archiving",
            ],
          },
          description: "要应用的优化策略（默认: all）",
        },
        dry_run: {
          type: "boolean",
          description: "预览而不应用更改（默认: false）",
        },
      },
      required: ["project_id"],
    },
  },
  {
    name: "update_quality_scores",
    description: "重新计算上下文的多维度质量分数（新鲜度、相关性、有用性）",
    category: "内存优化",
    inputSchema: {
      type: "object",
      properties: {
        project_id: { type: "string", description: "可选的项目ID过滤" },
        limit: { type: "number", description: "最大更新上下文数（默认: 100）" },
        force_all: {
          type: "boolean",
          description: "强制更新所有上下文（默认: false）",
        },
      },
      required: [],
    },
  },
  {
    name: "generate_embeddings",
    description: "使用并行处理生成向量嵌入（快5倍）",
    category: "内存优化",
    inputSchema: {
      type: "object",
      properties: {
        project_id: { type: "string", description: "可选的项目ID过滤" },
        limit: { type: "number", description: "最大处理上下文数（默认: 50）" },
        force_update: { type: "boolean", description: "更新现有嵌入" },
      },
      required: [],
    },
  },
  {
    name: "export_memory_graph",
    description: "将项目内存关系导出为交互式HTML可视化",
    category: "内存优化",
    inputSchema: {
      type: "object",
      properties: {
        project_id: { type: "string", description: "要导出图形的项目ID" },
        output_path: { type: "string", description: "可选的自定义输出路径" },
        focus_type: {
          type: "string",
          enum: [
            "all",
            "solution",
            "error",
            "code",
            "documentation",
            "conversation",
          ],
          description: "按上下文类型过滤（默认: all）",
        },
        max_nodes: {
          type: "number",
          description: "最大节点数（默认: 0 = 全部）",
        },
      },
      required: ["project_id"],
    },
  },

  // === 系统状态 (1个工具) ===
  {
    name: "get_memory_status",
    description: "获取内存系统状态信息（监控状态、上下文数、缓存统计）",
    category: "系统状态",
    inputSchema: {
      type: "object",
      properties: {
        project_path: { type: "string", description: "项目路径（可选）" },
      },
      required: [],
    },
  },
];

// 导入版本号（构建时自动生成）
import { NPM_VERSION } from "./version";

// 项目信息
export const PROJECT_INFO: ProjectInfo = {
  name: "DevMind MCP",
  version: NPM_VERSION,
  description: "AI助手记忆系统 - 纯 MCP 工具",
  license: "MIT",
  repository: "https://github.com/JochenYang/Devmind",
  nodeVersion: ">=18.0.0",
  toolCount: 18,
  features: [
    {
      title: "智能记忆管理",
      description:
        "通过 MCP 协议实现 AI 驱动的上下文记录，将开发过程沉淀为可检索记忆",
    },
    {
      title: "混合搜索",
      description:
        "结合语义搜索(40%) + 关键词搜索(30%) + 质量评分(20%) + 新鲜度(10%)",
    },
    {
      title: "100%本地存储",
      description: "使用SQLite进行本地存储，零云端传输，完全隐私保护",
    },
    {
      title: "18个MCP工具",
      description: "提供完整的记忆管理和项目分析工具包，覆盖全流程",
    },
  ],
};

// 工具分类统计
export const TOOL_CATEGORIES = {
  会话管理: 4,
  上下文操作: 7,
  项目分析: 2,
  内存优化: 4,
  系统状态: 1,
};

// 获取指定分类的工具
export function getToolsByCategory(category: string): MCPTool[] {
  return MCP_TOOLS.filter((tool) => tool.category === category);
}

// 获取所有分类
export function getAllCategories(): string[] {
  return Object.keys(TOOL_CATEGORIES);
}
