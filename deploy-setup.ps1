# DevMind文档网站部署设置脚本 (PowerShell)

Write-Host "🚀 DevMind文档网站部署设置" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否在devmind-docs目录
if (-not (Test-Path "package.json")) {
    Write-Host "❌ 错误: 请在devmind-docs目录中运行此脚本" -ForegroundColor Red
    exit 1
}

# 检查是否已经是git仓库
if (Test-Path ".git") {
    Write-Host "⚠️  警告: 此目录已经是git仓库" -ForegroundColor Yellow
    $continue = Read-Host "是否继续? (y/n)"
    if ($continue -ne "y") {
        exit 1
    }
} else {
    # 初始化git仓库
    Write-Host "📦 初始化git仓库..." -ForegroundColor Green
    git init
    git add .
    git commit -m "Initial commit: DevMind documentation website"
    Write-Host "✅ Git仓库初始化完成" -ForegroundColor Green
}

Write-Host ""
Write-Host "📝 下一步操作:" -ForegroundColor Yellow
Write-Host "1. 在GitHub上创建新仓库 (例如: devmind-docs)"
Write-Host "2. 运行以下命令关联远程仓库:"
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/devmind-docs.git" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. 在GitHub仓库设置中:"
Write-Host "   - 进入 Settings > Pages"
Write-Host "   - Source 选择 'GitHub Actions'"
Write-Host ""
Write-Host "4. GitHub Actions会自动部署网站"
Write-Host ""
Write-Host "🌐 部署后访问: https://YOUR_USERNAME.github.io/devmind-docs/" -ForegroundColor Green
Write-Host ""
