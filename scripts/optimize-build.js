#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

// Function to run a command and log output
function runCommand(command, options = {}) {
  console.log(`Running: ${command}`);
  try {
    const result = execSync(command, {
      stdio: "inherit",
      ...options,
    });
    return result;
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Function to check if a file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Function to get file size in KB
function getFileSizeKB(filePath) {
  if (!fileExists(filePath)) return 0;
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

// Function to analyze bundle sizes
function analyzeBundles() {
  const nextDir = path.join(__dirname, "..", ".next");
  const staticDir = path.join(nextDir, "static");

  if (!fileExists(staticDir)) {
    console.log("No build directory found. Run build first.");
    return;
  }

  console.log("\n📦 Bundle Analysis:");

  // Analyze JavaScript chunks
  try {
    const jsChunks = globSync(path.join(staticDir, "chunks", "**/*.js"));
    let totalJS = 0;
    const chunkSizes = [];

    console.log("\n  JavaScript Chunks:");
    jsChunks.forEach((chunk) => {
      const size = getFileSizeKB(chunk);
      totalJS += size;
      const relativePath = path.relative(nextDir, chunk);
      chunkSizes.push({ path: relativePath, size });
      console.log(`    ${relativePath}: ${size} KiB`);
    });

    // Sort by size (largest first)
    chunkSizes.sort((a, b) => b.size - a.size);

    console.log(`\n  Total JavaScript: ${totalJS} KiB`);

    // Show largest chunks
    console.log("\n  📊 Largest Chunks:");
    chunkSizes.slice(0, 5).forEach((chunk, index) => {
      console.log(`    ${index + 1}. ${chunk.path}: ${chunk.size} KiB`);
    });
  } catch (error) {
    console.log("  Could not analyze JavaScript chunks");
  }

  // Analyze CSS files
  try {
    const cssFiles = globSync(path.join(staticDir, "css", "**/*.css"));
    let totalCSS = 0;

    console.log("\n  CSS Files:");
    cssFiles.forEach((css) => {
      const size = getFileSizeKB(css);
      totalCSS += size;
      const relativePath = path.relative(nextDir, css);
      console.log(`    ${relativePath}: ${size} KiB`);
    });

    console.log(`\n  Total CSS: ${totalCSS} KiB`);
  } catch (error) {
    console.log("  Could not analyze CSS files");
  }
}

// Function to optimize the build
function optimizeBuild() {
  console.log("🚀 Starting build optimization...");

  // Clean previous builds
  console.log("\n🧹 Cleaning previous builds...");
  runCommand("bun run clean");

  // Type check
  console.log("\n🔍 Running type check...");
  runCommand("bun run type-check");

  // Build with optimization
  console.log("\n🏗️  Building optimized production version...");
  const startTime = Date.now();

  // Set environment variables for maximum optimization
  const env = {
    ...process.env,
    NEXT_MINIFY_FONTS: "1",
    NEXT_OPTIMIZE_FONTS: "1",
    NEXT_OPTIMIZE_IMAGES: "1",
    NEXT_REMOVE_COMMON_PACKAGES: "1",
    NEXT_TURBO: "1",
  };

  runCommand("bunx --bun next build", { env });
  const buildTime = Date.now() - startTime;

  console.log(
    `\n✅ Build completed in ${Math.round(buildTime / 1000)} seconds`
  );

  // Analyze bundle sizes
  analyzeBundles();

  console.log("\n✨ Optimization complete!");
  console.log("\n💡 To analyze bundle sizes in detail, run:");
  console.log("   ANALYZE=true bunx --bun next build");
}

// Run optimization
optimizeBuild();
