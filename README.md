# DevMind MCP Documentation

Official documentation website for DevMind MCP - Intelligent Context-Aware Memory System for Development.

## About

This is the documentation site for DevMind MCP, built with React, TypeScript, and Vite. It provides comprehensive guides, API references, and examples for using DevMind MCP.

## Features

- Bilingual support (English/Chinese)
- Responsive design
- Interactive code examples with copy functionality
- Comprehensive MCP tools documentation
- CLI command reference
- Configuration guides

## Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# or using npm
npm install
```

### Local Development

```bash
# Start development server
pnpm dev

# or using npm
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
pnpm build

# or using npm
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
# Preview production build locally
pnpm preview

# or using npm
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

If you need to deploy manually:

1. Build the project: `pnpm build`
2. The `dist` folder contains the static files
3. Deploy the `dist` folder to your hosting service

## Project Structure

```
devmind-docs/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── data/           # Data files and translations
│   ├── i18n/           # Internationalization
│   ├── pages/          # Page components
│   └── App.tsx         # Main app component
├── .github/
│   └── workflows/      # GitHub Actions
└── package.json
```

## Links

- Main Repository: https://github.com/JochenYang/Devmind
- Documentation Site: https://jochenyang.github.io/devmind-docs/#/
- npm Package: https://www.npmjs.com/package/devmind-mcp

## License

MIT License - see the main repository for details.
