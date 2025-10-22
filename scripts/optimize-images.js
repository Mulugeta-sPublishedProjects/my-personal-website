#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Function to get all image files in a directory
function getImages(dir) {
  const images = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      images.push(...getImages(filePath));
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      // Only process JPG/PNG files, skip WebP/AVIF
      images.push(filePath);
    }
  });

  return images;
}

// Function to optimize an image using sharp
async function optimizeImage(imagePath) {
  try {
    const stats = fs.statSync(imagePath);
    const originalSize = stats.size;

    // Skip already optimized images (less than 50KB)
    if (originalSize < 50 * 1024) {
      console.log(
        `✓ Skipping small image: ${path.basename(imagePath)} (${Math.round(originalSize / 1024)}KB)`
      );
      return;
    }

    // For large images, compress more aggressively
    let quality = 80;
    if (originalSize > 500 * 1024) {
      quality = 60; // Very large images get more compression
    } else if (originalSize > 200 * 1024) {
      quality = 70; // Medium-large images get moderate compression
    } else if (originalSize > 100 * 1024) {
      quality = 75; // Medium images get moderate compression
    }

    // Convert to webp for better compression
    const outputPath = imagePath.replace(/\.(jpe?g|png)$/i, ".webp");

    // Use sharp library directly to convert and compress
    await sharp(imagePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);

    // Get new file size
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = originalSize - newSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    console.log(
      `✓ Optimized: ${path.basename(imagePath)} → ${path.basename(outputPath)}`
    );
    console.log(
      `  Original: ${Math.round(originalSize / 1024)}KB → New: ${Math.round(newSize / 1024)}KB (Saved ${Math.round(savings / 1024)}KB, ${savingsPercent}%)`
    );

    // Update project data to use the new image
    if (imagePath.includes("projects")) {
      console.log(
        `  Note: Update project data to use ${path.basename(outputPath)}`
      );
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${imagePath}:`, error.message);
  }
}

// Main function
async function optimizeAllImages() {
  console.log("🔍 Finding and optimizing large images...\n");

  // Define directories to check
  const directories = [
    path.join(__dirname, "..", "public", "projects"),
    path.join(__dirname, "..", "public"),
  ];

  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      console.log(`📁 Checking directory: ${dir}`);
      const images = getImages(dir);

      for (const imagePath of images) {
        const stats = fs.statSync(imagePath);
        const sizeKB = Math.round(stats.size / 1024);

        // Only process images larger than 50KB
        if (sizeKB > 50) {
          console.log(
            `\n🖼️  Processing: ${path.basename(imagePath)} (${sizeKB}KB)`
          );
          await optimizeImage(imagePath);
        }
      }
    }
  }

  console.log("\n✨ Image optimization complete!");
  console.log("\n💡 Next steps:");
  console.log(
    "1. Update your project data files to reference the new .webp images"
  );
  console.log("2. Test the website to ensure all images load correctly");
  console.log(
    "3. Remove the original large .jpg/.png files to reduce bundle size"
  );
}

// Run optimization
optimizeAllImages();
