const fs = require('fs');
const path = require('path');

// Simple SVG favicon content
const faviconSvg = `<svg width="192" height="192" xmlns="http://www.w3.org/2000/svg">
  <rect width="192" height="192" fill="#141414"/>
  <rect x="48" y="48" width="96" height="96" rx="12" fill="#12A4ED"/>
  <text x="96" y="110" font-family="Arial" font-size="48" font-weight="bold" text-anchor="middle" fill="white">K</text>
</svg>`;

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write SVG favicon
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);

console.log(
  'Basic favicon.svg created! Visit https://favicon.io to generate the full set of favicon files.'
);
