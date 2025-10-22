const fs = require("fs");
const path = require("path");

// Function to get file size in KB
function getFileSizeKB(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return Math.round((stats.size / 1024) * 100) / 100;
  } catch (error) {
    return 0;
  }
}

// Function to analyze CSS files and critical path
function analyzeCriticalPath() {
  const nextDir = path.join(process.cwd(), ".next");
  const staticDir = path.join(nextDir, "static");

  console.log("🔍 Analyzing Critical Path Optimization...\n");

  // Check if build exists
  if (!fs.existsSync(nextDir)) {
    console.log("❌ No build found. Run `bun run build` first.");
    return;
  }

  // Analyze CSS files
  try {
    const cssDir = path.join(staticDir, "css");
    if (fs.existsSync(cssDir)) {
      const cssFiles = fs
        .readdirSync(cssDir)
        .filter((file) => file.endsWith(".css"))
        .map((file) => path.join(cssDir, file));

      console.log("📄 CSS Files Analysis:");
      let totalCSS = 0;

      cssFiles.forEach((cssFile, index) => {
        const size = getFileSizeKB(cssFile);
        totalCSS += size;
        const fileName = path.basename(cssFile);
        console.log(`  ${index + 1}. ${fileName}: ${size} KiB`);
      });

      console.log(`\n📊 Total CSS Size: ${totalCSS} KiB`);

      if (cssFiles.length > 2) {
        console.log(
          "\n⚠️  Warning: Too many CSS files may increase critical path latency"
        );
        console.log("💡 Recommendation: Consolidate CSS files where possible");
      } else {
        console.log("\n✅ CSS file count is optimized");
      }
    }
  } catch (error) {
    console.log("  Could not analyze CSS files");
  }

  // Analyze JavaScript chunks
  try {
    const chunksDir = path.join(staticDir, "chunks");
    if (fs.existsSync(chunksDir)) {
      const jsFiles = fs
        .readdirSync(chunksDir)
        .filter((file) => file.endsWith(".js"))
        .map((file) => path.join(chunksDir, file));

      console.log("\n📄 JavaScript Chunks Analysis:");
      let totalJS = 0;

      jsFiles.forEach((jsFile, index) => {
        const size = getFileSizeKB(jsFile);
        totalJS += size;
        const fileName = path.basename(jsFile);
        console.log(`  ${index + 1}. ${fileName}: ${size} KiB`);
      });

      console.log(`\n📊 Total JavaScript Size: ${totalJS} KiB`);
    }
  } catch (error) {
    console.log("  Could not analyze JavaScript chunks");
  }

  // Recommendations
  console.log("\n💡 Optimization Recommendations:");
  console.log('  1. Use `rel="preload"` for critical resources');
  console.log("  2. Minimize CSS file count to reduce critical path latency");
  console.log('  3. Use `rel="preconnect"` for third-party domains');
  console.log("  4. Optimize font loading with `font-display: swap`");
  console.log("  5. Defer non-critical JavaScript");

  console.log("\n✨ Analysis complete!");
}

// Run analysis
analyzeCriticalPath();
