import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputImage = path.resolve("./public/icons/icon-192x192.png"); // Your original icon
const outputDir = path.resolve("./public/icons");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Sizes typically needed for PWA
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

(async () => {
  for (const size of sizes) {
    const outputFile = path.join(outputDir, `icon-${size}x${size}.png`);
    await sharp(inputImage).resize(size, size).toFile(outputFile);
    console.log(`Generated ${outputFile}`);
  }
})();
