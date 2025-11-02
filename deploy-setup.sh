#!/bin/bash

# DevMind文档网站部署设置脚本

echo "🚀 DevMind文档网站部署设置"
echo "================================"
echo ""

# 检查是否在devmind-docs目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在devmind-docs目录中运行此脚本"
    exit 1
fi

# 检查是否已经是git仓库
if [ -d ".git" ]; then
    echo "⚠️  警告: 此目录已经是git仓库"
    read -p "是否继续? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    # 初始化git仓库
    echo "📦 初始化git仓库..."
    git init
    git add .
    git commit -m "Initial commit: DevMind documentation website"
    echo "✅ Git仓库初始化完成"
fi

echo ""
echo "📝 下一步操作:"
echo "1. 在GitHub上创建新仓库 (例如: devmind-docs)"
echo "2. 运行以下命令关联远程仓库:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/devmind-docs.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. 在GitHub仓库设置中:"
echo "   - 进入 Settings > Pages"
echo "   - Source 选择 'GitHub Actions'"
echo ""
echo "4. GitHub Actions会自动部署网站"
echo ""
echo "🌐 部署后访问: https://YOUR_USERNAME.github.io/devmind-docs/"
echo ""
