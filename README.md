# DevMind MCP Documentation Website

Official documentation website for [DevMind MCP](https://github.com/JochenYang/Devmind) - An intelligent context-aware memory system for AI assistants.

## 🌐 Live Site

Visit the documentation at: **[YOUR_GITHUB_USERNAME.github.io/devmind-docs](https://YOUR_GITHUB_USERNAME.github.io/devmind-docs)**

## ✨ Features

- 📚 Complete documentation for 18 MCP tools
- 🌍 Full bilingual support (Chinese/English)
- 🎨 Swiss design system
- 📱 Responsive layout
- 🔍 Built-in search functionality
- ⚡ Fast static site built with Vite + React

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 Documentation Structure

- **Home** - Overview and quick start
- **Getting Started** - Installation and configuration
- **MCP Tools** - 18 MCP tools reference
- **CLI Reference** - Command-line interface guide
- **Configuration** - Configuration options
- **API Reference** - JavaScript/TypeScript API
- **Use Cases** - Real-world usage scenarios
- **FAQ** - Frequently asked questions

## 🌍 Multilingual Support

The website supports full bilingual content:
- 🇨🇳 Chinese (Simplified)
- 🇬🇧 English

Language preference is saved in localStorage and persists across sessions.

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router 6
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## 📦 Project Structure

```
devmind-docs/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Layout.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── SearchTrigger.tsx
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── GettingStartedPage.tsx
│   │   ├── ToolsPage.tsx
│   │   ├── CliReferencePage.tsx
│   │   ├── ConfigurationPage.tsx
│   │   ├── ApiReferencePage.tsx
│   │   ├── UseCasesPage.tsx
│   │   └── FAQPage.tsx
│   ├── data/            # Data and translations
│   │   ├── sourceData.ts
│   │   ├── configurationData.ts
│   │   └── translationMappings.ts
│   ├── i18n/            # Internationalization
│   │   ├── LanguageContext.tsx
│   │   └── translations.ts
│   └── App.tsx
├── scripts/
│   └── fetch-version.js  # Fetch latest version from npm
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
└── public/
```

## 🔄 Automatic Deployment

The website automatically deploys to GitHub Pages when:
- Code is pushed to the `main` branch
- Manual workflow dispatch is triggered

The deployment workflow:
1. Fetches the latest version from npm
2. Installs dependencies with pnpm
3. Builds the production bundle
4. Deploys to GitHub Pages

## 🔗 Related Links

- Main Repository: [DevMind MCP](https://github.com/JochenYang/Devmind)
- npm Package: [devmind-mcp](https://www.npmjs.com/package/devmind-mcp)
- Issues: [GitHub Issues](https://github.com/JochenYang/Devmind/issues)

## 📝 License

MIT License - Same as the main DevMind MCP project

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, please open an issue in the [main repository](https://github.com/JochenYang/Devmind/issues).
