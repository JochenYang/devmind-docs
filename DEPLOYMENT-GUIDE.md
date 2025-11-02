# DevMind文档网站部署指南

## 方案概述

由于devmind-docs已添加到主仓库的.gitignore,我们需要创建一个独立的GitHub仓库来托管文档网站。

## 部署步骤

### 1. 创建独立的文档仓库

```bash
# 在devmind-docs目录中初始化git
cd devmind-docs
git init
git add .
git commit -m "Initial commit: DevMind documentation website"

# 在GitHub上创建新仓库 (例如: devmind-docs)
# 然后关联远程仓库
git remote add origin https://github.com/Jochenyang/devmind-docs.git
git branch -M main
git push -u origin main
```

### 2. 配置GitHub Pages

在GitHub仓库设置中:
1. 进入 Settings > Pages
2. Source 选择 "GitHub Actions"

### 3. 创建GitHub Actions工作流

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install --prefer-offline

      - name: Fetch version from npm
        run: node scripts/fetch-version.js

      - name: Build
        run: pnpm run build
        env:
          NODE_ENV: production

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. 更新vite.config.ts

确保base路径配置正确:

```typescript
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/devmind-docs/' : '/',
  // ... 其他配置
});
```

如果仓库名不是devmind-docs,请相应修改base路径。

### 5. 推送并部署

```bash
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push
```

GitHub Actions会自动触发构建和部署。

## 自动更新策略

### 方案A: 手动同步

当主仓库更新时,手动复制devmind-docs目录到文档仓库:

```bash
# 在主仓库目录
cd devmind-docs
git add .
git commit -m "Update documentation"
git push
```

### 方案B: 使用脚本自动同步

在主仓库创建同步脚本 `sync-docs.sh`:

```bash
#!/bin/bash

# 配置
DOCS_DIR="devmind-docs"
DOCS_REPO_URL="https://github.com/YOUR_USERNAME/devmind-docs.git"
TEMP_DIR="/tmp/devmind-docs-sync"

# 清理临时目录
rm -rf $TEMP_DIR

# 克隆文档仓库
git clone $DOCS_REPO_URL $TEMP_DIR

# 复制文件(排除.git目录)
rsync -av --delete --exclude='.git' --exclude='node_modules' --exclude='dist' $DOCS_DIR/ $TEMP_DIR/

# 提交并推送
cd $TEMP_DIR
git add .
git commit -m "Sync from main repo: $(date '+%Y-%m-%d %H:%M:%S')"
git push

# 清理
cd -
rm -rf $TEMP_DIR

echo "Documentation synced successfully!"
```

使用方法:
```bash
chmod +x sync-docs.sh
./sync-docs.sh
```

### 方案C: GitHub Actions自动同步(推荐)

在主仓库创建 `.github/workflows/sync-docs.yml`:

```yaml
name: Sync Documentation

on:
  push:
    branches: [main]
    paths:
      - 'devmind-docs/**'
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout main repo
        uses: actions/checkout@v4
        with:
          path: main-repo

      - name: Checkout docs repo
        uses: actions/checkout@v4
        with:
          repository: YOUR_USERNAME/devmind-docs
          token: ${{ secrets.DOCS_REPO_TOKEN }}
          path: docs-repo

      - name: Sync files
        run: |
          rsync -av --delete \
            --exclude='.git' \
            --exclude='node_modules' \
            --exclude='dist' \
            main-repo/devmind-docs/ docs-repo/

      - name: Commit and push
        run: |
          cd docs-repo
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add .
          git diff --quiet && git diff --staged --quiet || \
            (git commit -m "Sync from main repo: $(date '+%Y-%m-%d %H:%M:%S')" && git push)
```

需要配置:
1. 创建Personal Access Token (Settings > Developer settings > Personal access tokens)
2. 在主仓库添加Secret: `DOCS_REPO_TOKEN`

## 访问网站

部署成功后,网站将在以下地址访问:
```
https://YOUR_USERNAME.github.io/devmind-docs/
```

## 自定义域名(可选)

1. 在文档仓库的`public`目录创建`CNAME`文件:
```
docs.devmind.io
```

2. 在域名DNS设置中添加CNAME记录:
```
docs -> YOUR_USERNAME.github.io
```

3. 在GitHub仓库Settings > Pages中配置自定义域名

## 故障排除

### 构建失败
- 检查Node.js版本是否为18+
- 检查pnpm版本是否正确
- 查看GitHub Actions日志

### 页面404
- 确认base路径配置正确
- 检查GitHub Pages设置
- 确认dist目录已正确上传

### 版本号未更新
- 检查fetch-version.js脚本是否正常运行
- 确认npm API可访问

## 维护建议

1. **定期同步**: 主仓库更新后及时同步文档
2. **版本标签**: 为重要更新打标签
3. **监控部署**: 关注GitHub Actions运行状态
4. **备份**: 定期备份文档仓库

## 相关链接

- 主仓库: https://github.com/JochenYang/Devmind
- 文档仓库: https://github.com/YOUR_USERNAME/devmind-docs
- 在线文档: https://YOUR_USERNAME.github.io/devmind-docs/
