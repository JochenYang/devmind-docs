import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchLatestVersion() {
  try {
    const response = await fetch(
      "https://registry.npmjs.org/devmind-mcp/latest"
    );
    const data = await response.json();
    const version = data.version;

    console.log(`✅ 获取到最新版本: ${version}`);

    // 生成版本配置文件
    const versionConfig = `// 自动生成的版本配置文件
// 请勿手动编辑
export const NPM_VERSION = '${version}';
export const LAST_UPDATED = '${new Date().toISOString()}';
`;

    const outputPath = join(__dirname, "../src/data/version.ts");
    writeFileSync(outputPath, versionConfig, "utf-8");

    console.log(`✅ 版本配置已写入: ${outputPath}`);
  } catch (error) {
    console.error("❌ 获取版本失败:", error);
    // 如果获取失败，使用默认版本
    const fallbackConfig = `// 自动生成的版本配置文件
export const NPM_VERSION = '1.19.1';
export const LAST_UPDATED = '${new Date().toISOString()}';
`;
    const outputPath = join(__dirname, "../src/data/version.ts");
    writeFileSync(outputPath, fallbackConfig, "utf-8");
    console.log("⚠️  使用默认版本: 1.19.1");
  }
}

fetchLatestVersion();
