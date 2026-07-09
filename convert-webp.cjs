const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const rasterExtensions = ['.jpg', '.jpeg', '.png'];
const skipFiles = ['vite.svg', 'vite copy.svg', 'background-1-rotation.svg', 'Logo.svg', 'hamburger.svg', 'close.svg'];

const files = fs.readdirSync(publicDir).filter(f => {
  const ext = path.extname(f).toLowerCase();
  return rasterExtensions.includes(ext) && !skipFiles.includes(f);
});

async function convert() {
  const results = [];
  for (const file of files) {
    const inputPath = path.join(publicDir, file);
    const webpName = path.basename(file, path.extname(file)) + '.webp';
    const outputPath = path.join(publicDir, webpName);
    const originalSize = fs.statSync(inputPath).size;
    await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
    const newSize = fs.statSync(outputPath).size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
    results.push({ file, originalSize, newSize, reduction });
    console.log(`${file}: ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (${reduction}% reduction)`);
  }
  console.log('\nAll conversions complete.');
  return results;
}

convert().catch(err => { console.error(err); process.exit(1); });
