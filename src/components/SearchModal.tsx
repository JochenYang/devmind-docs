import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { useLanguage } from '../i18n/LanguageContext';

interface SearchResult {
  title: string;
  titleEn?: string;
  content: string;
  contentEn?: string;
  path: string;
  section?: string;
  sectionEn?: string;
}

const searchData: SearchResult[] = [
  // 首页内容
  {
    title: 'DevMind MCP - 智能上下文感知记忆系统',
    titleEn: 'DevMind MCP - Intelligent Context-Aware Memory System',
    content: 'DevMind MCP是一个智能的上下文感知记忆系统，专为AI助手设计，通过模型上下文协议为AI助手提供持久记忆能力。',
    contentEn: 'DevMind MCP is an intelligent context-aware memory system designed for AI assistants, providing persistent memory capabilities through the Model Context Protocol.',
    path: '/',
    section: '首页',
    sectionEn: 'Home'
  },
  {
    title: '核心特性',
    titleEn: 'Core Features',
    content: '类型化三层自动记忆、混合搜索、100%本地存储、14个MCP工具、跨平台兼容、AI驱动的项目分析、多语言支持、内存图可视化。',
    contentEn: 'Type-based 3-tier auto-memory, hybrid search, 100% local storage, 14 MCP tools, cross-platform compatibility, AI-driven project analysis, multi-language support, memory graph visualization.',
    path: '/',
    section: '特性',
    sectionEn: 'Features'
  },
  // 快速开始页面
  {
    title: '快速开始指南',
    content: '在几分钟内安装并配置DevMind MCP，开始构建您的智能记忆系统。',
    path: '/getting-started',
    section: '快速开始'
  },
  {
    title: '系统要求',
    titleEn: 'System Requirements',
    content: 'Node.js >= 20.0.0、MCP兼容客户端、操作系统支持。',
    contentEn: 'Node.js >= 20.0.0, MCP compatible clients, operating system support.',
    path: '/getting-started',
    section: '系统要求',
    sectionEn: 'System Requirements'
  },
  {
    title: '安装方式',
    content: 'NPX方式、全局安装、源码安装三种安装方式。',
    path: '/getting-started',
    section: '安装方式'
  },
  // MCP工具页面
  {
    title: 'MCP工具',
    titleEn: 'MCP Tools',
    content: 'DevMind MCP提供14个工具，分为5大类：会话管理、上下文操作、项目分析、可视化与系统状态。',
    contentEn: 'DevMind MCP provides 14 tools in 5 categories: session management, context operations, project analysis, visualization, and system status.',
    path: '/tools',
    section: 'MCP工具',
    sectionEn: 'MCP Tools'
  },
  {
    title: '会话管理工具',
    content: 'create_session、get_current_session、end_session、delete_session四个工具。',
    path: '/tools',
    section: '会话管理'
  },
  {
    title: '上下文操作工具',
    titleEn: 'Context Operations Tools',
    content: 'record_context、semantic_search、list_contexts、delete_context、update_context、get_related_contexts六个工具。支持三层自动记忆和混合搜索。',
    contentEn: 'Six tools: record_context, semantic_search, list_contexts, delete_context, update_context, get_related_contexts. Supports three-tier auto-memory and hybrid search.',
    path: '/tools',
    section: '上下文操作',
    sectionEn: 'Context Operations'
  },
  // CLI参考页面
  {
    title: 'CLI命令参考',
    content: 'DevMind CLI提供完整的命令行界面，涵盖初始化、搜索、维护、备份等常用操作。',
    path: '/cli-reference',
    section: 'CLI参考'
  },
  {
    title: '快速开始命令',
    content: 'devmind init、devmind start、devmind status三个基础命令。',
    path: '/cli-reference',
    section: '快速开始'
  },
  {
    title: '搜索与查询',
    content: 'devmind search、devmind extract命令用于语义搜索和文件上下文提取。',
    path: '/cli-reference',
    section: '搜索查询'
  },
  // 配置指南页面
  {
    title: '配置指南',
    content: '通过.devmind.json配置文件控制DevMind的行为，包括数据库、搜索、文件过滤等关键维度。',
    path: '/configuration',
    section: '配置指南'
  },
  {
    title: '基本配置',
    content: 'database_path、max_contexts_per_session、quality_threshold、embedding_model、auto_save_interval等基本参数。',
    path: '/configuration',
    section: '基本配置'
  },
  // API参考页面
  {
    title: 'API参考',
    content: 'DevMind MCP提供面向开发者的JavaScript/TypeScript API，覆盖记录上下文、语义搜索、更新上下文与项目分析四类核心能力。',
    path: '/api-reference',
    section: 'API参考'
  },
  {
    title: '记录上下文API',
    titleEn: 'Record Context API',
    content: 'record_context方法用于记录开发上下文，包含content、type、tags、metadata参数。',
    contentEn: 'The record_context method is used to record development context, including content, type, tags, and metadata parameters.',
    path: '/api-reference',
    section: '记录上下文',
    sectionEn: 'Record Context'
  },
  {
    title: '语义搜索API',
    content: 'semantic_search方法用于语义搜索相关上下文，支持query、limit、type、tags、timeRange参数。',
    path: '/api-reference',
    section: '语义搜索'
  },
  // 使用场景页面
  {
    title: '使用场景',
    content: 'DevMind MCP在真实工作流中体现为将分散的代码变更、决策与知识沉淀为可检索资产。',
    path: '/use-cases',
    section: '使用场景'
  },
  {
    title: '软件开发',
    content: '跟踪代码变更历史，维护开发上下文，存储解决方案和最佳实践，记录项目演进过程。',
    path: '/use-cases',
    section: '软件开发'
  },
  {
    title: 'AI助手增强',
    content: '为AI提供持久记忆，维护对话上下文，存储用户偏好，支持长期AI关系建立。',
    path: '/use-cases',
    section: 'AI助手增强'
  },
  // 智能记忆页面
  {
    title: '类型化三层自动记忆',
    titleEn: 'Type-Based 3-Tier Auto-Memory',
    content: '基于内容类型直接决定记忆行为，决策速度提升50倍，内存使用减少15%。支持三层记忆策略：静默自动记录、通知后自动记录、默认不记录。',
    contentEn: 'Direct memory decision based on content type, 50x faster decision speed, 15% less memory usage. Supports three-tier strategy: silent auto-record, notify auto-record, default skip.',
    path: '/auto-memory',
    section: '智能记忆',
    sectionEn: 'Auto-Memory'
  },
  {
    title: '第1层：静默自动记录',
    titleEn: 'Tier 1: Silent Auto-Record',
    content: '技术执行类 - 自动记录，无需确认。包括bug_fix、feature_add、code_modify、code_refactor等类型。',
    contentEn: 'Technical execution - Auto-record without confirmation. Includes bug_fix, feature_add, code_modify, code_refactor types.',
    path: '/auto-memory',
    section: '三层策略',
    sectionEn: 'Three-Tier Strategy'
  },
  {
    title: '第2层：通知后自动记录',
    titleEn: 'Tier 2: Notify Auto-Record',
    content: '设计方案类 - 自动记录，提供删除选项。包拯solution、design、learning等类型。',
    contentEn: 'Design & solutions - Auto-record with delete option. Includes solution, design, learning types.',
    path: '/auto-memory',
    section: '三层策略',
    sectionEn: 'Three-Tier Strategy'
  },
  {
    title: '后台质量更新',
    titleEn: 'Background Quality Update',
    content: '懒加载策略，在semantic_search时触发，24小时周期更新，非阻塞异步执行。',
    contentEn: 'Lazy-loading strategy, triggered during semantic_search, 24-hour cycle, non-blocking async execution.',
    path: '/auto-memory',
    section: '质量管理',
    sectionEn: 'Quality Management'
  },
  // 常见问题页面
  {
    title: '常见问题',
    content: '汇总安装、配置、使用与开发贡献中的常见问题，并给出可执行的排查路径与参考链接。',
    path: '/faq',
    section: '常见问题'
  },
  {
    title: '安装问题',
    content: 'Node版本过低、全局安装权限不足、客户端不识别DevMind服务器等安装相关问题。',
    path: '/faq',
    section: '安装问题'
  },
  {
    title: '配置问题',
    content: 'MCP客户端配置、数据库路径不可写、嵌入模型加载失败等配置相关问题。',
    path: '/faq',
    section: '配置问题'
  }
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      // 使用fuse.js进行模糊搜索
      const searchKeys = language === 'zh' 
        ? [
            { name: 'title', weight: 0.4 },
            { name: 'content', weight: 0.3 },
            { name: 'section', weight: 0.3 }
          ]
        : [
            { name: 'titleEn', weight: 0.4 },
            { name: 'contentEn', weight: 0.3 },
            { name: 'sectionEn', weight: 0.3 }
          ];
      
      const fuse = new Fuse(searchData, {
        keys: searchKeys,
        threshold: 0.3,
        includeScore: true,
        minMatchCharLength: 2
      });
      
      const searchResults = fuse.search(query);
      setResults(searchResults.map(result => result.item).slice(0, 8));
    } else {
      setResults([]);
    }
    setSelectedIndex(0);
  }, [query, language]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* 搜索模态框 */}
      <div className="relative w-full max-w-2xl mx-4 bg-white border border-gray-300 shadow-lg">
        {/* 搜索输入框 */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={language === 'zh' ? '搜索文档内容...' : 'Search documentation...'}
            className="flex-1 text-lg outline-none"
          />
          <div className="text-sm text-gray-400 ml-3">
            <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">ESC</kbd>
          </div>
        </div>

        {/* 搜索结果 */}
        {query && (
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none ${
                      index === selectedIndex ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h3 className="text-sm font-medium text-gray-900 mr-2">
                            {language === 'zh' ? result.title : (result.titleEn || result.title)}
                          </h3>
                          {(language === 'zh' ? result.section : (result.sectionEn || result.section)) && (
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {language === 'zh' ? result.section : (result.sectionEn || result.section)}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {language === 'zh' ? result.content : (result.contentEn || result.content)}
                        </p>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-sm">{language === 'zh' ? '未找到相关内容' : 'No results found'}</p>
              </div>
            )}
          </div>
        )}

        {/* 快捷键提示 */}
        {!query && (
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center justify-between">
                <span>{language === 'zh' ? '快速导航' : 'Quick navigation'}</span>
                <div className="flex items-center space-x-2">
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">↑↓</kbd>
                  <span>{language === 'zh' ? '选择' : 'Navigate'}</span>
                  <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs">Enter</kbd>
                  <span>{language === 'zh' ? '确认' : 'Select'}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;