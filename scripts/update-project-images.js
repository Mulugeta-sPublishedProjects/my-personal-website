#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Mapping of original images to optimized versions
const imageMappings = {
  "/projects/agri-bot.png": "/projects/agri-bot.webp",
  "/projects/yene_event.png": "/projects/yene_event.webp",
  "/projects/eservice-home.png": "/projects/eservice-home.webp",
  "/projects/ifhcrs.png": "/projects/ifhcrs.webp",
  "/projects/wumis-login.png": "/projects/wumis-login.webp",
  "/projects/sra-hub-home.jpg": "/projects/sra-hub-home.webp",
  "/projects/adspace-marketplace.jpg": "/projects/adspace-marketplace.webp",
  "/projects/price-tracker.jpg": "/projects/price-tracker.webp",
  "/projects/safeway-app.jpg": "/projects/safeway-app.webp",
  "/projects/about-img.png": "/projects/about-img.webp",
};

// Read the project data file
const projectDataPath = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "projects-data.ts"
);
let projectData = fs.readFileSync(projectDataPath, "utf8");

// Replace image paths
Object.entries(imageMappings).forEach(([oldPath, newPath]) => {
  const regex = new RegExp(
    `image:\\s*['"]${oldPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}['"]`,
    "g"
  );
  projectData = projectData.replace(regex, `image: "${newPath}"`);
  console.log(`Updated: ${oldPath} → ${newPath}`);
});

// Write the updated project data
fs.writeFileSync(projectDataPath, projectData, "utf8");
console.log("\n✅ Project image paths updated successfully!");
console.log("\n💡 Next steps:");
console.log('1. Run "bun run optimize" to rebuild with optimized images');
console.log("2. Test the website to ensure all images load correctly");
