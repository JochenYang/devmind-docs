# 快速部署指南

## 🎯 目标

将DevMind文档网站部署到GitHub Pages,使其可以通过公开URL访问。

## 📋 前提条件

- ✅ GitHub账号
- ✅ Git已安装
- ✅ Node.js 18+ 已安装

## 🚀 部署步骤 (5分钟)

### 步骤1: 创建GitHub仓库

1. 访问 https://github.com/new
2. 仓库名称: `devmind-docs` (或其他名称)
3. 设置为Public
4. 不要初始化README、.gitignore或license
5. 点击"Create repository"

### 步骤2: 初始化并推送代码

在devmind-docs目录中运行:

**Windows (PowerShell):**
```powershell
# 运行部署设置脚本
.\deploy-setup.ps1

# 然后按照提示关联远程仓库
git remote add origin https://github.com/YOUR_USERNAME/devmind-docs.git
git branch -M main
git push -u origin main
```

**macOS/Linux:**
```bash
# 运行部署设置脚本
chmod +x deploy-setup.sh
./deploy-setup.sh

# 然后按照提示关联远程仓库
git remote add origin https://github.com/YOUR_USERNAME/devmind-docs.git
git branch -M main
git push -u origin main
```

**或者手动执行:**
```bash
cd devmind-docs
git init
git add .
git commit -m "Initial commit: DevMind documentation website"
git remote add origin https://github.com/YOUR_USERNAME/devmind-docs.git
git branch -M main
git push -u origin main
```

### 步骤3: 配置GitHub Pages

1. 在GitHub仓库页面,点击 **Settings**
2. 在左侧菜单找到 **Pages**
3. 在"Build and deployment"部分:
   - Source: 选择 **GitHub Actions**
4. 保存设置

### 步骤4: 等待部署完成

1. 点击仓库顶部的 **Actions** 标签
2. 查看"Deploy to GitHub Pages"工作流
3. 等待构建和部署完成(通常2-3分钟)
4. 部署成功后会显示绿色✅

### 步骤5: 访问网站

部署完成后,访问:
```
https://YOUR_USERNAME.github.io/devmind-docs/
```

## 🔄 后续更新

每次更新文档后:

```bash
cd devmind-docs
git add .
git commit -m "Update documentation"
git push
```

GitHub Actions会自动重新部署。

## ⚙️ 配置base路径

如果你的仓库名不是`devmind-docs`,需要更新`vite.config.ts`:

```typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/',  // 改成你的仓库名
  // ...
});
```

## 🐛 故障排除

### 问题1: 页面显示404

**原因**: base路径配置不正确

**解决**:
1. 检查`vite.config.ts`中的base路径
2. 确保与GitHub仓库名匹配
3. 重新构建并推送

### 问题2: 构建失败

**原因**: 依赖安装或构建错误

**解决**:
1. 查看GitHub Actions日志
2. 本地运行`npm run build`测试
3. 检查Node.js版本是否为18+

### 问题3: 版本号显示错误

**原因**: fetch-version.js脚本失败

**解决**:
1. 检查npm API是否可访问
2. 查看Actions日志中的fetch-version步骤
3. 手动更新`src/data/version.ts`

## 📚 相关资源

- 主项目: https://github.com/JochenYang/Devmind
- npm包: https://www.npmjs.com/package/devmind-mcp
- 详细部署指南: [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

## 💡 提示

- 首次部署可能需要5-10分钟
- 后续更新通常2-3分钟完成
- 可以在Actions标签查看部署进度
- 部署失败会收到邮件通知

---

**需要帮助?** 在主仓库提交Issue: https://github.com/JochenYang/Devmind/issues
