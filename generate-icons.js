const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

const svgContent = (size) => `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="#20C05C"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-weight="bold" font-size="${size * 0.4}" fill="white" text-anchor="middle" dy=".3em">VM</text>
</svg>`;

const sizes = [192, 512];

sizes.forEach(size => {
    fs.writeFileSync(path.join(iconsDir, `icon-${size}.svg`), svgContent(size));
    // Write a simple specialized maskable version (just no rounded corners for safety area)
    const maskableSvg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#20C05C"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-weight="bold" font-size="${size * 0.4}" fill="white" text-anchor="middle" dy=".3em">VM</text>
</svg>`;
    fs.writeFileSync(path.join(iconsDir, `maskable-${size}.svg`), maskableSvg);
    console.log(`Generated SVG icons for size ${size}`);
});
